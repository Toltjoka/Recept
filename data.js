// RECEPTDATA
// Lägg till nya recept genom att lägga till ett nytt objekt i RECIPES-arrayen.
// id måste vara unikt (används i webbadressen), dateAdded avgör sorteringen
// på förstasidan (nyast först).
//
// ingredients-fält kan antingen vara en flat lista av strängar, eller
// grupperas med { group: "Namn", items: [...] } när receptet har flera delar
// (t.ex. huvudrätt + sås).

const RECIPES = [
  {
    id: "sonoran-tortilla-grundrecept",
    title: "Sonoran Tortilla",
    book: "Jonas Cramby",
    bookFull: "Jonas Cramby – kokbok, grundrecept",
    category: "Bröd",
    servings: "8 stora eller 16 små",
    dateAdded: "2026-08-10",
    ingredients: [
      "260 g tipo 00-mjöl",
      "180 g varmt vatten, cirka 60–65 grader",
      "½ tsk salt",
      "50 g rumstempererat ister (alternativt talg eller smör)"
    ],
    steps: [
      "Autolys: blanda mjölet med det varma vattnet till en smidig deg. Låt vila i rumstemperatur i 30 minuter så att glutentrådarna hinner bildas, innan fettet tillsätts (fett hämmar glutenutvecklingen).",
      "Tillsätt salt och knåda, för hand eller i maskin, i cirka 10 minuter samtidigt som du arbetar in istret en klick i taget. Degen ska bli jämn och smidig.",
      "Vik ihop degen, täck skålen och låt vila minst 1 timme i kylen.",
      "Dela degen i så många bitar som du vill ha tortillas och forma till bollar. Ju noggrannare du formar dem, desto jämnare blir resultatet. Platta till varje boll med fingrarna till en rund disk.",
      "Kavla ut, snurra degen och kavla igen — upprepa tills tortillan är så tunn att du nästan ser bordsskivan genom den. Använd lite mjöl om degen känns kladdig.",
      "Hetta upp en torr stekhäll eller panna. Värmen är viktig: tillräckligt varm för att tortillan ska puffa upp, men inte så varm att mjölet bränns och blir bittert. Stek varje tortilla några sekunder per sida tills den puffar upp.",
      "Låt tortillorna vila i en hög, gärna inlindade i en handduk eller i en tortillavärmare. Ät direkt eller värm upp igen på grillen eller i panna."
    ]
  },
  {
    id: "annas-ragbrod",
    title: "Annas Rågbröd",
    book: "Anna",
    bookFull: "Anna – baserat på ett recept från Vegetarisk Hverdag (Camilla Skov)",
    category: "Bröd",
    servings: "1 rågbröd, ca ett dygns totaltid",
    dateAdded: "2026-08-10",
    sourceUrl: "https://vegetariskhverdag.dk/2018/12/rugbroed-en-nem-opskrift/",
    ingredients: [
      { group: "Kväll, dag 1 (fördeg)", items: [
        "50 g surdeg",
        "120 g rågmjöl (2 dl)",
        "60 g vetemjöl (1 dl)",
        "600 g vatten (6 dl)",
        "125 g krossade vetekärnor (2 dl)",
        "125 g krossade rågkärnor (2 dl)"
      ]},
      { group: "Morgon, dag 2 (tillsätts i fördegen)", items: [
        "120 g vetemjöl (2 dl)",
        "60–120 g rågmjöl (1–2 dl, beroende på konsistens)",
        "1 dl solroskärnor eller andra valfria kärnor (t.ex. linfrö, sesamfrö eller chiafrö)",
        "16 g fint havssalt (ca 1¼ msk)",
        "2 msk maltsirap (valfritt)"
      ]}
    ],
    steps: [
      "Kväll, dag 1: blanda surdegen med rågmjöl, vetemjöl, vatten och de krossade kärnorna i en bunke. Häll gärna i vattnet lite i taget så det blir lättare att röra ut klumparna. Låt stå övertäckt på köksbänken över natten.",
      "Morgon, dag 2: rör ner vetemjöl, rågmjöl, solroskärnor, salt och eventuell maltsirap i fördegen. Mängden rågmjöl styrs av konsistensen — degen ska vara våt men inte flytande. Ställ degen i kylen medan du är på jobbet eller i skolan, cirka 8–9 timmar (eller låt den jäsa i rumstemperatur i cirka 3 timmar om du är hemma).",
      "Eftermiddag, dag 2: ta ut degen ur kylen. Smöra en brödform, fyll i degen och jämna till ytan med en degskrapa (blöt skrapan under kranen så går det lättare). Låt jäsa i rumstemperatur tills degen stigit någon centimeter och ytan börjar se lite \u201ctrött\u201d ut, cirka 3 timmar.",
      "Kväll, dag 2: picka cirka 20 hål i degen med en stickpinne eller liknande, så att ångan kan komma ut utan att det bildas en luftficka mellan skorpa och bröd.",
      "Grädda i 200 °C vanlig ugn (över-/undervärme) i sammanlagt 1 timme och 15 minuter. Efter en timme kan du ta ur brödet ur formen och grädda klart direkt på galler de sista 15 minuterna.",
      "Vill du ha en mörk, blank skorpa: pensla brödet med smör direkt när det kommer ur ugnen. Vill du istället ha en mjuk skorpa: linda in brödet i en kökshandduk eller lägg det i en plastpåse medan det fortfarande är ljummet. Vänta minst 5 timmar (gärna till morgonen efter) innan du skär i brödet, så hinner det sätta sig."
    ]
  },
  {
    id: "alabama-chicken",
    title: "Alabama Chicken",
    book: "ICA",
    bookFull: "ICA.se – ur tidningen Buffé nr 5, 2024",
    category: "BBQ & kött",
    servings: "6 portioner",
    dateAdded: "2026-08-10",
    sourceUrl: "https://www.ica.se/recept/alabama-chicken-740396/",
    ingredients: [
      { group: "Rimlag", items: [
        "1 liter vatten",
        "1 dl salt",
        "½ dl strösocker",
        "6 kycklingklubbor",
        "ca 1½ dl rökflis"
      ]},
      { group: "Rub", items: [
        "2 msk paprikapulver",
        "1 msk lökpulver",
        "1 msk svartpeppar"
      ]},
      { group: "Alabama pink sauce", items: [
        "2½ dl majonnäs",
        "1 dl äppelcidervinäger",
        "1 msk sambal oelek",
        "1½ tsk worcestershiresås",
        "2 krm chiliflakes",
        "1 krm cayennepeppar",
        "2 krm svartpeppar",
        "½ tsk salt"
      ]}
    ],
    steps: [
      "Rimlag: blanda vatten, salt och strösocker till en rimlag. Lägg i kycklingklubborna och låt rimma i kylen i 1 timme.",
      "Lägg rökflisen i en skål med vatten så den hinner suga upp fukt inför rökningen.",
      "Rub: blanda paprikapulver, lökpulver och svartpeppar.",
      "Förbered grillen för rökning: tänd ett tjockt lager kol och låt det brinna ner till fin glöd, cirka 30 minuter. Strö den fuktiga träflisen över kolen och lägg på locket.",
      "Ta upp kycklingen ur rimlagen och torka torr med hushållspapper. Gnid in rubben ordentligt. Lägg klubborna på grillen, lägg på locket och rök vid 120 °C tills innertemperaturen når 82 °C, cirka 4 timmar.",
      "Alabama pink sauce: rör ihop alla ingredienser till en jämn sås.",
      "Grilla klubborna en kort stund direkt över glöden mot slutet så skinnet blir krispigt.",
      "Doppa de nygrillade klubborna i Alabama-såsen och servera direkt.",
      "Tips: flera som lagat receptet tycker mängden äppelcidervinäger i såsen (1 dl) blir väl mycket — testa gärna med t.ex. 1 msk först och smaka dig fram om du vill ha en mildare sås."
    ]
  },
  {
    id: "carne-asada-tacos",
    title: "Carne Asada Tacos",
    book: "Jonas Cramby",
    bookFull: "Jonas Cramby – Cooking Class Holy Smoke, 2026",
    category: "Tacos",
    servings: "6–8 portioner (ca 24 st)",
    dateAdded: "2026-08-10",
    ingredients: [
      "800 g entrecote, utskuren biff eller välmarmorerat högrev, hel bit",
      "400 g fior di latte (torr mozzarella), riven",
      "1 sats Sonoran tortillas (se recept)",
      "1 sats Salsa Verde de Aguacate (se recept)",
      "1 sats Salsa Negra (se recept)"
    ],
    steps: [
      "Förbered salsan och baka dina tortillas. Lägg köttet i frys ett par timmar. Det ska vara fast och iskallt men inte djupfryst. Skiva tunt mot köttfibrerna i skärmaskin eller om du är skicklig med kniven (alternativt be slaktaren om hjälp).",
      "När det är dags att äta: lägg en liten hög riven ost på stekbord eller i stekpanna (ej teflon). Släng på en tortilla och när en ostcrust, en så kallad \u201ccostra\u201d, bildats skrapar du upp den och vänder. Lägg på en snabbgrillad bit av det lövtunna köttet och ät omedelbart med salsorna."
    ]
  },
  {
    id: "salsa-verde-de-aguacate",
    title: "Salsa Verde de Aguacate",
    book: "Jonas Cramby",
    bookFull: "Jonas Cramby – Cooking Class Holy Smoke, 2026",
    category: "Sås",
    servings: "Till ca 24 tacos",
    dateAdded: "2026-08-10",
    ingredients: [
      "300 g tomatillos",
      "½ silverlök",
      "5 jalapeños",
      "4 vitlöksklyftor",
      "1 dl vatten",
      "1 msk Knorr kycklingbuljongpulver",
      "1 bunt koriander",
      "2 avokados, tärnade",
      "½ silverlök, finhackad",
      "Salt",
      "Lime"
    ],
    steps: [
      "Grilla tomatillos, en halv silverlök och vitlök tills de får färg. Skala vitlöken, ta bort stjälk och kärnor från jalapeñon och mixa allt med vatten, kycklingpulver och färsk koriander.",
      "Precis innan servering: tillsätt finhackad silverlök och tärnad avokado och smaka av med salt och eventuellt lite pressad lime."
    ]
  },
  {
    id: "salsa-negra",
    title: "Salsa Negra",
    book: "Jonas Cramby",
    bookFull: "Jonas Cramby – Cooking Class Holy Smoke, 2026",
    category: "Sås",
    servings: "Till ca 24 tacos",
    dateAdded: "2026-08-10",
    ingredients: [
      "10 chiles de árbol, urkärnade och utan skaft",
      "2 pasillachili eller guajillo, urkärnade och utan skaft",
      "4 vitlöksklyftor, skalade",
      "½ silverlök, skalad och delad",
      "½ dl japansk soja",
      "½ dl neutral olja",
      "2 msk sesamolja"
    ],
    steps: [
      "Värm upp den neutrala oljan till medelvärme och fritera lök och vitlök till gyllene. Lyft ur och låt svalna.",
      "Fritera chilin snabbt och i omgångar, den ska mörkna och bli frasig men inte bränd. Låt oljan svalna men spara den.",
      "Mixa lök, vitlök och chili slätt med soja. Tillsätt den svalnade oljan samt sesamoljan under mixning tills en emulsion uppstår."
    ]
  },
  {
    id: "sonoran-tortillas",
    title: "Sonoran Tortillas",
    book: "Jonas Cramby",
    bookFull: "Jonas Cramby – Cooking Class Holy Smoke, 2026",
    category: "Bröd",
    servings: "ca 24 st",
    dateAdded: "2026-08-10",
    ingredients: [
      "520 g Tipo 00-mjöl, 12–14 % protein",
      "1 tsk salt",
      "330 g varmt vatten, cirka 60–65 grader",
      "75 g ister (eller brisketfett), gärna rumsvarmt",
      "Extra mjöl, för utbakning"
    ],
    steps: [
      "Autolys: mät upp mjölet, häll över det varma vattnet och knåda ihop till en smidig deg. Låt vila 30 minuter så att glutentrådarna hinner bildas (fett förhindrar glutenutveckling, därför väntar vi med istret).",
      "Tillsätt salt och knåda, för hand eller i maskin, cirka 10 minuter samtidigt som du tillsätter ister, en klick i taget. Degen ska vara helt smooth när det är dags för vila igen. Täck och låt vila minst en timme i kylskåp, gärna över natten.",
      "Dela degen i cirka 35–40 g bollar – ju noggrannare desto snyggare resultat. Platta till dem med fingrarna till en rund disk (använd lite mjöl om degen är kladdig). Kavla, snurra degen, kavla igen och upprepa tills de är så runda och tunna som möjligt.",
      "Hetta upp plattan lagom varmt – tortillan ska puffa upp utan att mjölet bränns och blir bittert. Lägg en tortilla i pannan, stek ett par sekunder till den puffar upp, vänd. Låt dem vila i en hög i en handduk eller tortillavärmare."
    ]
  },
  {
    id: "porchetta",
    title: "Porchetta",
    book: "Jonas Cramby",
    bookFull: "Jonas Cramby – Cooking Class Holy Smoke, 2026 (BBQ-brickan)",
    category: "BBQ & kött",
    servings: "3–4 kg fläsksida",
    dateAdded: "2026-08-10",
    ingredients: [
      "3–4 kilo hel fläsksida med svål, helst så köttig som möjligt",
      { group: "Örtblandning", items: [
        "50–65 g salt (ca 1,5–2 % av köttets vikt)",
        "6–8 vitlöksklyftor",
        "3–4 msk fänkålsfrön, lätt rostade",
        "2 msk grovmalen svartpeppar",
        "4 msk färsk rosmarin, finhackad",
        "2 msk färsk timjan",
        "Zest från 1 citron",
        "2 msk olivolja"
      ]}
    ],
    steps: [
      "Torka svålen noggrant – låt gärna ligga oövertäckt 24–48 timmar i kyl på galler.",
      "Mortla eller mixa ingredienserna till örtblandningen till en grov pasta.",
      "Skär upp fläsksidan på längden, men spara ett par centimeter längst in så att köttbiten fortfarande hänger ihop. Gnid in kryddpastan på köttsidan, inte på svålen. Rulla hårt och bind upp. Salta svålen och låt vila i kyl eller grilla direkt.",
      "Lägg porchettan med svålen upp på ett galler med en droppbricka under. Få upp grillen till runt 140 grader indirekt värme (eller kör i ugnen). Baka low and slow i cirka 4–5 timmar så att fettet renderar ut och köttet blir mört. Mål-innertemp: 75–80 °C i mitten.",
      "Ta ut köttet, öppna ventilerna och gå upp till 240–250 °C (eller kör klart i ugnen). Sätt tillbaka köttet och låt svålen puffa upp och bli lätt och krispig, 10–20 minuter under ständig uppsikt. Flytta från hot spots, vänd och snurra så inget bränns. Slutlig innertemp 85–90 °C är en bra sweet spot för saftighet och struktur.",
      "Låt köttet vila innan du skär upp det, gärna med en riktigt vass brödkniv."
    ]
  },
  {
    id: "beef-cheek-pastrami",
    title: "Beef Cheek Pastrami",
    book: "Jonas Cramby",
    bookFull: "Jonas Cramby – Cooking Class Holy Smoke, 2026 (BBQ-brickan)",
    category: "BBQ & kött",
    servings: "3 kg oxkinder",
    dateAdded: "2026-08-10",
    ingredients: [
      "3 kg oxkinder",
      "Grovmalen svartpeppar och korianderfrö",
      "Talg eller matolja till konfitering",
      { group: "Rimlag", items: [
        "2,5 liter vatten",
        "110 g vanligt salt",
        "50 g svenskt nitritsalt",
        "1 msk korianderfrö",
        "1 msk hela senapsfrön",
        "1 msk hel svartpeppar",
        "1 msk hel kryddpeppar",
        "6 st lagerblad"
      ]}
    ],
    steps: [
      "Koka upp vatten och lägg i alla ingredienser till rimlagen. Rör om tills allt löst sig och låt svalna helt.",
      "Häll rimlagen över oxkinderna och låt rimma 4–6 dagar, vänd gärna ibland.",
      "Ta upp köttet ur rimlagen, torka av och rubba med svartpeppar och korianderfrö.",
      "Rök oövertäckt i en smoker 4–5 timmar vid 120 °C.",
      "Lägg över köttet i en form, häll på konfiteringsfettet, klä in i folie och låt konfitera i ugn eller smoker cirka 4–5 timmar till.",
      "Låt vila i rumstemperatur cirka 30 minuter innan servering. Skiva upp och ät."
    ]
  },
  {
    id: "parmesankram",
    title: "Parmesankräm",
    book: "Jonas Cramby",
    bookFull: "Jonas Cramby – Cooking Class Holy Smoke, 2026 (BBQ-brickan)",
    category: "Sås",
    dateAdded: "2026-08-10",
    ingredients: [
      "100 g parmesan, riven",
      "25 g smör",
      "25 g mjöl",
      "2,5 dl mjölk"
    ],
    steps: [
      "Smält smöret i en kastrull och vispa ner mjölet.",
      "Häll på mjölken under omrörning tills den tjocknat och inga klumpar återstår.",
      "Rör i parmesanen och låt svalna."
    ]
  },
  {
    id: "schiacciata",
    title: "Schiacciata",
    book: "Jonas Cramby",
    bookFull: "Jonas Cramby – Cooking Class Holy Smoke, 2026 (BBQ-brickan)",
    category: "Bröd",
    servings: "2 bröd",
    dateAdded: "2026-08-10",
    ingredients: [
      { group: "Biga", items: [
        "300 g Tipo 00-mjöl",
        "180 g vatten (20 °C)",
        "1 g färsk jäst"
      ]},
      { group: "Huvuddeg", items: [
        "Hela bigan",
        "400 g Tipo 00-mjöl",
        "ca 320 g vatten, kallt (beroende på mjöl)",
        "20 g olivolja, plus mer till bakning",
        "2 g färsk jäst",
        "4 g socker",
        "12 g salt"
      ]}
    ],
    steps: [
      "Biga: lös jästen i vattnet och blanda in mjölet till en grov deg (ingen knådning behövs). Täck och låt stå 12–16 timmar i rumstemperatur (ca 20 °C) tills den är tredubblad och porös.",
      "Huvuddeg: rör ut jästen i vattnet. Riv sönder bigan, häll i jästvattnet, tillsätt mjöl och knåda ihop, gärna i maskin. Låt vila 20 minuter.",
      "Tillsätt salt och olivolja och knåda tills degen är smidig och elastisk. Låt vila en timme och vik degen 1–2 gånger under tiden. Kalljäs i kylen över natten.",
      "Morgonen efter: häll ut degen försiktigt på ett lätt mjölat bord. Dela i 2–3 bitar med degskrapa. Forma varsamt till bollar med en eller två mjuka vikningar mot mitten, snurra lätt mot bordet tills ytan är slät. Lägg i en oljad låda med lock och sätt tillbaka i kylen.",
      "Förgräddning: ta ut degen 1–2 timmar innan bakning. Sätt ugnen på ca 275 °C varmluft, använd gärna baksten. Vänd upp en degboll på mjölat bord, mjöla rikligt och tryck ut till en oval form, ca 1,5 cm tjock. Lyft försiktigt över på en pizzaspade och skjutsa in i ugnen.",
      "Baka 8–10 minuter tills brödet just fått färg men inte är helt gyllene. Låt svalna på galler. Kan förvaras eller frysas i detta steg, eller stå i rumstemperatur under duk ett dygn.",
      "Slutlig uppkrispning: sätt ugnen på 220 °C och värm brödet 5 minuter tills ytan blir gyllene och krispig igen. Pensla direkt med extra jungfruolivolja och strö gärna på flingsalt eller färsk rosmarin."
    ]
  },
  {
    id: "flaskkarre-bbq",
    title: "Fläskkarré BBQ med currykål, chilimajonnäs och hamburgerbröd",
    book: "Stefan Ekengren",
    bookFull: "Stefan Ekengren – Cooking Class Holy Smoke BBQ, 2026",
    category: "BBQ & kött",
    servings: "4 personer",
    dateAdded: "2026-08-10",
    ingredients: [
      { group: "Fläskkarré", items: [
        "600 g fläskkarré, skivad",
        "50 g smör",
        "6 bananschalottenlökar, finskivade",
        "1 dl BBQ-sås",
        "4 hamburgerbröd",
        "Salt och nymald svartpeppar"
      ]},
      { group: "Currykål", items: [
        "½ litet spetskålshuvud, grovt skuret",
        "2 dl rapsolja",
        "2 citroner, skalet rivet och juicen pressad",
        "3 tsk röd curry",
        "2 tsk Sambal oelek"
      ]},
      { group: "Chilimajonnäs", items: [
        "1 äggula",
        "2 msk Sambal oelek",
        "1 msk gari",
        "1 msk soja",
        "3 dl rapsolja"
      ]}
    ],
    steps: [
      "Smält smöret i en kastrull. Koka löken mjuk i smöret utan att den tar färg, håll varm och ställ åt sidan.",
      "Salta köttet och grilla hårt på båda sidor, det ska vara lite rosa inuti. Peppra väl efteråt. Lägg köttet på en skärbräda och skiva supertunt medan det fortfarande är varmt. Vänd ner det i en skål tillsammans med smörkokta löken och BBQ-såsen, rör om och smaka av med salt och peppar.",
      "Currykål: lägg kålen i en bunke och salta lätt. Hetta upp olja, citronjuice, citronskal, curry och Sambal oelek och slå den varma lagen direkt över kålen. Massera in och lägg upp i burk.",
      "Chilimajonnäs: mixa äggula, gari och Sambal oelek. Fortsätt mixa och tillsätt oljan i en tunn stråle tills majonnäsen tjocknar. Smaka av med soja."
    ]
  },
  {
    id: "rokt-falukorv",
    title: "Rökt Falukorv",
    book: "Stefan Ekengren",
    bookFull: "Stefan Ekengren – Cooking Class Holy Smoke BBQ, 2026",
    category: "Korv",
    servings: "10 personer",
    dateAdded: "2026-08-10",
    ingredients: [
      "800 g späck",
      "800 g fläskkarré",
      "400 g högrev",
      "4 g malen muskot",
      "6 g senapspulver",
      "6 g malen ingefära",
      "20 g lökpulver",
      "2 g kryddpeppar",
      "2 g vitpeppar",
      "50 g nitritsalt",
      "400 g krossad is",
      "1–2 falukorvsfjälster (beroende på längd och diameter – ett stort räcker ofta till ca 2 kg smet)"
    ],
    steps: [
      "Den totala kött- och fettmängden blir 2 kg, vilket ger ungefär 2,4 kg färdig korvsmet inklusive is och kryddor. Räcker till cirka 10 personer som huvudrätt.",
      "Mixa pepparn och blanda med övriga kryddor och nitritsaltet.",
      "Mal köttet och blanda med vingen på mellanhastighet i maskinen tillsammans med kryddor och salt. Fortsätt på mellanhastighet tills smeten känns homogen, ca 6–8 minuter.",
      "Fyll fjälster och baka på 85 grader varmrök till 68 graders innertemperatur. Kyl korvarna i isvatten."
    ]
  },
  {
    id: "makaroner-vasterbottensost",
    title: "Makaroner & Västerbottensost",
    book: "Stefan Ekengren",
    bookFull: "Stefan Ekengren – Cooking Class Holy Smoke BBQ, 2026",
    category: "Tillbehör",
    dateAdded: "2026-08-10",
    ingredients: [
      "4 dl idealmakaroner",
      "6 dl standardmjölk",
      "2 tsk Sambal oelek",
      "1 vitlöksklyfta, fint riven",
      "20 g smör",
      "0,75 dl mjöl",
      "150 g Västerbottensost, riven",
      "1 kruka persilja, grovt hackad",
      "Muskotnöt",
      "Zucchini, tärnad, efter smak (nämns i tillagningen men saknar mängd i originalreceptet)"
    ],
    steps: [
      "Koka makaronerna enligt anvisning på paketet.",
      "Smält smöret och vispa i mjölet. Tillsätt mjölken lite i taget under vispning tills det kokar. Dra åt sidan och vispa ner osten, smaka av med salt.",
      "Vänd ner makaroner, zucchini, Sambal oelek och riven vitlök. Smaka av med salt igen.",
      "Avsluta innan servering med hackad persilja och lite riven muskot."
    ]
  },
  {
    id: "smutsig-potatis-tapenade",
    title: "Smutsig potatis med tapenade",
    book: "Stefan Ekengren",
    bookFull: "Stefan Ekengren – Cooking Class Holy Smoke BBQ, 2026",
    category: "Tillbehör",
    servings: "4 personer",
    dateAdded: "2026-08-10",
    ingredients: [
      { group: "Potatis", items: [
        "800 g fast potatis, gärna ratte eller sparrispotatis, 7–8 cm i diameter, oskalad",
        "3 msk olivolja",
        "½ kruka timjan, plockade blad",
        "½ kruka oregano, plockade blad"
      ]},
      { group: "Tapenade", items: [
        "3 dl svarta kärnfria oliver, grovhackade",
        "4 sardellfiléer",
        "2 msk kapris",
        "2 vitlöksklyftor, pressade",
        "1½ dl olivolja",
        "2 msk pressad citronjuice",
        "Salt"
      ]}
    ],
    steps: [
      "Sätt ugnen på 220 grader.",
      "Tapenade: mixa oliver, sardeller, kapris, vitlök, olivolja och citronjuice någon minut till en ganska slät tapenade. Ställ åt sidan tills potatisen är klar.",
      "Lägg potatisen på en plåt och vänd runt med olivolja. Rosta mitt i ugnen cirka 30 minuter.",
      "Ta ut och vänd runt med tapenade och örtkryddor, sätt in i ugnen igen och rosta ytterligare 5 minuter. Vänd runt efter halva tiden.",
      "Lägg upp på fat och servera direkt."
    ]
  },
  {
    id: "grillade-gronsaker",
    title: "Grillade grönsaker med kaprisdressing",
    book: "Stefan Ekengren",
    bookFull: "Stefan Ekengren – Cooking Class Holy Smoke BBQ, 2026",
    category: "Tillbehör",
    servings: "4 personer",
    dateAdded: "2026-08-10",
    ingredients: [
      { group: "Grönsaker", items: [
        "1 grön zucchini, skivad",
        "1 röd paprika, urkärnad och grovskuren",
        "1 gul paprika, urkärnad och grovskuren",
        "1 aubergine, skivad"
      ]},
      { group: "Kaprisdressing", items: [
        "50 g kapris, hackad",
        "4 sardeller, finhackade",
        "3 schalottenlökar, finhackade",
        "1 vitlöksklyfta, finhackad",
        "1 röd chili, urkärnad och finhackad",
        "2 citroner, rivet skal",
        "1 kruka persilja, finhackad med stjälkar och allt",
        "1 dl olivolja, enkel sort, ej gräsig",
        "Flingsalt"
      ]}
    ],
    steps: [
      "Blanda kapris, sardeller, schalottenlök, vitlök, chili, citronskal, persilja och olivolja. Smaka av med salt.",
      "Grilla grönsakerna hårt på kolgrill.",
      "Lägg dem varma direkt från grillen i en bunke och slå över dressingen. Vänd runt och håll grönsakerna varma till servering."
    ]
  },
  {
    id: "picklade-senapsfron",
    title: "Picklade senapsfrön",
    book: "Stefan Ekengren",
    bookFull: "Stefan Ekengren – Cooking Class Holy Smoke BBQ, 2026",
    category: "Pickles",
    servings: "4 personer",
    dateAdded: "2026-08-10",
    ingredients: [
      "1½ dl gula senapsfrön",
      "2 dl vatten",
      "2 dl äppelcidervinäger",
      "1½ dl socker",
      "1 tsk salt"
    ],
    steps: [
      "Koka upp vatten, vinäger, socker och salt.",
      "Lägg ner senapsfröna och låt sjuda cirka en halvtimme på svag värme. Kokar det bort för mycket vätska, späd med lite vatten."
    ]
  },
  {
    id: "curryketchup",
    title: "Curryketchup",
    book: "Stefan Ekengren",
    bookFull: "Stefan Ekengren – Cooking Class Holy Smoke BBQ, 2026",
    category: "Sås",
    dateAdded: "2026-08-10",
    ingredients: [
      "4 st gula lökar, finhackade",
      "300 g farinsocker",
      "5 vitlöksklyftor",
      "1 liten flaska Worcestersås",
      "300 g tomatpuré",
      "2 dl krossad tomat",
      "2 msk curry",
      "Soja och vinäger, för avsmakning"
    ],
    steps: [
      "Fräs lök och vitlök med lite curry tills mjuk.",
      "Gå på med farinsocker, Worcestersås och tomatpuré, stek vidare.",
      "Gå på med krossad tomat och låt sjuda. Mixa slätt och sila.",
      "Smaka av med soja, salt och vinäger."
    ]
  }
];
