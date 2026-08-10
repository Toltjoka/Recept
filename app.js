// RÖKHUSET — app.js
// Ren vanilla JS, ingen byggprocess. Läser RECIPES från data.js.
// Routing via location.hash så filen fungerar direkt när man
// dubbelklickar på index.html (inga serverkrav).

(function () {
  const app = document.getElementById("app");

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function slugParam() {
    const hash = location.hash || "";
    const match = hash.match(/^#\/recept\/(.+)$/);
    return match ? decodeURIComponent(match[1]) : null;
  }

  function flattenIngredientCount(ingredients) {
    let count = 0;
    ingredients.forEach((entry) => {
      if (typeof entry === "string") count += 1;
      else count += entry.items.length;
    });
    return count;
  }

  function render() {
    const id = slugParam();
    if (id) {
      const recipe = RECIPES.find((r) => r.id === id);
      if (recipe) {
        renderDetail(recipe);
        return;
      }
    }
    renderHome();
  }

  // ---------- Home ----------

  let currentCategory = "Alla";
  let currentQuery = "";

  function renderHome() {
    const categories = ["Alla", ...Array.from(new Set(RECIPES.map((r) => r.category))).sort()];

    const sorted = [...RECIPES].sort((a, b) => (b.dateAdded || "").localeCompare(a.dateAdded || ""));

    const filtered = sorted.filter((r) => {
      const matchesCategory = currentCategory === "Alla" || r.category === currentCategory;
      const haystack = (r.title + " " + r.book + " " + r.category).toLowerCase();
      const matchesQuery = currentQuery.trim() === "" || haystack.includes(currentQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });

    app.innerHTML = `
      <div class="controls">
        <input type="text" class="search-input" id="search" placeholder="Sök recept, kock eller kategori…" value="${escapeHtml(currentQuery)}" aria-label="Sök recept">
        <div class="category-pills" id="pills" role="group" aria-label="Filtrera på kategori">
          ${categories.map((c) => `<button class="pill ${c === currentCategory ? "active" : ""}" data-cat="${escapeHtml(c)}">${escapeHtml(c)}</button>`).join("")}
        </div>
      </div>
      <div class="recipe-grid">
        ${filtered.length === 0
          ? `<div class="empty-state">Inga recept matchar. Justera sökning eller filter.</div>`
          : filtered.map(cardHtml).join("")}
      </div>
      <footer class="stats">${RECIPES.length} recept i boken · senast tillagd ${latestDate()}</footer>
    `;

    document.getElementById("search").addEventListener("input", (e) => {
      currentQuery = e.target.value;
      renderHome();
      document.getElementById("search").focus();
      const val = document.getElementById("search").value;
      document.getElementById("search").setSelectionRange(val.length, val.length);
    });

    document.getElementById("pills").addEventListener("click", (e) => {
      const btn = e.target.closest(".pill");
      if (!btn) return;
      currentCategory = btn.dataset.cat;
      renderHome();
    });
  }

  function latestDate() {
    const dates = RECIPES.map((r) => r.dateAdded).filter(Boolean).sort();
    return dates[dates.length - 1] || "–";
  }

  function cardHtml(r) {
    const count = flattenIngredientCount(r.ingredients);
    return `
      <a class="recipe-card" href="#/recept/${encodeURIComponent(r.id)}">
        <span class="badge">${escapeHtml(r.category)}</span>
        <h3>${escapeHtml(r.title)}</h3>
        <div class="meta">
          <span>${escapeHtml(r.book)}</span>
          <span>${count} ingredienser</span>
        </div>
      </a>
    `;
  }

  // ---------- Detail ----------

  function storageKey(id) {
    return `rokhuset-checklist-${id}`;
  }

  function loadChecked(id) {
    try {
      const raw = localStorage.getItem(storageKey(id));
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function saveChecked(id, state) {
    try {
      localStorage.setItem(storageKey(id), JSON.stringify(state));
    } catch (e) {
      /* localStorage otillgängligt, ignorera tyst */
    }
  }

  function renderDetail(recipe) {
    const checked = loadChecked(recipe.id);
    const totalCount = flattenIngredientCount(recipe.ingredients);

    let ingIndex = 0;
    const ingredientsHtml = recipe.ingredients.map((entry) => {
      if (typeof entry === "string") {
        return ingredientItemHtml(entry, ingIndex++, checked);
      }
      const itemsHtml = entry.items.map((text) => ingredientItemHtml(text, ingIndex++, checked)).join("");
      return `
        <div class="ingredient-group">
          <div class="ingredient-group__label">${escapeHtml(entry.group)}</div>
          <ul class="ingredient-list">${itemsHtml}</ul>
        </div>
      `;
    }).join("");

    // ingredients without a group get wrapped in one shared <ul>
    const hasFlatOnly = recipe.ingredients.every((e) => typeof e === "string");
    const ingredientsBlock = hasFlatOnly
      ? `<ul class="ingredient-list">${ingredientsHtml}</ul>`
      : ingredientsHtml;

    app.innerHTML = `
      <a class="back-link" href="#/">&larr; Till receptboken</a>
      <div class="detail-header">
        <span class="badge">${escapeHtml(recipe.category)}</span>
        <h1>${escapeHtml(recipe.title)}</h1>
        <div class="source">
          <strong>${escapeHtml(recipe.book)}</strong> · ${escapeHtml(recipe.bookFull.split("–")[1] || "")}
          ${recipe.servings ? ` · ${escapeHtml(recipe.servings)}` : ""}
        </div>
      </div>
      <div class="detail-grid">
        <div class="ticket">
          <h2>Checklista</h2>
          <div class="gauge">
            <div class="gauge-label"><span id="gauge-text">0 / ${totalCount} avbockade</span><span id="gauge-pct">0%</span></div>
            <div class="gauge-track"><div class="gauge-fill" id="gauge-fill" style="width:0%"></div></div>
          </div>
          ${ingredientsBlock}
          <button class="ticket-reset" id="reset-checklist">Rensa checklista</button>
        </div>
        <div class="method">
          <h2>Tillagning</h2>
          <ol>
            ${recipe.steps.map((s) => `<li>${escapeHtml(s)}</li>`).join("")}
          </ol>
        </div>
      </div>
    `;

    function updateGauge() {
      const state = loadChecked(recipe.id);
      const doneCount = Object.values(state).filter(Boolean).length;
      const pct = totalCount === 0 ? 0 : Math.round((doneCount / totalCount) * 100);
      document.getElementById("gauge-text").textContent = `${doneCount} / ${totalCount} avbockade`;
      document.getElementById("gauge-pct").textContent = `${pct}%`;
      document.getElementById("gauge-fill").style.width = `${pct}%`;
    }

    app.querySelectorAll(".ingredient-item input[type=checkbox]").forEach((box) => {
      box.addEventListener("change", () => {
        const state = loadChecked(recipe.id);
        state[box.dataset.idx] = box.checked;
        saveChecked(recipe.id, state);
        box.closest(".ingredient-item").classList.toggle("checked", box.checked);
        updateGauge();
      });
    });

    document.getElementById("reset-checklist").addEventListener("click", () => {
      saveChecked(recipe.id, {});
      renderDetail(recipe);
    });

    updateGauge();
    window.scrollTo(0, 0);
  }

  function ingredientItemHtml(text, idx, checked) {
    const isChecked = !!checked[idx];
    return `
      <li class="ingredient-item ${isChecked ? "checked" : ""}">
        <input type="checkbox" id="ing-${idx}" data-idx="${idx}" ${isChecked ? "checked" : ""}>
        <label for="ing-${idx}" style="cursor:pointer; flex:1;"><span>${escapeHtml(text)}</span></label>
      </li>
    `;
  }

  window.addEventListener("hashchange", render);
  window.addEventListener("DOMContentLoaded", render);
  if (document.readyState !== "loading") render();
})();
