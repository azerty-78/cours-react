# 📝 Exercices - API et CRUD en React

> **5 Exercices Progressifs pour Maîtriser les Appels API et le CRUD**  
> Travaillez avec l'API de Gestion de Stock

---

## 📋 Informations sur l'API

**URL de base :** `https://stock-test.kobecorporation.com`

### **Endpoints Articles**
```
GET    /api/articles          → Lister tous les articles
GET    /api/articles/{id}     → Récupérer un article
POST   /api/articles          → Créer un article
PUT    /api/articles/{id}     → Modifier un article
DELETE /api/articles/{id}     → Supprimer un article
```

### **Endpoints Utilisateurs**
```
GET    /api/users             → Lister tous les utilisateurs
GET    /api/users/{id}        → Récupérer un utilisateur
POST   /api/users             → Créer un utilisateur
PUT    /api/users/{id}        → Modifier un utilisateur
DELETE /api/users/{id}        → Supprimer un utilisateur
```

### **Structure Article**
```json
{
  "id": "string",
  "nom": "string",
  "description": "string",
  "quantite": "number",
  "prixUnitaire": "number",
  "categorie": "string"
}
```

### **Structure User**
```json
{
  "id": "string",
  "name": "string",
  "email": "string"
}
```

---

## 🎯 Exercice 1 : Affichage Simple des Articles

### **Objectif**
Créer une page qui affiche la liste de tous les articles de l'API sous forme de cartes.

### **Fonctionnalités Requises**

1. **Charger les articles** au montage du composant
2. **Afficher un loader** pendant le chargement
3. **Afficher un message d'erreur** si l'API échoue
4. **Afficher les articles** sous forme de cartes avec :
   - Nom de l'article
   - Description
   - Quantité en stock
   - Prix unitaire
   - Catégorie

### **Critères d'Évaluation**

- [ ] useState utilisé pour stocker les articles (5 pts)
- [ ] useEffect utilisé pour charger les données (5 pts)
- [ ] Gestion de l'état de chargement (3 pts)
- [ ] Gestion des erreurs (3 pts)
- [ ] Affichage correct des données (4 pts)

### **Bonus** (+5 pts)
- Ajouter un bouton "Rafraîchir" qui recharge les articles
- Afficher le nombre total d'articles
- Ajouter un filtre par catégorie

### **Code de Départ**

```javascript
import { useState, useEffect } from 'react';

function ListeArticles() {
  // TODO: Créer les états nécessaires
  
  // TODO: Créer la fonction pour charger les articles
  
  // TODO: Utiliser useEffect pour charger au montage
  
  return (
    <div>
      <h1>Liste des Articles</h1>
      {/* TODO: Afficher les articles */}
    </div>
  );
}

export default ListeArticles;
```

---

## 🎯 Exercice 2 : Création d'Articles

### **Objectif**
Créer un formulaire pour ajouter de nouveaux articles à l'API.

### **Fonctionnalités Requises**

1. **Formulaire avec tous les champs** :
   - Nom (input text, obligatoire)
   - Description (textarea)
   - Quantité (input number)
   - Prix unitaire (input number)
   - Catégorie (select avec options)

2. **Validation** :
   - Le nom est obligatoire
   - La quantité doit être >= 0
   - Le prix doit être >= 0

3. **Envoi à l'API** :
   - Méthode POST
   - Afficher un message de succès
   - Réinitialiser le formulaire après succès

4. **Navigation** :
   - Rediriger vers la liste après création

### **Critères d'Évaluation**

- [ ] Formulaire complet avec tous les champs (4 pts)
- [ ] Validation des données (4 pts)
- [ ] Appel POST à l'API correct (6 pts)
- [ ] Gestion des erreurs (3 pts)
- [ ] Navigation après succès (3 pts)

### **Bonus** (+5 pts)
- Afficher un aperçu de l'article avant l'envoi
- Ajouter un loader pendant l'envoi
- Permettre d'ajouter plusieurs articles d'affilée

### **Code de Départ**

```javascript
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FormulaireArticle() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    nom: '',
    description: '',
    quantite: 0,
    prixUnitaire: 0,
    categorie: ''
  });

  const handleChange = (e) => {
    // TODO: Gérer les changements dans le formulaire
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Valider et envoyer à l'API
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* TODO: Créer le formulaire */}
    </form>
  );
}

export default FormulaireArticle;
```

---

## 🎯 Exercice 3 : Modification et Suppression

### **Objectif**
Créer une page de détail d'un article avec possibilité de modifier ou supprimer.

### **Fonctionnalités Requises**

**Partie 1 : Page de Détail**
1. Récupérer l'ID depuis l'URL avec `useParams`
2. Charger l'article depuis l'API
3. Afficher toutes les informations
4. Deux boutons : "Modifier" et "Supprimer"

**Partie 2 : Modification**
1. Formulaire pré-rempli avec les données actuelles
2. Permettre la modification de tous les champs
3. Méthode PUT pour sauvegarder
4. Rediriger vers le détail après modification

**Partie 3 : Suppression**
1. Demander confirmation avant suppression
2. Méthode DELETE pour supprimer
3. Rediriger vers la liste après suppression

### **Critères d'Évaluation**

- [ ] Récupération de l'ID avec useParams (3 pts)
- [ ] Chargement de l'article (4 pts)
- [ ] Page de détail complète (3 pts)
- [ ] Formulaire de modification (5 pts)
- [ ] Fonction de suppression (5 pts)

### **Bonus** (+5 pts)
- Afficher un historique des modifications
- Permettre l'annulation de la suppression (corbeille)
- Ajouter une confirmation par email avant suppression

### **Code de Départ**

```javascript
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function DetailArticle() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Charger l'article
  }, [id]);

  const handleDelete = async () => {
    // TODO: Confirmer et supprimer
  };

  return (
    <div>
      {/* TODO: Afficher l'article */}
    </div>
  );
}

export default DetailArticle;
```

---

## 🎯 Exercice 4 : Gestion Complète des Utilisateurs

### **Objectif**
Créer un système complet CRUD pour gérer les utilisateurs (similaire aux articles).

### **Fonctionnalités Requises**

1. **Liste des Utilisateurs** (`/users`)
   - Affichage en tableau ou cartes
   - Nom et email
   - Bouton "Voir détail"
   - Bouton "Nouveau utilisateur"

2. **Détail d'un Utilisateur** (`/users/:id`)
   - Afficher nom et email
   - Boutons Modifier et Supprimer

3. **Créer un Utilisateur** (`/users/nouveau`)
   - Formulaire avec nom et email
   - Validation email (format correct)
   - POST à l'API

4. **Modifier un Utilisateur** (`/users/:id/modifier`)
   - Formulaire pré-rempli
   - PUT à l'API

5. **Supprimer un Utilisateur**
   - Confirmation obligatoire
   - DELETE à l'API

### **Critères d'Évaluation**

- [ ] Page liste des utilisateurs (5 pts)
- [ ] Page détail utilisateur (3 pts)
- [ ] Formulaire de création (4 pts)
- [ ] Formulaire de modification (4 pts)
- [ ] Fonction de suppression (4 pts)

### **Bonus** (+10 pts)
- Recherche d'utilisateurs par nom
- Tri par nom ou email
- Pagination (10 utilisateurs par page)
- Validation avancée (email unique, nom minimum 3 caractères)

### **Structure des Fichiers**

```
src/
├── pages/
│   └── users/
│       ├── UsersList.js
│       ├── UserDetail.js
│       ├── UserForm.js
│       └── UserEdit.js
├── services/
│   └── userService.js
└── App.js
```

---

## 🎯 Exercice 5 : Dashboard Statistiques avec Graphiques

### **Objectif**
Créer un tableau de bord avec statistiques et navigation complète.

### **Fonctionnalités Requises**

**Page Dashboard (`/dashboard`)**

1. **Statistiques Globales** :
   - Nombre total d'articles
   - Valeur totale du stock (quantité × prix)
   - Article le plus cher
   - Article avec le stock le plus bas
   - Nombre total d'utilisateurs

2. **Répartition par Catégorie** :
   - Nombre d'articles par catégorie
   - Affichage sous forme de liste ou graphique

3. **Alertes** :
   - Articles en rupture de stock (quantité = 0)
   - Articles avec stock faible (quantité < 5)

4. **Navigation Rapide** :
   - Liens vers les listes articles et utilisateurs
   - Boutons d'action rapide (Ajouter article, Ajouter user)

5. **Actualisation** :
   - Bouton pour recharger les données
   - Affichage de la dernière mise à jour

### **Critères d'Évaluation**

- [ ] Chargement des articles et users (4 pts)
- [ ] Calcul des statistiques (6 pts)
- [ ] Affichage des alertes (4 pts)
- [ ] Interface claire et organisée (4 pts)
- [ ] Navigation fonctionnelle (2 pts)

### **Bonus** (+15 pts)
- Graphiques avec une bibliothèque (Chart.js, Recharts)
- Export des données en CSV
- Filtres par période
- Recherche globale (articles + users)
- Mode sombre/clair

### **Code de Départ**

```javascript
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [articles, setArticles] = useState([]);
  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState({
    totalArticles: 0,
    valeurTotale: 0,
    articlePlusCher: null,
    stockFaible: [],
    totalUsers: 0
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    // TODO: Charger articles et users
    // TODO: Calculer les statistiques
  };

  const calculateStats = (articlesData, usersData) => {
    // TODO: Calculer toutes les statistiques
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">📊 Dashboard</h1>
      
      {/* TODO: Afficher les statistiques */}
      
      {/* TODO: Afficher les alertes */}
      
      {/* TODO: Navigation rapide */}
    </div>
  );
}

export default Dashboard;
```

---

## 📊 Barème Global

| Exercice | Points | Bonus | Total Possible |
|----------|--------|-------|----------------|
| Exercice 1 | 20 | 5 | 25 |
| Exercice 2 | 20 | 5 | 25 |
| Exercice 3 | 20 | 5 | 25 |
| Exercice 4 | 20 | 10 | 30 |
| Exercice 5 | 20 | 15 | 35 |
| **TOTAL** | **100** | **40** | **140** |

---

## ✅ Checklist Générale

### **Pour Chaque Exercice**

- [ ] Code propre et bien commenté
- [ ] Gestion des erreurs implémentée
- [ ] États de chargement gérés
- [ ] Navigation fonctionnelle
- [ ] Interface utilisable et claire
- [ ] Aucune erreur dans la console

### **Bonnes Pratiques**

- [ ] Noms de variables explicites
- [ ] Fonctions réutilisables
- [ ] Composants bien organisés
- [ ] Utilisation correcte de useState et useEffect
- [ ] Gestion appropriée des promesses (async/await)

---

## 🚀 Conseils pour Réussir

1. **Commencez par l'exercice 1** et progressez dans l'ordre
2. **Testez chaque fonctionnalité** avant de passer à la suivante
3. **Utilisez la console** pour déboguer (`console.log`)
4. **Vérifiez les réponses de l'API** dans l'onglet Network (F12)
5. **Réutilisez le code** des exercices précédents
6. **Demandez de l'aide** si vous êtes bloqué plus de 30 minutes
7. **Faites des commits Git** réguliers

---

## 📚 Ressources Autorisées

- Documentation React : https://react.dev
- Documentation React Router : https://reactrouter.com
- MDN Web Docs : https://developer.mozilla.org
- Cours fourni en classe
- Stack Overflow (pour déblocage uniquement)

---

## 📅 Planning Recommandé (5 Jours)

- **Jour 1** : Exercice 1 (3-4 heures)
- **Jour 2** : Exercice 2 (3-4 heures)
- **Jour 3** : Exercice 3 (4-5 heures)
- **Jour 4** : Exercice 4 (4-5 heures)
- **Jour 5** : Exercice 5 + Bonus (5-6 heures)

---

## 🎓 Critères de Validation

**Pour valider chaque exercice :**

1. L'application **ne doit pas crasher**
2. Les appels API doivent **fonctionner**
3. Les données doivent **s'afficher correctement**
4. La navigation doit être **fluide**
5. Le code doit être **lisible et organisé**

---

**Bon courage pour vos exercices ! 💪**

**N'oubliez pas : L'objectif est d'apprendre, pas seulement de finir. Prenez le temps de comprendre chaque concept !**