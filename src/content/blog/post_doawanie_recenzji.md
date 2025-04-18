---
title: "Dodawanie recenzji"
description: "Krótki opis dodawania recenzji"
pubDate: "2025.02.22"
heroImage: "/posty.png"
---

## Jak dodać nowy post w Astro? (test)

1. **Przejdź do folderu postów**  
   W projekcie Astro otwórz folder `src/content/blog/`

2. **Utwórz nowy plik Markdown**  
   Nazwij go zgodnie z formatem, np. `2025-02-22-nazwa-postu.md`.

3. **Dodaj metadane (Frontmatter)**  
   Każdy post powinien zaczynać się od sekcji Frontmatter między trzema kreskami `---`:

   ```md
   ---
   title: "Tytuł posta"
   description: "Krótki opis posta"
   pubDate: "2025-02-22"
   heroImage: "/blog-placeholder-3.jpg"
   ---
   ```

   w przyszłości będzie tu można zamieścić również link do trailera

4. **Dodaj treść posta**  
   [Więcej informacji tutaj!](https://incydent.boksinski.org/blog/markdown-style-guide/) 😼
   [Online edytor markdowna](https://stackedit.io/app#) 🥶
   [Tak wygląda treść tej strony](https://github.com/KacperPach/Incydent-kinowy/blob/main/src/content/blog/post_doawanie_recenzji.md) ❤️

   Po metadanych dodaj właściwą treść w Markdown, np.:

   ```md
   ## Wstęp

   To jest przykładowy post napisany w Markdown.

   - Punkt pierwszy
   - Punkt drugi

   **Pogrubienie** i _kursywa_ też działają!
   ```

Gotowe! 🚀
