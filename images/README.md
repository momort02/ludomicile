# 📁 Dossier Images - LUDO MICILE

## Structure des images

Organisez vos images de maçonnerie dans les dossiers suivants :

### 📸 `/portails/`
Placez ici les images de vos **portails en briques ou pierres**
- `portail-1.jpg`
- `portail-2.jpg`
- `portail-3.jpg`
- ... (autant d'images que vous le souhaitez)

### 🧱 `/murets/`
Placez ici les images de vos **murets et clôtures**
- `muret-1.jpg`
- `muret-2.jpg`
- `muret-3.jpg`
- ... (autant d'images que vous le souhaitez)

### 🏗️ `/realisations/`
Placez ici les images de vos **autres réalisations** (constructions, rénovations, etc.)
- `realisation-1.jpg`
- `realisation-2.jpg`
- `realisation-3.jpg`
- ... (autant d'images que vous le souhaitez)

## Format des images

- **Format recommandé** : JPG, PNG, WebP
- **Dimensi optimal** : 600x600px minimum, 1200x800px pour la meilleure qualité
- **Poids** : Compressez vos images (max 150KB par image)
- **Aspect ratio** : 1:1 (carré) ou 3:2 (paysage)

## ⚡ Comment ajouter plus d'images

1. Nommez vos images de manière cohérente : `portail-4.jpg`, `muret-4.jpg`, etc.
2. Mettez à jour le HTML (`index.html`) en ajoutant un nouvel élément `<div class="gallery-item">` avec la catégorie correcte
3. **Exemple pour ajouter un 4ème portail** :

```html
<div class="gallery-item" data-category="portails">
    <img src="images/portails/portail-4.jpg" alt="Portail 4" loading="lazy">
    <div class="overlay">
        <h3>Titre du portail</h3>
    </div>
</div>
```

## 🎨 Catégories disponibles
- `portails` - pour les portails
- `murets` - pour les murets
- `realisations` - pour les autres projets
- `all` - affiche toutes les images

Le filtre sur le site permettra aux visiteurs de voir les images par catégorie !
