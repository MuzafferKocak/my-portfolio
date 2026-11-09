# Projektregeln (Webprojekt)

## Technik
- Next.js, TypeScript (.tsx), Tailwind CSS
- Nur Function Components und Hooks

## Ordnerstruktur
- Immer ein src/-Ordner. Frontend und Backend in getrennten Ordnern.
- page.tsx bleibt schlank und ruft nur Components auf.
- Jedes Teil der Seite ist ein eigenes Component, nach Bereich sortiert (layout, ui, startseite). Keine losen Dateien in components/.
- Details kommen auf eigene Unterseiten.

## Styling
- Nur Tailwind, eigenes CSS nur wenn nötig. Mobilfreundlich (responsive).
- Farben nur als Variablen in src/app/globals.css (primary, secondary, accent). Im Code nie feste Farbwerte, nur Namen wie bg-primary.
- Wiederverwendbare Teile (Button, Input, WhatsAppButton) liegen in src/components/ui. Prüfe zuerst, ob es sie schon gibt.
