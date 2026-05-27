# Clinique Lionel — Site React

Clone moderne du site [clinique-lionel.com](https://clinique-lionel.com), construit avec React 18, Vite, Bootstrap 5, React Router, React CountUp et AOS.

## Démarrage

```bash
cd clinique-lionel
npm install
npm run dev
```

Ouvrir [http://localhost:5173](http://localhost:5173).

## Scripts

- `npm run dev` — serveur de développement
- `npm run build` — build de production
- `npm run preview` — prévisualiser le build

## Structure

```
src/
  components/   Navbar, Footer, StatsCounter
  pages/        Home, Services, SanteTravail, Activites, Contact
  data/         constants.js (URLs, contenus)
  App.jsx       Routes React Router
  main.jsx      Point d'entrée
  index.css     Styles personnalisés
```

## Routes

| Chemin | Page |
|--------|------|
| `/` | Accueil |
| `/services` | Nos services |
| `/sante-travail` | Santé du travail |
| `/activites` | Activités |
| `/contact` | Contact |
