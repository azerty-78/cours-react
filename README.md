# 📚 Résumé Complet du Cours React

> **Guide de révision pour maîtriser React**  
> De zéro à la création d'applications complètes

---

## 📖 Table des Matières

1. [Introduction à React](#1-introduction-à-react)
2. [Les Composants](#2-les-composants)
3. [Les Props](#3-les-props)
4. [Les Hooks : useState](#4-les-hooks--usestate)
5. [Les Hooks : useEffect](#5-les-hooks--useeffect)
6. [Les Événements](#6-les-événements)
7. [Bonnes Pratiques](#7-bonnes-pratiques)
8. [Les API](#6-les-événements)
9. [Le routage](#7-bonnes-pratiques)


---

## 1. Introduction à React

### **Qu'est-ce que React ?**

React est une **bibliothèque JavaScript** créée par Facebook pour construire des interfaces utilisateur interactives.

**Pourquoi utiliser React ?**
- ✅ **Composants réutilisables** : Écrivez une fois, utilisez partout
- ✅ **Rapide** : Mise à jour intelligente du DOM
- ✅ **Populaire** : Grande communauté et beaucoup de ressources
- ✅ **Facile à apprendre** : Syntaxe simple et logique

### **JSX - JavaScript XML**

JSX permet d'écrire du HTML dans JavaScript :

```javascript
// JSX
const element = <h1>Bonjour React !</h1>;

// Équivalent JavaScript pur
const element = React.createElement('h1', null, 'Bonjour React !');
```

**Règles JSX importantes :**
- Un seul élément parent
- Utiliser `className` au lieu de `class`
- Utiliser `{}` pour insérer du JavaScript
- Fermer toutes les balises (`<img />`, `<br />`)

```javascript
// ✅ CORRECT
return (
  <div>
    <h1>Titre</h1>
    <img src="photo.jpg" />
  </div>
);

// ❌ FAUX - Deux éléments parents
return (
  <h1>Titre</h1>
  <p>Paragraphe</p>
);
```

---

## 2. Les Composants

### **Qu'est-ce qu'un Composant ?**

Un composant est un **morceau réutilisable** de l'interface utilisateur.

**Analogie :** Comme des briques LEGO que vous assemblez pour construire votre application.

### **Créer un Composant**

```javascript
// Composant fonction (méthode moderne)
function Bonjour() {
  return <h1>Bonjour tout le monde !</h1>;
}

// Utilisation
function App() {
  return (
    <div>
      <Bonjour />
      <Bonjour />
    </div>
  );
}
```

### **Règles des Composants**

1. **Nom en Majuscule** : `Bonjour`, `CarteProduit`, pas `bonjour`
2. **Retourner du JSX** : Utiliser `return`
3. **Un seul élément parent** : Envelopper dans `<div>` ou `<>...</>`

### **Exemple Complet**

```javascript
// Composant Carte de Profil
function CarteProfil() {
  return (
    <div style={{ border: '1px solid #ddd', padding: '20px' }}>
      <h2>Jean Dupont</h2>
      <p>Développeur Web</p>
      <p>📧 jean@email.com</p>
      <button>Contacter</button>
    </div>
  );
}

// Utilisation
function App() {
  return (
    <div>
      <CarteProfil />
      <CarteProfil />
      <CarteProfil />
    </div>
  );
}
```

---

## 3. Les Props

### **Qu'est-ce qu'une Prop ?**

Les **Props** (propriétés) permettent de **passer des données** d'un composant parent vers un composant enfant.

**Analogie :** C'est comme donner des instructions personnalisées à chaque composant.

### **Syntaxe de Base**

```javascript
// Composant qui REÇOIT des props
function Salutation(props) {
  return <h1>Bonjour {props.nom} !</h1>;
}

// Composant qui ENVOIE des props
function App() {
  return (
    <div>
      <Salutation nom="Alice" />
      <Salutation nom="Bob" />
    </div>
  );
}

// Résultat :
// Bonjour Alice !
// Bonjour Bob !
```

### **Props Multiples**

```javascript
function CarteProduit(props) {
  return (
    <div>
      <h3>{props.nom}</h3>
      <p>Prix : {props.prix} FCFA</p>
      <p>Stock : {props.stock}</p>
    </div>
  );
}

// Utilisation
<CarteProduit nom="Ordinateur" prix="500000" stock="5" />
<CarteProduit nom="Téléphone" prix="200000" stock="10" />
```

### **Destructuration des Props (Moderne)**

```javascript
// Au lieu de props.nom, props.prix...
function CarteProduit({ nom, prix, stock }) {
  return (
    <div>
      <h3>{nom}</h3>
      <p>Prix : {prix} FCFA</p>
      <p>Stock : {stock}</p>
    </div>
  );
}
```

### **Règles Importantes**

- ✅ Les props sont **en lecture seule** (ne pas les modifier)
- ✅ On peut passer : texte, nombres, booléens, objets, tableaux, fonctions
- ✅ Utiliser la destructuration pour plus de clarté

```javascript
// ❌ FAUX - Modifier une prop
function Carte(props) {
  props.nom = "Nouveau nom"; // INTERDIT !
  return <h1>{props.nom}</h1>;
}

// ✅ CORRECT - Utiliser un état
function Carte(props) {
  const [nom, setNom] = useState(props.nom);
  return <h1>{nom}</h1>;
}
```

---

## 4. Les Hooks : useState

### **Qu'est-ce que useState ?**

`useState` permet d'ajouter un **état** (données qui peuvent changer) à un composant.

**Quand l'état change → React met à jour l'affichage automatiquement**

### **Syntaxe**

```javascript
import { useState } from 'react';

const [variable, setVariable] = useState(valeurInitiale);
```

- `variable` : valeur actuelle
- `setVariable` : fonction pour modifier
- `valeurInitiale` : valeur de départ

### **Exemple Simple : Compteur**

```javascript
import { useState } from 'react';

function Compteur() {
  const [nombre, setNombre] = useState(0);

  return (
    <div>
      <p>Compteur : {nombre}</p>
      <button onClick={() => setNombre(nombre + 1)}>+1</button>
      <button onClick={() => setNombre(nombre - 1)}>-1</button>
      <button onClick={() => setNombre(0)}>Reset</button>
    </div>
  );
}
```

### **Types de Données avec useState**

```javascript
// Nombre
const [age, setAge] = useState(25);

// Texte
const [nom, setNom] = useState('');

// Booléen
const [estVisible, setEstVisible] = useState(false);

// Tableau
const [taches, setTaches] = useState(['Étudier', 'Coder']);

// Objet
const [user, setUser] = useState({ nom: 'Jean', age: 30 });
```

### **Modifier des Tableaux**

```javascript
const [fruits, setFruits] = useState(['Pomme', 'Orange']);

// Ajouter un élément
setFruits([...fruits, 'Banane']);

// Supprimer un élément (par index)
setFruits(fruits.filter((_, index) => index !== 0));

// Modifier un élément
setFruits(fruits.map((fruit, i) => 
  i === 1 ? 'Mangue' : fruit
));
```

### **Règles Importantes**

1. **TOUJOURS utiliser `set...()` pour modifier**
```javascript
// ❌ FAUX
nombre = 5;

// ✅ CORRECT
setNombre(5);
```

2. **Forme fonctionnelle pour mises à jour multiples**
```javascript
// ❌ Peut causer des bugs
setCompteur(compteur + 1);

// ✅ MIEUX
setCompteur(prev => prev + 1);
```

3. **Les types doivent correspondre**
```javascript
// ❌ FAUX
const [nombre, setNombre] = useState(0);
setNombre("texte"); // Changer de type !

// ✅ CORRECT
setNombre(10);
```

---

## 5. Les Hooks : useEffect

### **Qu'est-ce que useEffect ?**

`useEffect` permet d'exécuter du code à des **moments précis** :
- Au chargement du composant
- Quand une variable change
- Avant la destruction du composant

### **Syntaxe**

```javascript
import { useEffect } from 'react';

useEffect(() => {
  // Code à exécuter
  
  return () => {
    // Nettoyage (optionnel)
  };
}, [dépendances]);
```

### **Les 3 Cas Principaux**

#### **Cas 1 : Une Seule Fois au Chargement**

```javascript
useEffect(() => {
  console.log('Composant chargé !');
  // Charger des données, initialiser...
}, []); // ← Tableau vide
```

#### **Cas 2 : Quand une Variable Change**

```javascript
const [compteur, setCompteur] = useState(0);

useEffect(() => {
  console.log('Compteur a changé:', compteur);
  document.title = `Compteur: ${compteur}`;
}, [compteur]); // ← S'exécute quand compteur change
```

#### **Cas 3 : À Chaque Rendu (Rare)**

```javascript
useEffect(() => {
  console.log('Composant mis à jour');
}); // ← Pas de tableau
```

### **Exemples Pratiques**

#### **Charger des Données (API)**

```javascript
const [utilisateurs, setUtilisateurs] = useState([]);

useEffect(() => {
  fetch('https://api.example.com/users')
    .then(res => res.json())
    .then(data => setUtilisateurs(data));
}, []); // Une seule fois
```

#### **Timer / Chronomètre**

```javascript
const [secondes, setSecondes] = useState(0);

useEffect(() => {
  const timer = setInterval(() => {
    setSecondes(s => s + 1);
  }, 1000);

  // Nettoyage : arrêter le timer
  return () => clearInterval(timer);
}, []);
```

#### **Synchroniser Deux États**

```javascript
const [prix, setPrix] = useState(1000);
const [quantite, setQuantite] = useState(1);
const [total, setTotal] = useState(0);

useEffect(() => {
  setTotal(prix * quantite);
}, [prix, quantite]); // Recalculer quand prix OU quantite change
```

### **Règles Importantes**

1. **Toujours nettoyer les effets**
```javascript
useEffect(() => {
  const timer = setInterval(() => {}, 1000);
  return () => clearInterval(timer); // ← IMPORTANT
}, []);
```

2. **Bien spécifier les dépendances**
```javascript
// ❌ FAUX - dépendance manquante
useEffect(() => {
  console.log(compteur);
}, []); // compteur devrait être dans []

// ✅ CORRECT
useEffect(() => {
  console.log(compteur);
}, [compteur]);
```

3. **Éviter les boucles infinies**
```javascript
// ❌ BOUCLE INFINIE
useEffect(() => {
  setCompteur(compteur + 1);
}, [compteur]); // Change compteur → relance useEffect !
```

---

## 6. Les Événements

### **Qu'est-ce qu'un Événement ?**

Un événement est une **action de l'utilisateur** : clic, saisie de texte, soumission de formulaire...

### **Événements Principaux**

#### **onClick - Clic sur un Élément**

```javascript
function Bouton() {
  const handleClick = () => {
    alert('Bouton cliqué !');
  };

  return (
    <div>
      {/* Méthode 1 : Fonction nommée */}
      <button onClick={handleClick}>Cliquer</button>

      {/* Méthode 2 : Fonction anonyme */}
      <button onClick={() => alert('Clic !')}>Cliquer</button>
    </div>
  );
}
```

#### **onChange - Changement dans un Input**

```javascript
const [texte, setTexte] = useState('');

function Formulaire() {
  return (
    <div>
      <input
        type="text"
        value={texte}
        onChange={(e) => setTexte(e.target.value)}
      />
      <p>Vous avez tapé : {texte}</p>
    </div>
  );
}
```

#### **onSubmit - Soumission de Formulaire**

```javascript
const [nom, setNom] = useState('');
const [email, setEmail] = useState('');

const handleSubmit = (e) => {
  e.preventDefault(); // ← IMPORTANT : empêche rechargement
  
  console.log('Nom:', nom);
  console.log('Email:', email);
  
  // Réinitialiser
  setNom('');
  setEmail('');
};

return (
  <div>
    <input
      type="text"
      value={nom}
      onChange={(e) => setNom(e.target.value)}
    />
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <button onClick={handleSubmit}>Envoyer</button>
  </div>
);
```

### **Autres Événements Utiles**

```javascript
// Double-clic
<button onDoubleClick={() => console.log('Double-clic')}>

// Survol de la souris
<div onMouseEnter={() => console.log('Souris entrée')}>

// Sortie de la souris
<div onMouseLeave={() => console.log('Souris sortie')}>

// Focus sur un input
<input onFocus={() => console.log('Input en focus')} />

// Perte de focus
<input onBlur={() => console.log('Input perdu le focus')} />

// Appui sur une touche
<input onKeyPress={(e) => console.log('Touche:', e.key)} />
```

### **Règles Importantes**

1. **Toujours `e.preventDefault()` dans onSubmit**
```javascript
const handleSubmit = (e) => {
  e.preventDefault(); // ← Empêche rechargement de la page
};
```

2. **`event.target.value` pour les inputs**
```javascript
onChange={(e) => setTexte(e.target.value)}
```

3. **CamelCase pour les événements**
```javascript
// ❌ FAUX
<button onclick={...}>

// ✅ CORRECT
<button onClick={...}>
```

---

## 7. Bonnes Pratiques

### **Organisation du Code**

```javascript
// 1. Imports en haut
import { useState, useEffect } from 'react';

// 2. Composant
function MonComposant() {
  // 3. États
  const [count, setCount] = useState(0);
  
  // 4. useEffect
  useEffect(() => {
    console.log('Count:', count);
  }, [count]);
  
  // 5. Fonctions
  const handleClick = () => {
    setCount(count + 1);
  };
  
  // 6. Return JSX
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>+1</button>
    </div>
  );
}

// 7. Export
export default MonComposant;
```

### **Nommage**

```javascript
// ✅ Composants en PascalCase
function CarteProduit() {}

// ✅ Variables en camelCase
const nombreProduits = 10;

// ✅ Fonctions avec handle... pour événements
const handleClick = () => {};
const handleSubmit = () => {};

// ✅ États descriptifs
const [isLoading, setIsLoading] = useState(false);
const [users, setUsers] = useState([]);
```

### **Performance**

```javascript
// ✅ Utiliser la forme fonctionnelle pour les mises à jour
setCount(prev => prev + 1);

// ✅ Éviter les fonctions dans le rendu
// ❌ FAUX
<button onClick={() => handleClick(id)}>

// ✅ MIEUX
<button onClick={() => handleClick(id)}>
// OU créer une fonction wrapper
```

### **Débogage**

```javascript
// Console.log stratégiques
useEffect(() => {
  console.log('État actuel:', state);
}, [state]);

// React DevTools (extension navigateur)
// Permet d'inspecter les composants et leurs états
```

---

## 📊 Tableau Récapitulatif

| Concept | Utilité | Exemple |
|---------|---------|---------|
| **Composant** | Morceau réutilisable d'UI | `<Bouton />` |
| **Props** | Passer des données | `<Carte nom="Jean" />` |
| **useState** | Gérer les données qui changent | `const [count, setCount] = useState(0)` |
| **useEffect** | Effets secondaires | Charger API, timer |
| **onClick** | Gérer les clics | `<button onClick={...}>` |
| **onChange** | Gérer les inputs | `<input onChange={...} />` |

---

## ✅ Checklist de Révision

### **Composants**
- [ ] Je sais créer un composant fonction
- [ ] Je comprends qu'un composant doit commencer par une majuscule
- [ ] Je sais retourner du JSX
- [ ] Je peux réutiliser un composant plusieurs fois

### **Props**
- [ ] Je sais passer des props à un composant
- [ ] Je sais recevoir des props dans un composant
- [ ] Je comprends que les props sont en lecture seule
- [ ] Je sais utiliser la destructuration

### **useState**
- [ ] Je sais déclarer un état
- [ ] Je comprends quand utiliser useState
- [ ] Je sais modifier un état avec la fonction set
- [ ] Je sais gérer différents types (nombre, texte, tableau, objet)

### **useEffect**
- [ ] Je comprends les 3 cas d'usage
- [ ] Je sais charger des données au montage
- [ ] Je sais réagir aux changements d'état
- [ ] Je sais nettoyer mes effets (cleanup)

### **Événements**
- [ ] Je sais gérer onClick
- [ ] Je sais gérer onChange
- [ ] Je sais gérer onSubmit
- [ ] Je me rappelle d'utiliser e.preventDefault()

---

## 🎯 Exercices de Révision (Utiliser tailwind css au lieu du css classique)

### **Urgent !!!! (Mercredi 28) : Compteur Simple**
Faire fonctionner le composant GestionEtudiant, corriger les erreur d'importation lancer le, comprener le et modifier le c'est votre porte d'entrer dans la creation d'application.

### **Exercice 1 (Mercredi 28) : Compteur Simple**
Créez un compteur avec +1, -1 et Reset.

### **Exercice 2 (Mercredi 28): Liste de Tâches**
Créez une todo list : ajouter, afficher, supprimer.

### **Exercice 3 (Mercredi 28) : Formulaire de Contact**
Formulaire avec nom, email, message et validation.

### **Exercice 4 (Jeudi 29): Chronomètre**
Timer qui compte les secondes avec start/pause/reset.

### **Exercice 5 (Jeudi 29): Recherche en Temps Réel**
Input qui filtre une liste de produits en temps réel.

---

## 📚 Ressources Complémentaires

- **Documentation officielle :** https://react.dev
- **Tutoriels interactifs :** https://react.dev/learn
- **Exercices pratiques :** https://react-tutorial.app

---

**Bon courage pour vos révisions ! 💪**

## 8. Les API (Avenir)
## 9. Le Routage (Presque terminer)

# Lire le fichier Guide installation et Configuration React pour la suite des configuration et le fichier Scolar pay .md