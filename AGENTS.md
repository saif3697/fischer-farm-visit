<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Farm marketing pages share `src/components/farm-site.tsx` so navigation, contact details, imagery, and the visual language stay consistent across all visitor paths.
- The entry experience lives in `src/components/panorama-intro.tsx` while `src/content.ts` centralizes brand copy and swappable imagery; this keeps the cinematic intro isolated from shared marketing pages.
