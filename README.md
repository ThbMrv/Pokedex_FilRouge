# Pokedex NextJS

Ce projet est un Pokédex moderne développé avec Next.js, React, TypeScript et Material UI. Il permet de rechercher, filtrer et consulter les détails des Pokémon, avec support multilingue (FR/EN), filtres par type, et navigation fluide.

## Fonctionnalités principales

- Page d’accueil avec liste des Pokémon
- Recherche dynamique/par nom (searchbar)
- Filtre par type
- Détail de chaque Pokémon (page dédiée)
- Naviguer d'un pokemon suivant/précédent depuis la page détail du pokemon
- Support multilingue (français/anglais)
- Persistance de la langue et de la recherche dans l’URL
- Page 404 personnalisée
- Responsive et design Material UI
- Tests unitaires sur tous les composants principaux

## Prérequis

- Node.js >= 18
- npm >= 9

## Routing

Le projet utilise le routeur natif de Next.js (App Router) et non react-router.
Lors du passage obligatoire du projet sous Next.js, j’ai compris que le routeur devait également être celui de Next, et j’ai donc adapté l’architecture en conséquence avant le rendu.

Je viens de m'en rendre compte en lisant le barème avant de le rendre ^^

## Installation

1. **Cloner le projet**

```bash
git clone url
cd Pokedex
```

2. **Installer les dépendances**

```bash
npm install
```

## Lancer le projet en développement

```bash
npm run build
npm start
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000).

## Lancer les tests unitaires

```bash
npm test
```

## Structure du projet

- `app/` : Pages Next.js (accueil, détail, 404)
- `app/src/components/` : Composants React (Header, Logo, LanguageSelection, PokemonCard, etc.)
- `app/src/contexts/` : Contexte pour la langue
- `app/src/data/` : Données JSON (pokémons, types)
- `app/src/types/` : Types TypeScript
