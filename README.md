# SweetTreats – Responsive Desserts Showcase

A vanilla HTML & CSS front-end project featuring a fully responsive desserts grid and accessible shopping-cart sidebar, built with modern web standards and automated via `Gulp`.

---

## Project Structure

```pgsql
.
├── dist/               ← Generated build output
│   ├── index.html
│   └── css/
│       └── styles.css
├── src/
│   ├── index.html
│   ├── assets/
│       └── fonts/
│       └── images/
│   └── css/
│       └── styles.css
├── .gitignore          ← Allow src/ et dist/ for better review
├── gulpfile.js         ← Build tasks (PostCSS, autoprefixer, clean CSS, minify HTML)
├── package-lock.json   
├── package.json        
└── README.md
```

---

## Installation & Local Setup

1. **Clone the repo**
2. **Install Node.js & npm**
3. **Install dependencies**

```bash
npm install
```

4. **Verify Gulp CLI :**

```bash
npx gulp --version
```

## Development & Build

- **Dev mode (watch & rebuild):**
```bash
npx gulp dev
```

- **Prod build (minified output in dist/):**
```bash
npx gulp build
```

---

## Notes (bon, en français, merde !)

**Ce que je pense avoir bien fait :**
- (HTML) code sémantique : utilisation des balises sémantiques dès que je le pouvais (`<main>`, `<section>`, `<hn>`, `<article>`, `<nav>`, `<dl>`, `<dt>`, `<dd>`)
- (HTML) normes d'accessibilité : dans la mesure du possible, j'ai essayé de trouver le meilleur compromis entre respect de la charte graphique de l'exemple et accessibilité renforcée (ARIA, roles, alt) mais les couleurs pourraient être mieux réfléchies (ratio AAA)
- (HTML) images optimisées : inclusion de sources et sizes différentes dans les balises picture adaptées pour respecter les principes du responsive design
- (CSS) un reboot moderne mais peut-être too much pour une page si modeste
- (JS) j'ai essayé GULP pour la première fois (j'ai suivi au pied de la lettre la doc pour l'installer via le terminal !)
- Je pense avoir structuré le dossier projet d'une façon lisible mais je ne sais pas s'il manque des choses ou si cela aurait pu être fait plus intelligemment

**Ce sur ce quoi j'ai des doutes :**
- J'ai du mal à opter pour une méthodologie/convention de nommage des classes CSS pertinente
- Je ne suis pas certaine d'avoir structuré suffisamment pertinemment le CSS (j'ai fait de mon mieux pour le hiérarchiser + commenter)
- J'ai utilisé chatGPT pour écrire le fichier `gulp.js`, j'ai testé et il fonctionne, mais je ne me sens pas encore capable d'en comprendre toute la logique, ou d'en comprendre chaque ligne, ni de le réécrire, pourtant ça me semble très utile et ça fait gagner beaucoup de temps je trouve
- Je me pose encore des questions sur quand et comment bien utiliser les balises `<figure>`, `<figcaption>`, `<picture>`, et les `source=""`, `size=""`, `alt=""`, `width=""`, `height=""`, `type=""`...
- Ce n'était pas clair sur les images, mais j'ai rendu l'aside sticky pour une navigation plus fluide sur grands écrans
- J'ai essayé de faire un usage pertinent et systématique des variables CSS, et de les faire assez complètes en prévision de la complexification du projet (j'ai imaginé que c'était une partie seulement d'une app plus complète, et donc j'ai essayé de prévoir des helpers/utilities/components et variables utiles dans ce but)
- J'ai un doute sur l'intégration adéquate du font (fourni dans les assets téléchargées) -> utiliser @font-face ? (ça fonctionne sans, alors je ne l'ai pas mis)

**Ce que je me suis épargné :**
- L'optimisation des images (je me suis contentée de mobiliser les fichiers téléchargés)
- L'optimisation du favicon (idem)
- La gestion native du thème clair/sombre/système (inutile pour respecter les consignes)
- L'optimisation de la partie head (meta tags, description, keywords, sécurité, partage sur les réseaux, SEO on-page, etc.) car non spécifié dans les consignes, haha
- Certainement pas mal de décisions qui seraient à prendre si on avait du générer l'app avec du JS, comme l'inclusion de certaines icones, le nom de certaines classes ou la spécification d'id pertinentes pour les buttons, etc.

**Pistes d'amélioration :**
- Améliorer le contraste des couleurs pour renforcer l'accessibilité (viser le AAA)
- Améliorer le chargement des images (autre loading ? preload les premières à s'afficher ?)
- Optimiser le format des images pour une meilleure intégration (Webp, Avif, fallback en PNG)
- Compléter le head en fonction du contexte d'intégration du site/app