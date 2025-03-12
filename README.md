# Morgan Freeware - Examensarbete av Linus Zackrisson

## Installation & körning

1. Klona repo & installera beroenden:
   ```sh
   git clone <repo-url>
   cd <projektmapp>
   npm install
   ```
2. Skapa `.env.local` och lägg till:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=NYCKELFRÅNLINUS
   NEXT_PUBLIC_SUPABASE_ANON_KEY=NYCKELFRÅNLINUS
   ```
3. Starta projektet:
   ```sh
   npm run dev
   ```

### Live-demo

[Testa här](#)

## Idé

Morgan FreeWare föddes ur en enkel tanke: "Jag har inga pengar" Nej då, skämt o sido. Jag använder mycket olika programvaror och att dom är konstandsfria är bara ett stort plus.

När jag först började lära mig **HTML och CSS** fick jag idén att samla gratis programvara på ett och samma ställe. Problemet? Jag hade ingen koll på databaser.

Men nu, med mer kött på benen och friheten att bygga vad jag ville, visste jag exakt vilket projekt jag skulle satsa på.

---

## Syfte – Nå samma resultat, utan att tömma plånboken

Många tror att man måste betala dyra månadsavgifter för att kunna **redigera video, musik eller bilder**. Andra vänder sig till **piratkopiering**, men det medför risker.

---

## Byggprocessen

### Förberedelse – Frontend

Jag satte upp ett **Next.js-projekt** tidigt, och eftersom jag redan hade testat flera prototyper, jag visste typ hur jag ville att det skulle se ut.

- Jag skapade sidor, undersidor och enkla komponenter
- Säkerställde att navigeringen fungerade smidigt (Tack Next.js för att du gjorde det enkelt)
- Försökte för en gångs skull vara noga med mappstruktur
- Även fördelningar av komponenter, så jag kunde återanvända så mycket som möjligt.

---

### Förberedelse – Backend

För att hantera data använde jag **Supabase** – ett enkelt och kraftfullt verktyg som gjorde det lätt att bygga backend.

1. Jag satte upp en **.env-fil** med korrekta API-nycklar
2. Skapade en tabell med tre kolumner:
   - `namn`
   - `beskrivning`
   - `icon_url`
3. Fyllde tabellen med testdata och gjorde mitt första **GET-anrop** efter att ha följt deras dokumentation.

> Supabase gjorde processen smidig, men jag stötte ändå på problem...

När jag försökte fylla databasen med **AI-genererade listor** av programvara upptäckte jag snabbt att många **ikon-länkar var döda**. Jag insåg att jag behövde välja ikoner **manuellt** – något jag först såg som en nackdel, men som gjorde sidan mycket snyggare i slutändan.

När databasen väl var klar och fungerade kunde jag se hur korten **mappades ut och visades** på sidan.

---

## Design och planering

### Inspiration och tankesätt

Jag älskar att göra saker snygga, men jag är **inte** den som sitter i **Figma** och skissar i timmar – för mig är det slöseri med tid, för jag är ingen designer.

Istället vände jag mig till **Pinterest** och liknande sidor. Där bläddrade jag igenom **hero-sektioner, gridlayouter och UI-komponenter** för att hitta inspiration.

Min process var enkel:

1. Jag visualiserade designen i huvudet
2. Jag hade Pinterest på ena skärmen och koden på den andra
3. Jag kodade en komponent i taget:
   - **HeroSection**
   - **SoftwareCards**
   - **SoftwareGrid**
   - **CategoryCard**
   - **Software-sidan**
   - **Osv**

För att skapa en enhetlig look försökte jag **återanvända samma avstånd, textstorlek och färger** över hela sidan.

---

### Färgschema – Ljusare, modernare och öppnare

Jag ville att Morgan FreeWare skulle kännas **”techig”**, men samtidigt **välkomnande**.

Dark mode? Nej, det kändes inte rätt.\
Jag ville istället ha en **ljus och modern look**, så jag valde:

- **Vitt, grått och svart** som basfärger
- **Rött, blått, gult och grönt** som accentfärger på små detaljer

Plot twist **Jag stal färgerna från en redan existerande sida.**

---

## Slutfix och detaljer

När allt började falla på plats var det dags att lägga till **de sista detaljerna** som gjorde sidan komplett.

- Ett **kontaktformulär** kopplat till Supabase
- En **Om oss-sida** där jag berättar om projektet
- Nya databaskolumner för **rating, genomsnittligt betyg och totalbetyg**
- Massor av små förbättringar och finjusteringar

