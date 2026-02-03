# 🛣️ Cours React - Routage et Navigation

> **Maîtriser la navigation entre les pages en React**  
> De la configuration de base aux techniques avancées

---

## 📖 Table des Matières

1. [Introduction au Routage](#1-introduction-au-routage)
2. [Installation et Configuration](#2-installation-et-configuration)
3. [Routes de Base](#3-routes-de-base)
4. [Navigation avec Link et NavLink](#4-navigation-avec-link-et-navlink)
5. [Routes Dynamiques (Paramètres)](#5-routes-dynamiques-paramètres)
6. [Navigation Programmatique](#6-navigation-programmatique)
7. [Routes Imbriquées](#7-routes-imbriquées)
8. [Routes Protégées](#8-routes-protégées)
9. [Query Parameters](#9-query-parameters)
10. [Page 404 et Redirections](#10-page-404-et-redirections)

---

## 1. Introduction au Routage

### **Qu'est-ce que le Routage ?**

Le **routage** permet de naviguer entre différentes pages dans votre application React **sans recharger la page**.

**Sans routage :**
- Une seule page
- Pas d'URL distinctes
- Pas de bouton retour du navigateur

**Avec routage :**
- Plusieurs pages (Accueil, À propos, Contact...)
- URLs distinctes (`/`, `/about`, `/contact`)
- Historique de navigation fonctionnel
- Partage de liens possibles

### **Pourquoi React Router ?**

React Router est la bibliothèque **standard** pour gérer la navigation en React.

**Avantages :**
- ✅ Navigation sans rechargement (SPA - Single Page Application)
- ✅ Gestion de l'historique du navigateur
- ✅ URLs propres et SEO-friendly
- ✅ Routes dynamiques avec paramètres
- ✅ Routes imbriquées et layouts

---

## 2. Installation et Configuration

### **Étape 1 : Installation**

```bash
# Dans votre projet React
npm install react-router-dom
```

**Vérifier l'installation :**
```bash
npm list react-router-dom
# Devrait afficher : react-router-dom@6.x.x
```

### **Étape 2 : Configuration de Base**

**src/App.js**
```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importer vos pages
import Accueil from './pages/Accueil';
import APropos from './pages/APropos';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/about" element={<APropos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### **Les 3 Composants Essentiels**

| Composant | Rôle |
|-----------|------|
| **BrowserRouter** | Enveloppe toute l'application pour activer le routage |
| **Routes** | Conteneur pour toutes les routes |
| **Route** | Définit un chemin et le composant à afficher |

---

## 3. Routes de Base

### **Créer des Pages**

**src/pages/Accueil.js**
```javascript
function Accueil() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">🏠 Page d'Accueil</h1>
      <p>Bienvenue sur notre site !</p>
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
      <h1 className="text-4xl font-bold mb-4">ℹ️ À Propos</h1>
      <p>Nous sommes une équipe passionnée.</p>
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
      <h1 className="text-4xl font-bold mb-4">📧 Contact</h1>
      <p>Contactez-nous : contact@example.com</p>
    </div>
  );
}

export default Contact;
```

### **Configuration des Routes**

```javascript
<Routes>
  {/* Route pour la page d'accueil */}
  <Route path="/" element={<Accueil />} />
  
  {/* Route pour la page À propos */}
  <Route path="/about" element={<APropos />} />
  
  {/* Route pour la page Contact */}
  <Route path="/contact" element={<Contact />} />
</Routes>
```

**Accès aux pages :**
- http://localhost:3000/ → Accueil
- http://localhost:3000/about → À Propos
- http://localhost:3000/contact → Contact

---

## 4. Navigation avec Link et NavLink

### **Link - Navigation Simple**

**Ne JAMAIS utiliser `<a href>` en React !** Cela recharge la page.

```javascript
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav>
      {/* ❌ FAUX - Recharge la page */}
      <a href="/about">À Propos</a>
      
      {/* ✅ CORRECT - Navigation sans rechargement */}
      <Link to="/about">À Propos</Link>
    </nav>
  );
}
```

### **NavLink - Lien avec Style Actif**

`NavLink` permet de styliser le lien actif (page courante).

**src/components/Navbar.js**
```javascript
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex gap-6">
        {/* Logo avec Link */}
        <Link to="/" className="text-2xl font-bold">
          MonSite
        </Link>

        {/* Menu avec NavLink */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive 
              ? 'text-blue-400 font-bold' 
              : 'text-white hover:text-gray-300'
          }
        >
          Accueil
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive 
              ? 'text-blue-400 font-bold' 
              : 'text-white hover:text-gray-300'
          }
        >
          À Propos
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive 
              ? 'text-blue-400 font-bold' 
              : 'text-white hover:text-gray-300'
          }
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
```

### **Différence Link vs NavLink**

| Caractéristique | Link | NavLink |
|-----------------|------|---------|
| Navigation | ✅ | ✅ |
| Style actif automatique | ❌ | ✅ |
| Prop `isActive` | ❌ | ✅ |
| Usage | Navigation simple | Menu de navigation |

---

## 5. Routes Dynamiques (Paramètres)

### **Qu'est-ce qu'une Route Dynamique ?**

Une route qui change selon un paramètre (ID, nom, etc.).

**Exemples :**
- `/produit/1` → Produit #1
- `/produit/42` → Produit #42
- `/user/alice` → Profil d'Alice

### **Configuration**

```javascript
import ProduitDetail from './pages/ProduitDetail';

<Routes>
  {/* :id est un paramètre dynamique */}
  <Route path="/produit/:id" element={<ProduitDetail />} />
</Routes>
```

### **Récupérer le Paramètre avec useParams**

**src/pages/ProduitDetail.js**
```javascript
import { useParams } from 'react-router-dom';

function ProduitDetail() {
  // Récupérer le paramètre 'id' de l'URL
  const { id } = useParams();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Produit #{id}</h1>
      <p>Vous consultez le produit numéro {id}</p>
    </div>
  );
}

export default ProduitDetail;
```

**Accès :**
- `/produit/1` → affiche "Produit #1"
- `/produit/999` → affiche "Produit #999"

### **Exemple Pratique avec Données**

```javascript
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function ProduitDetail() {
  const { id } = useParams();
  const [produit, setProduit] = useState(null);

  useEffect(() => {
    // Charger le produit depuis l'API
    fetch(`https://api.example.com/produits/${id}`)
      .then(res => res.json())
      .then(data => setProduit(data));
  }, [id]);

  if (!produit) return <div>Chargement...</div>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">{produit.nom}</h1>
      <p>{produit.description}</p>
      <p className="text-2xl font-bold text-green-600">
        {produit.prix} FCFA
      </p>
    </div>
  );
}
```

### **Plusieurs Paramètres**

```javascript
// Route avec 2 paramètres
<Route path="/blog/:categorie/:slug" element={<Article />} />

// Récupération
function Article() {
  const { categorie, slug } = useParams();
  
  return (
    <div>
      <p>Catégorie : {categorie}</p>
      <p>Article : {slug}</p>
    </div>
  );
}

// URL : /blog/tech/react-tutorial
// categorie = "tech"
// slug = "react-tutorial"
```

---

## 6. Navigation Programmatique

### **Qu'est-ce que la Navigation Programmatique ?**

Naviguer **sans cliquer sur un lien**, par exemple après :
- Une soumission de formulaire
- Une connexion réussie
- Une action utilisateur

### **useNavigate - Le Hook de Navigation**

```javascript
import { useNavigate } from 'react-router-dom';

function Connexion() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Vérifier les identifiants...
    
    // Rediriger vers le dashboard
    navigate('/dashboard');
  };

  return (
    <button onClick={handleLogin}>
      Se connecter
    </button>
  );
}
```

### **Différentes Façons de Naviguer**

```javascript
import { useNavigate } from 'react-router-dom';

function MonComposant() {
  const navigate = useNavigate();

  // 1. Navigation simple
  navigate('/about');

  // 2. Navigation avec ID dynamique
  const id = 42;
  navigate(`/produit/${id}`);

  // 3. Retour en arrière (comme bouton retour du navigateur)
  navigate(-1);

  // 4. Avancer
  navigate(1);

  // 5. Remplacer dans l'historique (pas de retour possible)
  navigate('/dashboard', { replace: true });

  // 6. Passer des données (state)
  navigate('/merci', { state: { commande: '12345' } });
}
```

### **Exemple Complet : Formulaire**

```javascript
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FormulaireContact() {
  const navigate = useNavigate();
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Envoyer les données à l'API
      await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({ nom, email }),
      });

      // Succès : rediriger vers la page de remerciement
      navigate('/merci', { 
        state: { nom } 
      });
    } catch (error) {
      alert('Erreur lors de l\'envoi');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        placeholder="Nom"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit">Envoyer</button>
    </form>
  );
}
```

**Page de remerciement :**
```javascript
import { useLocation } from 'react-router-dom';

function PageMerci() {
  const location = useLocation();
  const { nom } = location.state || {};

  return (
    <div>
      <h1>Merci {nom} !</h1>
      <p>Votre message a été envoyé.</p>
    </div>
  );
}
```

---

## 7. Routes Imbriquées

### **Qu'est-ce qu'une Route Imbriquée ?**

Une route **à l'intérieur** d'une autre route. Utile pour :
- Layouts partagés
- Sous-sections d'une page
- Tableaux de bord avec menu latéral

### **Configuration**

```javascript
import { Outlet } from 'react-router-dom';

// Layout Dashboard
function DashboardLayout() {
  return (
    <div className="flex">
      {/* Menu latéral */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <nav className="space-y-2">
          <Link to="/dashboard/stats" className="block hover:bg-gray-700 p-2">
            📊 Statistiques
          </Link>
          <Link to="/dashboard/profil" className="block hover:bg-gray-700 p-2">
            👤 Profil
          </Link>
          <Link to="/dashboard/settings" className="block hover:bg-gray-700 p-2">
            ⚙️ Paramètres
          </Link>
        </nav>
      </aside>

      {/* Contenu principal - Les sous-routes s'affichent ici */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}

// Routes
<Routes>
  <Route path="/dashboard" element={<DashboardLayout />}>
    <Route path="stats" element={<Stats />} />
    <Route path="profil" element={<Profil />} />
    <Route path="settings" element={<Settings />} />
  </Route>
</Routes>
```

**URLs :**
- `/dashboard/stats` → DashboardLayout + Stats
- `/dashboard/profil` → DashboardLayout + Profil
- `/dashboard/settings` → DashboardLayout + Settings

### **Index Route (Route par Défaut)**

```javascript
<Route path="/dashboard" element={<DashboardLayout />}>
  {/* Route par défaut quand on arrive sur /dashboard */}
  <Route index element={<DashboardHome />} />
  
  <Route path="stats" element={<Stats />} />
  <Route path="profil" element={<Profil />} />
</Route>
```

---

## 8. Routes Protégées

### **Qu'est-ce qu'une Route Protégée ?**

Une route accessible **uniquement** si l'utilisateur est connecté.

### **Composant de Protection**

**src/components/ProtectedRoute.js**
```javascript
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  // Vérifier si l'utilisateur est connecté
  const isAuthenticated = localStorage.getItem('token') !== null;

  if (!isAuthenticated) {
    // Rediriger vers la page de connexion
    return <Navigate to="/login" replace />;
  }

  // Afficher le contenu si connecté
  return children;
}

export default ProtectedRoute;
```

### **Utilisation**

```javascript
import ProtectedRoute from './components/ProtectedRoute';

<Routes>
  {/* Route publique */}
  <Route path="/login" element={<Login />} />
  
  {/* Route protégée */}
  <Route 
    path="/dashboard" 
    element={
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    } 
  />
  
  {/* Plusieurs routes protégées */}
  <Route 
    path="/profil" 
    element={
      <ProtectedRoute>
        <Profil />
      </ProtectedRoute>
    } 
  />
</Routes>
```

### **Exemple Complet avec Contexte**

**src/context/AuthContext.js**
```javascript
import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('token', userData.token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
```

**ProtectedRoute avec Contexte :**
```javascript
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
```

---

## 9. Query Parameters

### **Qu'est-ce que les Query Parameters ?**

Paramètres dans l'URL après le `?`.

**Exemple :** `/search?q=react&category=tutorial`

### **Lire les Query Parameters**

```javascript
import { useSearchParams } from 'react-router-dom';

function PageRecherche() {
  const [searchParams] = useSearchParams();

  // Lire les paramètres
  const query = searchParams.get('q');           // "react"
  const category = searchParams.get('category'); // "tutorial"

  return (
    <div>
      <h1>Recherche : {query}</h1>
      <p>Catégorie : {category}</p>
    </div>
  );
}
```

### **Modifier les Query Parameters**

```javascript
import { useSearchParams } from 'react-router-dom';

function PageRecherche() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = (newQuery) => {
    // Modifier les paramètres
    setSearchParams({ q: newQuery, category: 'all' });
    // URL devient : /search?q=newQuery&category=all
  };

  return (
    <input
      type="text"
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
}
```

### **Exemple Complet : Filtres**

```javascript
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function ListeProduits() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [produits, setProduits] = useState([]);

  // Lire les filtres de l'URL
  const categorie = searchParams.get('categorie') || 'all';
  const prixMin = searchParams.get('prixMin') || 0;

  useEffect(() => {
    // Charger les produits filtrés
    fetch(`/api/produits?categorie=${categorie}&prixMin=${prixMin}`)
      .then(res => res.json())
      .then(data => setProduits(data));
  }, [categorie, prixMin]);

  const handleFilterChange = (key, value) => {
    const newParams = Object.fromEntries(searchParams);
    newParams[key] = value;
    setSearchParams(newParams);
  };

  return (
    <div>
      {/* Filtres */}
      <select 
        value={categorie}
        onChange={(e) => handleFilterChange('categorie', e.target.value)}
      >
        <option value="all">Toutes</option>
        <option value="electronique">Électronique</option>
        <option value="vetements">Vêtements</option>
      </select>

      <input
        type="number"
        value={prixMin}
        onChange={(e) => handleFilterChange('prixMin', e.target.value)}
        placeholder="Prix minimum"
      />

      {/* Liste de produits */}
      {produits.map(p => (
        <div key={p.id}>{p.nom}</div>
      ))}
    </div>
  );
}
```

---

## 10. Page 404 et Redirections

### **Page 404 (Page Introuvable)**

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
          className="inline-block mt-6 bg-blue-500 text-white px-6 py-3 rounded"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
```

**Configuration :**
```javascript
<Routes>
  <Route path="/" element={<Accueil />} />
  <Route path="/about" element={<APropos />} />
  
  {/* Route 404 - doit être EN DERNIER */}
  <Route path="*" element={<NotFound />} />
</Routes>
```

### **Redirections**

```javascript
import { Navigate } from 'react-router-dom';

<Routes>
  {/* Redirection simple */}
  <Route path="/old-path" element={<Navigate to="/new-path" replace />} />
  
  {/* Redirection conditionnelle */}
  <Route 
    path="/admin" 
    element={isAdmin ? <Admin /> : <Navigate to="/" />} 
  />
</Routes>
```

---

## 📊 Résumé des Hooks React Router

| Hook | Utilité | Exemple |
|------|---------|---------|
| `useNavigate()` | Navigation programmatique | `navigate('/about')` |
| `useParams()` | Récupérer paramètres d'URL | `const { id } = useParams()` |
| `useSearchParams()` | Query parameters | `searchParams.get('q')` |
| `useLocation()` | Infos sur l'URL actuelle | `location.pathname` |

---

## ✅ Checklist Routage

- [ ] React Router installé
- [ ] BrowserRouter configuré
- [ ] Routes définies
- [ ] Navigation avec Link/NavLink
- [ ] Routes dynamiques avec useParams
- [ ] Navigation programmatique avec useNavigate
- [ ] Page 404 configurée
- [ ] Routes protégées (si besoin)

---

**Vous maîtrisez maintenant le routage en React ! 🚀**