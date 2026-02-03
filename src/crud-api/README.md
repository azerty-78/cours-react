# Mini-projet CRUD API

Ce dossier contient un petit système pour tester les appels à ton **API REST Spring Boot** (CRUD : Create, Read, Update, Delete).

## Prérequis

- L'API Spring Boot doit tourner **en local** (par défaut sur `http://localhost:8080`).
- Les endpoints utilisés :
  - **Articles** : `GET/POST /api/articles` et `GET/PUT/DELETE /api/articles/{id}`
  - **Users** : `GET/POST /api/users` et `GET/PUT/DELETE /api/users/{id}`

## Structure du dossier

```
crud-api/
├── api/
│   ├── config.js        → URL de base de l'API (localhost:8080)
│   ├── articleService.js → Fonctions CRUD pour les articles (commentées)
│   └── userService.js   → Fonctions CRUD pour les users (commentées)
├── ArticlesCrud.js      → Liste + formulaire + actions Articles
├── UsersCrud.js         → Liste + formulaire + actions Users
├── CrudApi.js           → Page avec onglets Articles / Users
└── README.md            → Ce fichier
```

## Comment ça marche

1. **config.js**  
   Définit `API_BASE_URL` (ex. `http://localhost:8080`). Si ton API est sur un autre port, modifie cette valeur.

2. **articleService.js / userService.js**  
   Chaque fichier expose des fonctions qui font des `fetch()` vers ton backend :
   - **GET** : récupérer la liste ou un élément par id
   - **POST** : créer
   - **PUT** : modifier (avec l’id dans l’URL)
   - **DELETE** : supprimer  

   Les fonctions sont commentées dans le code pour expliquer chaque appel.

3. **ArticlesCrud.js / UsersCrud.js**  
   Composants React qui :
   - utilisent **useState** pour la liste, le chargement, les erreurs et le formulaire ;
   - utilisent **useEffect** pour charger la liste au montage (équivalent GET) ;
   - au submit du formulaire : **POST** (création) ou **PUT** (édition) ;
   - boutons **Modifier** : remplissent le formulaire puis PUT ;
   - boutons **Supprimer** : **DELETE** puis rechargement de la liste.

4. **CrudApi.js**  
   Page principale avec deux onglets (Articles | Utilisateurs) qui affichent soit `ArticlesCrud`, soit `UsersCrud`.

## Accès dans l’app

- Route : **/crud-api**
- Lien dans la barre de navigation : **CRUD API**

## Fonctionnalités React utilisées

- **useState** : données (liste, formulaire), loading, error, id en édition
- **useEffect** : chargement initial de la liste (une fois au montage)
- **Appels async** : `async/await` dans les handlers (submit, delete, load)
- **Gestion d’erreurs** : try/catch + message affiché si l’API ne répond pas
- **Formulaire contrôlé** : champs liés à l’état avec `value` et `onChange`

## Modifier l’URL de l’API

Si ton backend n’est pas sur `http://localhost:8080`, édite **api/config.js** et change `API_BASE_URL`.
