# Rökhuset — lokal receptbok

Ett fristående HTML-verktyg (ingen server, inget bygge) med alla dina recept.
Förstasidan listar alla recept som klickbara kort, varje recept har en
ingredienschecklista (bockas av och sparas i webbläsaren) och en beskrivning
med numrerade steg.

## Köra det lokalt

Dubbelklicka på `index.html` — den öppnas i din webbläsare och funkar direkt,
utan internetuppkoppling (fonterna laddas online om du har uppkoppling, annars
faller sidan tillbaka på systemtypsnitt).

## Koppla till GitHub

Ett git-repo är redan initierat i den här mappen (första committen är gjord).
För att få upp det på GitHub:

1. Skapa ett nytt, tomt repo på github.com (utan README/gitignore).
2. Kör i den här mappen:
   ```
   git remote add origin https://github.com/ANVANDARE/REPO-NAMN.git
   git branch -M main
   git push -u origin main
   ```
3. Vill du kunna öppna sidan via en webblänk (inte bara lokalt) kan du slå på
   **GitHub Pages** i repots Settings → Pages → Branch: main → Save. Sidan
   dyker då upp på `https://ANVANDARE.github.io/REPO-NAMN/`.

Efter det pushar du bara `git add . && git commit -m "..." && git push` varje
gång filerna ändras.

## Inköpslista → Anteckningar / Påminnelser

Varje ingrediens har två oberoende kryssrutor:
- **Runda till vänster** — bocka av vartefter du lagar (stryker över texten, räknas i procent-mätaren högst upp).
- **Fyrkantig till höger** — kryssa i det som **ska handlas**. Påverkar inte den runda eller texten.

Knappen **"Exportera inköpslista"** samlar allt som är ikryssat i de fyrkantiga
rutorna och öppnar iPhonens delningsmeny (Web Share API), så du kan skicka
listan rakt in i Anteckningar, Påminnelser, Meddelanden eller mejl. Listan
formateras som `☐ ingrediens` per rad — en enkel, läsbar checklista i vanlig
text (webbläsare kan inte skapa Anteckningars interaktiva kryssrutor direkt,
men den här texten är lätt att scanna i affären).

På datorer utan delningsmeny kopieras listan till urklipp istället, med en
bekräftelse under knappen.

## Lägga till nya recept

Alla recept ligger i **`data.js`**, i arrayen `RECIPES`. Varje recept är ett
objekt enligt mallen:

```js
{
  id: "unikt-url-namn",                 // små bokstäver, bindestreck
  title: "Receptets namn",
  book: "Kock/källa",
  bookFull: "Kock – Bok/kurs, år",
  category: "Kategori (t.ex. Sås, Bröd, BBQ & kött)",
  servings: "4 personer",               // valfritt
  dateAdded: "2026-08-10",              // styr sortering, nyast överst
  ingredients: [
    "300 g något",
    "1 st annat"
    // eller grupperat:
    // { group: "Såsen", items: ["...", "..."] }
  ],
  steps: [
    "Första steget.",
    "Andra steget."
  ]
}
```

Lägg till ett nytt objekt sist i arrayen (eller be Claude göra det nästa gång
du klistrar in eller laddar upp ett nytt recept) och committa/pusha filen —
receptet dyker automatiskt upp överst på förstasidan.

## Filer

- `index.html` — sidskal, laddar de andra filerna
- `style.css` — all styling
- `data.js` — receptdata (den fil du oftast kommer redigera/utöka)
- `app.js` — routing, sök/filter, checklistlogik (localStorage per recept)
