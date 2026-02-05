# ScolarPay – Guide du projet (Frontend React)

Développement d’une **solution de gestion des frais de scolarité** pour l’**Institut Supérieur de Technologie (IST)**.  
Ce README adapte le **guide PDF** au contexte d’une application **React** pour que des débutants puissent suivre une structure claire.

---

## 0. Contexte de la mission

- **Client** : Institut Supérieur de Technologie (IST).  
- **Problème** : le processus actuel de gestion des frais de scolarité est manuel (papier, reçus qui se perdent, temps perdu, faible visibilité).  
- **Objectif** : mettre en place une application web fiable, sécurisée, simple d’utilisation, nommée **ScolarPay**, pour :
  - centraliser les paiements des frais de scolarité,
  - suivre le **solde des étudiants en temps réel**,
  - générer et envoyer des **reçus PDF**,
  - donner aux parents un **accès en ligne** à l’historique de versements.

---

## 1. Les 5 phases de développement appliquées au projet React

1. **Phase 1 – Découverte & Cadrage**
   - Comprendre le métier, le problème et les objectifs.
   - Rédiger le **Cahier des Charges (CDC)** : périmètre, user stories, non-fonctionnel.
2. **Phase 2 – Conception de l’Expérience (Wireframes)**
   - Créer les **maquettes fonctionnelles** (sans design final) pour les pages :
     - Page de **Connexion** (Admin & Parent),
     - **Tableau de Bord Administration**,
     - **Formulaire d’Ajout de Versement** (Admin),
     - **Tableau de Bord Parent** (vue solde & historique).
3. **Phase 3 – Développement (Le Code)**
   - Coder le **frontend en React** (ce dépôt) et le **backend (PHP/SQL)** séparément.
   - Modéliser la **base de données** : `utilisateurs`, `etudiants`, `versements`, etc.
4. **Phase 4 – Tests & Déploiement**
   - Vérifier que l’application respecte le CDC à 100 %.  
   - Tester : Authentification / Autorisation, génération et envoi des reçus, performance.
5. **Phase 5 – Maintenance & Évolution**
   - Corriger les bugs après lancement, faire évoluer les fonctionnalités (version 2.0, etc.).

---

## 2. Cahier des charges – Périmètre fonctionnel

### 2.1 Rôles utilisateurs

- **Administrateur de l’IST**
  - Gère les étudiants et leurs paiements.
  - Consulte les soldes en temps réel.
  - Enregistre des versements et les modifie si besoin.
  - Valide un versement et génère un **reçu PDF** envoyé au parent.

- **Parent d’Étudiant**
  - Se connecte pour accéder à l’espace de suivi.
  - Consulte le **récapitulatif financier** de son enfant (total dû, payé, solde restant).
  - Consulte l’**historique des versements**.
  - Télécharge les **reçus PDF** associés aux paiements.

### 2.2 Périmètre INCLUS (Version 1.0)

- Système d’**authentification** pour 2 rôles : **Admin** et **Parent**.  
- **Gestion des étudiants** par l’Admin.  
- **Affichage du solde étudiant en temps réel** (calcul à partir des versements).  
- **Enregistrement manuel** des versements par l’Admin (CRUD de base).  
- **Génération et téléchargement de reçus PDF**.  
- **Envoi par e‑mail** des reçus (selon implémentation backend).  
- **Consultation de l’historique** des paiements pour les parents.

### 2.3 Périmètre EXCLU (Version 1.0)

- Paiement en ligne par carte ou mobile money.  
- Gestion des absences des étudiants.  
- Messagerie interne entre admin et parents.  
- Gestion multi‑devises.

---

## 3. Spécifications fonctionnelles (User Stories ➜ Pages React)

### 3.1 User stories – Administrateur IST

| # | User Story (simplifiée) | Page / Composant React |
|---|-------------------------|------------------------|
| 1 | En tant qu’**admin**, je veux me connecter avec mon e‑mail et mot de passe. | `pages/auth/AdminLogin.js` |
| 2 | En tant qu’admin, je veux **rechercher un étudiant** par nom ou matricule. | `pages/admin/StudentsList.js` (+ barre de recherche) |
| 3 | En tant qu’admin, je veux voir le **solde restant** d’un étudiant en temps réel. | `pages/admin/StudentDetails.js` |
| 4 | En tant qu’admin, je veux **enregistrer un versement** (montant, date, motif…). | `pages/payments/AddPayment.js` |
| 5 | En tant qu’admin, après avoir cliqué sur **“Valider”**, je veux que le versement soit enregistré, le **reçu PDF généré** et envoyé au parent. | `pages/payments/AddPayment.js` + backend |
| 6 | En tant qu’admin, je veux un **Tableau de Bord** avec les derniers versements et indicateurs. | `pages/dashboard/AdminDashboard.js` |

### 3.2 User stories – Parent d’Étudiant

| # | User Story (simplifiée) | Page / Composant React |
|---|-------------------------|------------------------|
| 1 | En tant que **parent**, je veux me connecter avec mon e‑mail et mot de passe. | `pages/auth/ParentLogin.js` (ou login commun avec rôle) |
| 2 | En tant que parent, je veux une **vue financière** avec total dû, total payé, solde restant. | `pages/dashboard/ParentDashboard.js` |
| 3 | En tant que parent, je veux consulter l’**historique des versements**. | `pages/parent/PaymentsHistory.js` |
| 4 | En tant que parent, je veux pouvoir **télécharger les reçus PDF** de chaque versement. | `components/payments/PaymentReceiptLink.js` |
| 5 | En tant que parent, je veux être sûr que **je ne vois que les versements de mon propre enfant**. | Géré par l’API + garde de route (`PrivateRoute`) |

---

## 4. Architecture technique React

### 4.1 Stack recommandée

| Rôle | Librairie | Usage |
|------|-----------|-------|
| **Framework** | React 18 | UI |
| **Routage** | React Router v6 | Navigation & routes protégées |
| **Requêtes HTTP** | Axios | Appels API vers le backend (PHP/SQL) |
| **État global** | Context API (Auth, User) | Gestion du rôle et des infos utilisateur |
| **Styles** | Tailwind CSS | Mise en page rapide & responsive |
| **Formulaires** | React Hook Form (ou `useState`) | Login, ajout versement |
| **PDF** | Lib côté backend (recommandé) | Génération des reçus (hors React) |

### 4.2 Structure de dossiers (frontend)

```
scolarPay/
├── public/
│   └── index.html
├── src/
│   ├── index.js
│   ├── App.js
│   ├── routes/                 # Définition des routes
│   │   └── AppRoutes.jsx
│   │
│   ├── components/
│   │   ├── layout/             # Header, Sidebar, Layouts Admin/Parent
│   │   ├── common/             # Boutons, inputs, cartes, tableaux
│   │   └── payments/           # Composants liés aux versements (table, reçus…)
│   │
│   ├── pages/
│   │   ├── auth/
│   │   │   ├── Login.js        # Login commun (sélection de rôle) ou séparé
│   │   │   └── Register.js     # Optionnel selon CDC
│   │   ├── dashboard/
│   │   │   ├── AdminDashboard.js
│   │   │   └── ParentDashboard.js
│   │   ├── admin/
│   │   │   ├── StudentsList.js
│   │   │   └── StudentDetails.js
│   │   ├── payments/
│   │   │   ├── AddPayment.js
│   │   │   └── PaymentsList.js
│   │   ├── parent/
│   │   │   └── PaymentsHistory.js
│   │   └── public/
│   │       ├── Home.js
│   │       └── NotFound.js
│   │
│   ├── context/
│   │   └── AuthContext.js      # user, role, login, logout
│   │
│   ├── services/
│   │   ├── api.js              # instance axios
│   │   ├── authService.js
│   │   ├── studentService.js
│   │   └── paymentService.js
│   │
│   ├── hooks/
│   │   └── useAuth.js
│   │
│   ├── utils/
│   │   └── formatters.js       # format monnaie, dates, etc.
│   │
│   └── assets/                 # Logos, icônes, images
│
├── package.json
└── README.md
```

---

## 5. Routage (React Router v6)

Routes principales alignées avec le guide :

- `/` – Page d’accueil (présentation ScolarPay).  
- `/login` – Connexion (admin ou parent).  
- `/dashboard/admin` – Tableau de bord admin.  
- `/dashboard/parent` – Tableau de bord parent.  
- `/admin/etudiants` – Liste/Recherches étudiants.  
- `/admin/etudiants/:id` – Détails étudiant + solde en temps réel.  
- `/admin/versements/nouveau` – Formulaire d’ajout de versement.  
- `/parent/versements` – Historique des paiements pour le parent.  
- `*` – Page 404.

Utiliser un composant `PrivateRoute` pour protéger les routes et vérifier le **rôle** (`admin` ou `parent`).

---

## 6. Exigences non‑fonctionnelles (qualité)

D’après le guide :

- **Sécurité**
  - Mots de passe hashés en base de données (backend).
  - Protection contre les injections SQL (backend) et XSS (validation côté frontend).
  - Distinction claire entre **Authentification** (qui es‑tu ?) et **Autorisation** (que peux‑tu faire ?).
- **Performance**
  - Les pages doivent se charger en < 3 secondes sur une connexion raisonnable.
- **Compatibilité**
  - Support des dernières versions de Chrome, Firefox, Edge, Safari.
- **Design**
  - Respect de la charte graphique de l’IST (logo, couleurs principales).

---

## 7. Plan de travail conseillé pour les débutants

1. **Installer la stack frontend**
   - Créer l’app React & installer les dépendances :

   ```bash
   npm install react-router-dom axios
   # Optionnel : react-hook-form, date-fns
   ```

2. **Mettre en place le routage de base**
   - `Home`, `Login`, `NotFound`.
3. **Créer l’AuthContext**
   - Gestion du `user` (id, nom, rôle), `login`, `logout`.
4. **Implémenter les pages cœur**
   - `AdminDashboard`, `ParentDashboard`, `StudentsList`, `StudentDetails`, `AddPayment`, `PaymentsHistory`.
5. **Connecter au backend**
   - Utiliser `services/*.js` pour appeler les routes API (login, liste étudiants, versements).
6. **Ajouter les contrôles et validations**
   - Vérifier les rôles sur les routes, gérer les erreurs (toasts, messages d’erreur).
7. **Tester les User Stories**
   - Vérifier une par une les histoires Admin & Parent pour s’assurer que tout est couvert.

---

Ce README est la **traduction technique** du guide ScolarPay pour le frontend React.  
Tu peux maintenant créer les fichiers et pages listés ci‑dessus et les implémenter progressivement.
