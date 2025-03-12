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




## 📌 Idé  
Jag fick idén till Morgan FreeWare när jag lärde mig HTML och CSS. Då kunde jag inte genomföra den eftersom jag inte förstod databaser. När jag nu fick chansen att bygga vad jag ville, visste jag direkt att det var detta jag skulle göra.  

## 🎯 Syfte  
Morgan FreeWare handlar om att visa att vi kan uppnå samma resultat som betalda program – utan att behöva lägga hundratals kronor i månaden. Oavsett om du vill redigera film, musik eller bilder finns det gratis alternativ.  

Många väljer att piratkopiera, men det innebär risker.  

> **Kort sagt: Morgan FreeWare är en samlingsplats för gratis programvara.**  

---

## 🚀 Förberedelse – Frontend  
- Jag satte upp ett **Next.js-projekt** och hade redan flera prototyper klara, så jag visste hur jag ville att det skulle se ut.  
- Jag skapade sidor, undersidor och enkla komponenter samt såg till att navigeringen fungerade.  
- Next.js gjorde det enkelt att hålla en bra mappstruktur.  

## 🛠️ Förberedelse – Backend  
- Jag använde **Supabase**, skapade en **.env-fil** med rätt nycklar och lade upp en enkel tabell med:  
  - `namn`  
  - `beskrivning`  
  - `icon_url`  
- Jag fyllde tabellen med testdata och gjorde mitt första GET-anrop.  

> **Supabase var smidigt att använda och hade många bra guider.**  

- När jag försökte fylla databasen med AI-genererade programlistor märkte jag snabbt att det inte var så enkelt.  
- Många ikon-länkar fungerade inte, så jag fick lägga in dem manuellt.  
- När databasen var fylld kunde jag se hur korten visades på sidan.  

---

## 🎨 Design och planering  
- Jag gillar design men använder inte **Figma**, eftersom jag tycker det tar för mycket tid.  
- Istället hämtade jag inspiration från **Pinterest**, där jag kollade på hero-sektioner och grid-layouter.  
- Jag föreställde mig designen i huvudet samtidigt som jag hade Pinterest på andra skärmen.  
- Sedan började jag koda en komponent eller sida i taget:  
  1. **Hero-sektionen**  
  2. **Softwarecards**  
  3. **Softwaregrid**  
  4. **Kategorisidan**  
  5. **Software-sidan** där användare kan bläddra själva.  

- När jag väl hade en grundstil använde jag samma **avstånd, textstorlek och färger** på hela sidan för en enhetlig look.  

## 🎨 Färgschema  
Jag ville att sidan skulle kännas **”techig”**.  
- Först funderade jag på **dark mode**, men det kändes inte rätt eftersom plattformen ska vara för alla.  
- Jag valde istället:  
  - **Vitt, grått och svart** som bas  
  - **Små inslag av rött, blått, gult och grönt** på vissa detaljer  

---

## ✅ Slutfix och detaljer  
När allt såg bra ut och fungerade lade jag till fler funktioner, som:  
- 📨 Ett **kontaktformulär** kopplat till Supabase  
- ℹ️ En **om oss-sida** (liknande denna text)  
- ⭐ Nya fält i databasen för **rating, genomsnittligt betyg och totalbetyg**  
- 🔧 Små förbättringar och justeringar  

---

## 📢 Sammanfattning  
Morgan FreeWare är en **plattform för gratis programvara** där du kan hitta verktyg för att redigera film, musik, bilder och mer – helt utan kostnad! 🚀  
