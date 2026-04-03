# Personal Website - jeansy.org

## Project Overview
A minimalistic personal website for an engineer who is also a professional IT manager. The site showcases thoughts and work with simple navigation and clean design.

## Goals
- Static site generation with markdown content support
- Minimalistic and simple navigation
- Start simple (blog pages and author information)
- Expandable for complex functionality in the future
- Professional presentation suitable for an engineer/IT manager

## Target Features
- Markdown blog post rendering
- Author/about page
- Clean, minimalistic design
- Fast loading and SEO-friendly
- Mobile responsive

## Technical Requirements
- Static site generator
- Markdown processing
- Modern CSS framework (considering Tailwind)
- Good performance and SEO
- Easy content management

## Development Commands
- `npm install` - Install dependencies
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Deployment
- Target: Static hosting (Vercel, Netlify, GitHub Pages, etc.)
- Domain: jeansy.org

## Content Structure
- Blog posts (markdown files)
- Author information
- Portfolio/work showcase (future)
- Contact information

## Inventory Sync

The site includes an inventory management system with data sourced from an Obsidian vault.

### Sync Procedure
1. Run `bash scripts/sync-inventory.sh` to copy inventory data from the Obsidian vault (`~/Obsidian/Relocation`) into the project:
   - `Inventory.md` -> `src/data/inventory.md` (master inventory table)
   - `Items/*.md` -> `src/data/items/` (individual item notes)
   - Images (jpg, jpeg, png, gif, webp) -> `public/admin/images/` (referenced images)
2. Review changes with `git status`
3. Stage and commit all synced files
4. Push to trigger deployment

### Data Flow
- Source of truth: Obsidian vault at `~/Obsidian/Relocation`
- The sync script is at `scripts/sync-inventory.sh`
- Inventory data is parsed by `src/lib/inventory.ts`
- Admin pages are generated at `/admin/inventory`

## Development Rules
- Use only standard ASCII characters in markdown files
- No fancy Unicode symbols or emojis in documentation
- Keep markdown syntax clean and portable
- Never use emojis