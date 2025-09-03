## Amit Patil · Portfolio

Fully responsive personal portfolio built with React + Vite and Tailwind CSS (minimal dependencies).

### Features
- Modern, clean UI with smooth hover/focus states
- Sections: Header, Hero, About, Skills, Experience, Projects, Education, Certifications, Achievements, Contact/Footer
- Mobile-first responsive layout

### Scripts
- `npm run dev` – start dev server
- `npm run build` – production build
- `npm run preview` – preview production build

### Setup
1. Install dependencies
```
npm install
```
2. Start development server
```
npm run dev
```

### Contact form (Formspree optional)
- Default behavior: opens your mail client via mailto.
- To enable Formspree: create a form at `https://formspree.io/`, then set the endpoint in `src/App.jsx`:
```
const formspreeEndpoint = 'https://formspree.io/f/your_id'
```
If the request fails, it automatically falls back to mailto.

### Customize
- Edit `src/App.jsx` content and links
- Update styles via Tailwind classes in `src/index.css`
 - Resume download uses `public/Updated_Resume_AP.pdf`. Replace that file with your latest resume.
