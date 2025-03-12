# Morgan Freeware - Examensarbete av Linus Zackrisson

## Hur du testar projektet

### Klona och installera beroenden

1. Klona detta repo till din lokala dator:
   ```sh
   git clone <repo-url>
   ```
2. Gå in i projektmappen:
   ```sh
   cd <projektmapp>
   ```
3. Installera beroenden:
   ```sh
   npm install
   ```

### Konfigurera miljövariabler

1. Skapa en `.env.local`-fil i projektmappen.
2. Lägg till följande rader och ersätt `NYCKELFRÅNLINUS` med dina riktiga nycklar:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=NYCKELFRÅNLINUS
   NEXT_PUBLIC_SUPABASE_ANON_KEY=NYCKELFRÅNLINUS
   ```

### Starta projektet lokalt

```sh
npm run dev
```

### Live-demo

Om du inte vill köra projektet lokalt kan du testa live-versionen här:
[länk till live version](#)
