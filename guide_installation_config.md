# 🚀 Guide d'Installation et Configuration React

> **Guide complet pour démarrer un projet React professionnel**  
> Installation, Structure, Tailwind CSS, et Routing

---

## 📋 Table des Matières

1. [Prérequis](#1-prérequis)
2. [Installation de React](#2-installation-de-react)
3. [Structure d'une Application React](#3-structure-dune-application-react)
4. [Installation de Tailwind CSS 3](#4-installation-de-tailwind-css-3)
5. [Configuration des Routes](#5-configuration-des-routes)
6. [Commandes Essentielles](#6-commandes-essentielles)

---

## 1. Prérequis

### **Installer Node.js et npm**

**Vérifier si déjà installé :**
```bash
node --version
# Devrait afficher : v18.x.x ou supérieur

npm --version
# Devrait afficher : 9.x.x ou supérieur
```

**Si non installé :**
1. Téléchargez sur : https://nodejs.org/
2. Installez la version **LTS** (Long Term Support)
3. Redémarrez votre terminal
4. Vérifiez à nouveau avec les commandes ci-dessus

---

## 2. Installation de React

### **Méthode : Create React App**

```bash
# 1. Ouvrez votre terminal

# 2. Naviguez vers le dossier où créer le projet
cd Desktop

# 3. Créez le projet React
npx create-react-app mon-projet

# Attendez l'installation (2-5 minutes)
# Vous verrez : "Happy hacking!" quand c'est terminé
```

### **Lancer le Projet**

```bash
# 1. Entrez dans le dossier
cd mon-projet

# 2. Lancez le serveur de développement
npm start

# 3. Votre navigateur s'ouvre automatiquement sur http://localhost:3000
```

### **Arrêter le Serveur**

```bash
# Dans le terminal où tourne npm start
Ctrl + C
```

---

## 3. Structure d'une Application React

### **Structure Complète du Projet**

```
mon-projet/
│
├── node_modules/              # Dépendances (NE PAS TOUCHER)
│
├── public/                    # Fichiers statiques
│   ├── index.html            # Page HTML principale
│   ├── favicon.ico           # Icône du site
│   ├── logo192.png           # Logo
│   └── manifest.json         # Config PWA
│
├── src/                       # CODE SOURCE (VOTRE TRAVAIL ICI)
│   │
│   ├── components/           # Composants réutilisables
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── Button.js
│   │   └── Card.js
│   │
│   ├── pages/                # Pages de l'application
│   │   ├── Accueil.js
│   │   ├── APropos.js
│   │   ├── Contact.js
│   │   └── NotFound.js
│   │
│   ├── assets/               # Images, polices, etc.
│   │   ├── images/
│   │   └── fonts/
│   │
│   ├── styles/               # Fichiers CSS
│   │   ├── App.css
│   │   └── index.css
│   │
│   ├── utils/                # Fonctions utilitaires
│   │   └── helpers.js
│   │
│   ├── App.js                # Composant racine
│   ├── index.js              # Point d'entrée
│   └── index.css             # Styles globaux
│
├── .gitignore                # Fichiers ignorés par Git
├── package.json              # Dépendances et scripts
├── package-lock.json         # Versions exactes des dépendances
└── README.md                 # Documentation du projet
```

### **Fichiers Importants Expliqués**

#### **public/index.html**
```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Mon Application React</title>
  </head>
  <body>
    <!-- React s'injecte dans cette div -->
    <div id="root"></div>
  </body>
</html>
```

#### **src/index.js** (Point d'entrée)
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Créer la racine React
const root = ReactDOM.createRoot(document.getElementById('root'));

// Afficher l'application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

#### **src/App.js** (Composant principal)
```javascript
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Bienvenue dans React</h1>
      <p>Commencez à modifier src/App.js</p>
    </div>
  );
}

export default App;
```

#### **package.json** (Configuration du projet)
```json
{
  "name": "mon-projet",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}
```

---

## 4. Installation de Tailwind CSS 3

### **Étape 1 : Installer Tailwind**

```bash
# Dans votre projet React, installez Tailwind
npm install -D tailwindcss@3 postcss autoprefixer

# Initialisez la configuration
npx tailwindcss init -p
```

### **Étape 2 : Configurer Tailwind**

**Fichier créé : `tailwind.config.js`**

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### **Étape 3 : Ajouter les Directives Tailwind**

**Ouvrez `src/index.css` et remplacez tout par :**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### **Étape 4 : Tester Tailwind**

**Modifiez `src/App.js` :**

```javascript
function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Tailwind CSS fonctionne !
        </h1>
        <p className="text-gray-600">
          Commencez à utiliser les classes Tailwind
        </p>
        <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
          Cliquez-moi
        </button>
      </div>
    </div>
  );
}

export default App;
```

**Lancez le projet :**
```bash
npm start
```

✅ **Si vous voyez une boîte blanche centrée avec un bouton bleu, Tailwind fonctionne !**

### **Classes Tailwind Essentielles**

```javascript
// Espacement
className="p-4"           // padding
className="m-4"           // margin
className="px-6 py-3"     // padding horizontal et vertical

// Couleurs
className="bg-blue-500"   // background
className="text-white"    // texte

// Tailles
className="w-full"        // width 100%
className="h-screen"      // height 100vh

// Flexbox
className="flex items-center justify-center"

// Grille
className="grid grid-cols-3 gap-4"

// Bordures
className="border border-gray-300 rounded-lg"

// Ombres
className="shadow-md"     // ombre moyenne
className="shadow-lg"     // ombre grande

// Hover
className="hover:bg-blue-600"

// Responsive
className="md:flex lg:grid-cols-4"
```

---

## 5. Configuration des Routes

### **Étape 1 : Installer React Router**

```bash
npm install react-router-dom
```

### **Étape 2 : Créer les Pages**

**Créez le dossier :** `src/pages/`

**src/pages/Accueil.js**
```javascript
function Accueil() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        🏠 Page d'Accueil
      </h1>
      <p className="text-gray-600">
        Bienvenue sur notre application React !
      </p>
    </div>
  );
}

export default Accueil;
```

**src/pages/APropos.js**
```javascript
function APropos() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        ℹ️ À Propos
      </h1>
      <p className="text-gray-600">
        Nous sommes une équipe passionnée par le développement web.
      </p>
    </div>
  );
}

export default APropos;
```

**src/pages/Contact.js**
```javascript
function Contact() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        📧 Contact
      </h1>
      <p className="text-gray-600">Email : contact@example.com</p>
      <p className="text-gray-600">Téléphone : +237 6XX XX XX XX</p>
    </div>
  );
}

export default Contact;
```

**src/pages/NotFound.js**
```javascript
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-2xl text-gray-600 mt-4">Page introuvable</p>
        <Link 
          to="/" 
          className="inline-block mt-6 bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
```

### **Étape 3 : Créer la Navbar**

**Créez le dossier :** `src/components/`

**src/components/Navbar.js**
```javascript
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            MonApp
          </Link>

          {/* Menu */}
          <div className="flex gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "font-bold border-b-2 border-white pb-1"
                  : "hover:text-gray-200"
              }
            >
              Accueil
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "font-bold border-b-2 border-white pb-1"
                  : "hover:text-gray-200"
              }
            >
              À Propos
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "font-bold border-b-2 border-white pb-1"
                  : "hover:text-gray-200"
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
```

### **Étape 4 : Configurer App.js avec les Routes**

**src/App.js**
```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Accueil from './pages/Accueil';
import APropos from './pages/APropos';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <Navbar />

        {/* Contenu des pages */}
        <main className="container mx-auto">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/about" element={<APropos />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Route 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
```

### **Étape 5 : Tester les Routes**

```bash
npm start
```

**Testez en cliquant sur les liens :**
- http://localhost:3000/
- http://localhost:3000/about
- http://localhost:3000/contact
- http://localhost:3000/xyz (page 404)

---

## 6. Commandes Essentielles

### **Développement**

```bash
# Lancer le serveur de développement
npm start
# → http://localhost:3000
# → Rechargement automatique

# Arrêter le serveur
Ctrl + C
```

### **Production**

```bash
# Créer la version optimisée pour production
npm run build
# → Crée le dossier "build/"
```

### **Installation de Packages**

```bash
# Installer un package
npm install nom-du-package

# Installer en développement uniquement
npm install -D nom-du-package

# Désinstaller un package
npm uninstall nom-du-package
```

### **Gestion des Dépendances**

```bash
# Réinstaller toutes les dépendances
npm install

# Nettoyer et réinstaller
rm -rf node_modules package-lock.json
npm install
```

---

## ✅ Checklist Complète

### **Installation**
- [ ] Node.js installé (v18+)
- [ ] Projet créé avec `npx create-react-app`
- [ ] Serveur lancé avec `npm start`
- [ ] Application visible sur http://localhost:3000

### **Tailwind CSS**
- [ ] Tailwind installé
- [ ] Configuration créée (`tailwind.config.js`)
- [ ] Directives ajoutées dans `index.css`
- [ ] Classes Tailwind fonctionnent

### **Routes**
- [ ] React Router installé
- [ ] Pages créées dans `src/pages/`
- [ ] Navbar créée dans `src/components/`
- [ ] Routes configurées dans `App.js`
- [ ] Navigation fonctionne
- [ ] Page 404 fonctionne

---

## 🚨 Problèmes Courants

### **Problème : Port 3000 déjà utilisé**

**Solution 1 :** Tuer le processus
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

**Solution 2 :** Changer le port
```bash
# Windows
set PORT=3001 && npm start

# Mac/Linux
PORT=3001 npm start
```

### **Problème : Tailwind ne fonctionne pas**

```bash
# Vérifier que les directives sont dans index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

# Redémarrer le serveur
Ctrl + C
npm start
```

### **Problème : Routes ne fonctionnent pas**

```bash
# Vérifier que BrowserRouter enveloppe tout
<BrowserRouter>
  <Navbar />
  <Routes>...</Routes>
</BrowserRouter>

# Vérifier les imports
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
```

---

## 📚 Ressources

- **React :** https://react.dev
- **Tailwind CSS :** https://tailwindcss.com
- **React Router :** https://reactrouter.com

---

**Votre environnement React est maintenant prêt ! 🚀**