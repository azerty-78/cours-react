# ⚡ Cours React - Async/Await et Gestion d'Erreurs

> **Maîtriser la programmation asynchrone et la gestion des exceptions en JavaScript**  
> Comprendre les promesses, async/await et try/catch

---

## 📖 Table des Matières

1. [Programmation Synchrone vs Asynchrone](#1-programmation-synchrone-vs-asynchrone)
2. [Les Promesses (Promises)](#2-les-promesses-promises)
3. [Async/Await - La Syntaxe Moderne](#3-asyncawait---la-syntaxe-moderne)
4. [Try/Catch - Gestion des Erreurs](#4-trycatch---gestion-des-erreurs)
5. [Finally - Nettoyage Final](#5-finally---nettoyage-final)
6. [Erreurs Courantes et Solutions](#6-erreurs-courantes-et-solutions)
7. [Bonnes Pratiques](#7-bonnes-pratiques)

---

## 1. Programmation Synchrone vs Asynchrone

### **Code Synchrone (Bloquant)**

Le code s'exécute **ligne par ligne**, dans l'ordre.

```javascript
console.log('1. Début');
console.log('2. Milieu');
console.log('3. Fin');

// Résultat :
// 1. Début
// 2. Milieu
// 3. Fin
```

**Problème :** Si une opération prend du temps, tout est bloqué !

```javascript
console.log('1. Début');

// Simuler une opération longue (2 secondes)
const debut = Date.now();
while (Date.now() - debut < 2000) {
  // Bloque tout pendant 2 secondes !
}

console.log('2. Fin');

// L'utilisateur ne peut RIEN faire pendant 2 secondes
```

### **Code Asynchrone (Non-bloquant)**

Le code continue à s'exécuter **sans attendre** les opérations longues.

```javascript
console.log('1. Début');

setTimeout(() => {
  console.log('2. Ceci s\'exécute après 2 secondes');
}, 2000);

console.log('3. Fin');

// Résultat :
// 1. Début
// 3. Fin
// (2 secondes plus tard)
// 2. Ceci s'exécute après 2 secondes
```

### **Pourquoi l'Asynchrone ?**

**Opérations qui prennent du temps :**
- ⏱️ Appels API (récupérer des données d'un serveur)
- 📁 Lecture/écriture de fichiers
- ⏳ Timers et délais
- 🌐 Chargement d'images
- 💾 Requêtes base de données

**Sans asynchrone :** L'application se fige !  
**Avec asynchrone :** L'application reste fluide !

---

## 2. Les Promesses (Promises)

### **Qu'est-ce qu'une Promesse ?**

Une **Promise** (promesse) représente une valeur qui sera disponible **plus tard** (ou jamais).

**Analogie de la commande au restaurant :**

1. Vous commandez (créer la promesse)
2. Le serveur vous donne un **ticket** (la promesse)
3. Vous attendez sans bloquer (asynchrone)
4. Le plat arrive ✅ (promesse **résolue**)
5. OU le plat est brûlé ❌ (promesse **rejetée**)

### **Les 3 États d'une Promesse**

```
Pending (En attente)
    ↓
    ├─→ Fulfilled (Résolue) ✅
    └─→ Rejected (Rejetée) ❌
```

### **Créer une Promesse**

```javascript
const maPromesse = new Promise((resolve, reject) => {
  // Simuler une opération asynchrone
  setTimeout(() => {
    const succes = true;
    
    if (succes) {
      resolve('Données récupérées !'); // Succès
    } else {
      reject('Erreur !'); // Échec
    }
  }, 2000);
});
```

### **Utiliser une Promesse avec .then() / .catch()**

```javascript
maPromesse
  .then((resultat) => {
    console.log('Succès:', resultat);
  })
  .catch((erreur) => {
    console.error('Erreur:', erreur);
  });
```

### **Exemple Concret : Appel API**

```javascript
fetch('https://api.example.com/articles')
  .then(response => response.json())  // Première promesse
  .then(data => {                     // Deuxième promesse
    console.log('Articles:', data);
  })
  .catch(error => {
    console.error('Erreur:', error);
  });
```

### **Problème avec .then() : Le Callback Hell**

Quand vous enchaînez beaucoup de promesses, le code devient illisible :

```javascript
fetch('https://api.example.com/user/1')
  .then(response => response.json())
  .then(user => {
    return fetch(`https://api.example.com/posts/${user.id}`);
  })
  .then(response => response.json())
  .then(posts => {
    return fetch(`https://api.example.com/comments/${posts[0].id}`);
  })
  .then(response => response.json())
  .then(comments => {
    console.log(comments);
  })
  .catch(error => {
    console.error(error);
  });

// Code difficile à lire et maintenir !
```

**Solution :** `async/await` !

---

## 3. Async/Await - La Syntaxe Moderne

### **Qu'est-ce qu'Async/Await ?**

`async/await` est une syntaxe **plus claire** pour travailler avec les promesses.

**C'est du "sucre syntaxique"** : en dessous, ce sont toujours des promesses !

### **Le mot-clé `async`**

`async` devant une fonction signifie : "cette fonction retourne une promesse".

```javascript
// Fonction normale
function direBonjour() {
  return 'Bonjour';
}

// Fonction async
async function direBonjourAsync() {
  return 'Bonjour';
}

// Les deux fonctionnent pareil
console.log(direBonjour());        // "Bonjour"
console.log(direBonjourAsync());   // Promise { "Bonjour" }

// Pour récupérer la valeur d'une fonction async :
direBonjourAsync().then(msg => console.log(msg)); // "Bonjour"
```

### **Le mot-clé `await`**

`await` dit : "Attends que la promesse soit résolue avant de continuer".

**⚠️ IMPORTANT :** `await` ne fonctionne QUE dans une fonction `async` !

```javascript
async function getArticles() {
  // Attendre que fetch se termine
  const response = await fetch('https://api.example.com/articles');
  
  // Attendre que la conversion en JSON se termine
  const data = await response.json();
  
  console.log(data);
  return data;
}
```

### **Comparaison : .then() vs async/await**

**Avec .then() (ancien style) :**
```javascript
function getUser() {
  fetch('https://api.example.com/user/1')
    .then(response => response.json())
    .then(user => {
      console.log(user.name);
      return user;
    })
    .catch(error => {
      console.error('Erreur:', error);
    });
}
```

**Avec async/await (moderne) :**
```javascript
async function getUser() {
  try {
    const response = await fetch('https://api.example.com/user/1');
    const user = await response.json();
    console.log(user.name);
    return user;
  } catch (error) {
    console.error('Erreur:', error);
  }
}
```

**Avantages d'async/await :**
- ✅ Code plus lisible (comme du code synchrone)
- ✅ Plus facile à déboguer
- ✅ Gestion d'erreurs avec try/catch (naturel)
- ✅ Moins d'imbrication

### **Exemple : Enchaîner Plusieurs Appels**

**Avec .then() :**
```javascript
fetch('https://api.example.com/user/1')
  .then(res => res.json())
  .then(user => {
    return fetch(`https://api.example.com/posts?userId=${user.id}`);
  })
  .then(res => res.json())
  .then(posts => {
    console.log(posts);
  });
```

**Avec async/await :**
```javascript
async function getUserPosts() {
  const userResponse = await fetch('https://api.example.com/user/1');
  const user = await userResponse.json();
  
  const postsResponse = await fetch(`https://api.example.com/posts?userId=${user.id}`);
  const posts = await postsResponse.json();
  
  console.log(posts);
}
```

**Beaucoup plus clair !** ✨

### **Appels Parallèles avec Promise.all()**

Si vous avez plusieurs appels **indépendants**, utilisez `Promise.all()` pour les exécuter **en parallèle** :

**❌ LENT (séquentiel) :**
```javascript
async function loadData() {
  const articles = await fetch('/api/articles').then(r => r.json());  // 2 secondes
  const users = await fetch('/api/users').then(r => r.json());        // 2 secondes
  const categories = await fetch('/api/categories').then(r => r.json()); // 2 secondes
  
  // Total : 6 secondes !
}
```

**✅ RAPIDE (parallèle) :**
```javascript
async function loadData() {
  const [articles, users, categories] = await Promise.all([
    fetch('/api/articles').then(r => r.json()),
    fetch('/api/users').then(r => r.json()),
    fetch('/api/categories').then(r => r.json())
  ]);
  
  // Total : 2 secondes (tout en même temps !)
}
```

---

## 4. Try/Catch - Gestion des Erreurs

### **Qu'est-ce que Try/Catch ?**

`try/catch` permet de **capturer et gérer les erreurs** sans faire planter l'application.

**Analogie du filet de sécurité :**
- `try` : Tenter quelque chose de dangereux
- `catch` : Attraper l'erreur si ça échoue

### **Syntaxe de Base**

```javascript
try {
  // Code qui PEUT échouer
  const resultat = operationDangereuse();
} catch (error) {
  // Code exécuté SI une erreur se produit
  console.error('Oups, erreur:', error);
}
```

### **Sans Try/Catch : L'Application Plante !**

```javascript
function diviser(a, b) {
  if (b === 0) {
    throw new Error('Division par zéro impossible !');
  }
  return a / b;
}

// Sans try/catch
const resultat = diviser(10, 0); // ❌ CRASH !
console.log('Suite du programme'); // Ne s'exécute JAMAIS
```

### **Avec Try/Catch : L'Application Continue !**

```javascript
try {
  const resultat = diviser(10, 0);
  console.log('Résultat:', resultat);
} catch (error) {
  console.error('Erreur attrapée:', error.message);
  // Affiche : "Erreur attrapée: Division par zéro impossible !"
}

console.log('Suite du programme'); // ✅ S'exécute quand même !
```

### **Try/Catch avec Async/Await**

**C'est la combinaison parfaite !**

```javascript
async function getArticles() {
  try {
    const response = await fetch('https://api.example.com/articles');
    
    // Vérifier si la réponse est OK
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
    
  } catch (error) {
    console.error('Erreur lors du chargement:', error.message);
    return []; // Retourner un tableau vide en cas d'erreur
  }
}
```

### **Exemple Complet dans React**

```javascript
import { useState, useEffect } from 'react';

function ListeArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        // 1. Commencer le chargement
        setLoading(true);
        setError(null);
        
        // 2. Appeler l'API
        const response = await fetch('https://api.example.com/articles');
        
        // 3. Vérifier la réponse
        if (!response.ok) {
          throw new Error(`Erreur ${response.status}: ${response.statusText}`);
        }
        
        // 4. Convertir en JSON
        const data = await response.json();
        
        // 5. Sauvegarder les données
        setArticles(data);
        
      } catch (error) {
        // 6. Gérer l'erreur
        console.error('Erreur:', error);
        setError(error.message);
        
      } finally {
        // 7. Toujours arrêter le chargement
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  // Affichage
  if (loading) return <p>Chargement...</p>;
  if (error) return <p style={{ color: 'red' }}>Erreur: {error}</p>;

  return (
    <div>
      {articles.map(article => (
        <div key={article.id}>{article.nom}</div>
      ))}
    </div>
  );
}
```

### **Types d'Erreurs à Gérer**

```javascript
async function complexeOperation() {
  try {
    // Erreur réseau (pas de connexion)
    const response = await fetch('https://api.example.com/data');
    
    // Erreur HTTP (404, 500, etc.)
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    
    // Erreur JSON (réponse invalide)
    const data = await response.json();
    
    // Erreur logique (données manquantes)
    if (!data.articles) {
      throw new Error('Pas d\'articles dans la réponse');
    }
    
    return data.articles;
    
  } catch (error) {
    // Identifier le type d'erreur
    if (error.message.includes('fetch')) {
      console.error('Problème de connexion');
    } else if (error.message.includes('HTTP')) {
      console.error('Erreur du serveur');
    } else {
      console.error('Autre erreur:', error.message);
    }
    
    throw error; // Re-lancer l'erreur si nécessaire
  }
}
```

---

## 5. Finally - Nettoyage Final

### **Qu'est-ce que Finally ?**

`finally` s'exécute **TOUJOURS**, qu'il y ait une erreur ou non.

**Utilité :** Nettoyer, fermer des connexions, arrêter un loader...

### **Syntaxe**

```javascript
try {
  // Code qui peut échouer
  const data = await fetch('/api/data');
} catch (error) {
  // Gérer l'erreur
  console.error(error);
} finally {
  // S'exécute TOUJOURS
  console.log('Terminé !');
}
```

### **Exemple Pratique : Loader**

```javascript
async function loadData() {
  try {
    setLoading(true); // Démarrer le loader
    const data = await fetch('/api/data');
    setData(data);
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false); // ✅ Arrêter le loader dans TOUS les cas
  }
}
```

**Sans `finally` :**
```javascript
async function loadData() {
  setLoading(true);
  
  try {
    const data = await fetch('/api/data');
    setData(data);
    setLoading(false); // ❌ Ne s'exécute PAS si erreur !
  } catch (error) {
    setError(error.message);
    setLoading(false); // ❌ Duplication de code
  }
}
```

### **Ordre d'Exécution**

```javascript
console.log('1. Début');

try {
  console.log('2. Try');
  throw new Error('Oups');
  console.log('3. Jamais exécuté');
} catch (error) {
  console.log('4. Catch');
} finally {
  console.log('5. Finally');
}

console.log('6. Fin');

// Résultat :
// 1. Début
// 2. Try
// 4. Catch
// 5. Finally
// 6. Fin
```

---

## 6. Erreurs Courantes et Solutions

### **Erreur 1 : Oublier `await`**

```javascript
// ❌ FAUX
async function getArticles() {
  const response = fetch('/api/articles'); // Oubli de await !
  console.log(response); // Promise { pending }
}

// ✅ CORRECT
async function getArticles() {
  const response = await fetch('/api/articles');
  console.log(response); // Response object
}
```

### **Erreur 2 : Utiliser `await` sans `async`**

```javascript
// ❌ FAUX
function getArticles() {
  const data = await fetch('/api/articles'); // Erreur !
}

// ✅ CORRECT
async function getArticles() {
  const data = await fetch('/api/articles');
}
```

### **Erreur 3 : Ne Pas Gérer les Erreurs**

```javascript
// ❌ FAUX - Crash si erreur
async function loadData() {
  const response = await fetch('/api/data');
  const data = await response.json();
  return data;
}

// ✅ CORRECT
async function loadData() {
  try {
    const response = await fetch('/api/data');
    if (!response.ok) throw new Error('Erreur HTTP');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur:', error);
    return null;
  }
}
```

### **Erreur 4 : Oublier `return` dans `async`**

```javascript
// ❌ FAUX
async function getUser() {
  const response = await fetch('/api/user');
  const user = await response.json();
  // Oubli du return !
}

const user = await getUser();
console.log(user); // undefined

// ✅ CORRECT
async function getUser() {
  const response = await fetch('/api/user');
  const user = await response.json();
  return user; // ← Important !
}
```

### **Erreur 5 : Boucle avec `await` (lent)**

```javascript
// ❌ LENT - Chaque appel attend le précédent
async function loadUsers(ids) {
  const users = [];
  for (const id of ids) {
    const user = await fetch(`/api/users/${id}`);
    users.push(user);
  }
  return users;
}

// ✅ RAPIDE - Tous les appels en parallèle
async function loadUsers(ids) {
  const promises = ids.map(id => fetch(`/api/users/${id}`));
  const users = await Promise.all(promises);
  return users;
}
```

---

## 7. Bonnes Pratiques

### **1. Toujours Utiliser Try/Catch avec Async/Await**

```javascript
// ✅ BON
async function loadData() {
  try {
    const data = await fetch('/api/data');
    return data;
  } catch (error) {
    console.error('Erreur:', error);
    return null;
  }
}
```

### **2. Vérifier le Statut HTTP**

```javascript
async function getData() {
  try {
    const response = await fetch('/api/data');
    
    // Toujours vérifier response.ok
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
```

### **3. Utiliser Finally pour le Nettoyage**

```javascript
async function loadData() {
  try {
    setLoading(true);
    const data = await fetch('/api/data');
    setData(data);
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false); // Toujours exécuté
  }
}
```

### **4. Créer des Fonctions Réutilisables**

```javascript
// Fonction helper pour fetch
async function fetchJSON(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Erreur fetch:', error);
    throw error;
  }
}

// Utilisation
const articles = await fetchJSON('/api/articles');
const users = await fetchJSON('/api/users');
```

### **5. Messages d'Erreur Clairs**

```javascript
async function createArticle(data) {
  try {
    const response = await fetch('/api/articles', {
      method: 'POST',
      body: JSON.stringify(data)
    });
    
    if (!response.ok) {
      // Message spécifique selon le code
      if (response.status === 400) {
        throw new Error('Données invalides');
      } else if (response.status === 401) {
        throw new Error('Non authentifié');
      } else {
        throw new Error('Erreur serveur');
      }
    }
    
    return await response.json();
  } catch (error) {
    // Afficher un message compréhensible
    console.error('Impossible de créer l\'article:', error.message);
    throw error;
  }
}
```

### **6. Ne Pas Bloquer l'UI**

```javascript
// ❌ FAUX - Bloque l'UI
function handleClick() {
  const data = await fetch('/api/data'); // Erreur : await sans async
}

// ✅ CORRECT - Async
async function handleClick() {
  try {
    setLoading(true);
    const data = await fetch('/api/data');
    setData(data);
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
}
```

---

## 📊 Résumé Rapide

| Concept | Utilité | Exemple |
|---------|---------|---------|
| **Promise** | Représente une valeur future | `new Promise(...)` |
| **async** | Déclare une fonction asynchrone | `async function()` |
| **await** | Attend qu'une promesse soit résolue | `await fetch()` |
| **try** | Bloc de code à tester | `try { ... }` |
| **catch** | Capture les erreurs | `catch (error)` |
| **finally** | Code toujours exécuté | `finally { ... }` |
| **throw** | Lancer une erreur | `throw new Error()` |

---

## ✅ Checklist

- [ ] Je comprends la différence synchrone/asynchrone
- [ ] Je sais ce qu'est une Promise
- [ ] Je sais utiliser async/await
- [ ] Je comprends try/catch/finally
- [ ] Je gère toujours les erreurs avec try/catch
- [ ] J'utilise finally pour le nettoyage
- [ ] Je vérifie response.ok dans mes appels API
- [ ] J'utilise Promise.all() pour les appels parallèles

---

**Vous maîtrisez maintenant l'asynchrone et la gestion d'erreurs ! 🚀**