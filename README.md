# mathjax-formula-svg

Ce projet permet de générer des formules mathématiques au format SVG à partir d’expressions LaTeX, en utilisant MathJax et Node.js sous Termux (Android ou Linux). Les SVG peuvent ensuite être visualisés dans n’importe quel navigateur web.

## Fonctionnalités

- Conversion automatique de formules LaTeX en SVG vectoriel.
- Visualisation rapide sur mobile ou desktop.
- Script adaptable : modifiez la formule dans le fichier `mathjax.js` selon vos besoins.

## Installation

1. Installez Node.js dans Termux :
   ```
   pkg install nodejs -y
   ```

2. Cloner le projet :
   ```
   git clone https://github.com/valorisa/mathjax-formula-svg.git
   cd mathjax-formula-svg
   ```

3. Installez MathJax via npm :
   ```
   npm install mathjax@4
   ```

## Utilisation

1. Modifiez la variable `formuleWillans` dans le fichier `mathjax.js` pour entrer votre formule LaTeX.

2. Lancez la conversion :
   ```
   node mathjax.js
   ```
   Le fichier `output.svg` est créé dans le dossier du projet.

3. Visualisez le résultat :
   - Ouvrez `output.svg` avec votre navigateur mobile/desktop, ou
   - Démarrez un serveur HTTP local dans Termux :
     ```
     python3 -m http.server 8080
     ```
     puis accédez à `http://localhost:8080/output.svg` dans le navigateur.

## Exemple de formule

La formule de Willans pour le nième nombre premier :

```latex
p_n = 1 + \sum_{i=1}^{2^n} \left\lfloor \left[ \frac{n}{\sum_{j=1}^{i} \left\lfloor \cos^2 \left( \pi \frac{(j-1)!+1}{j} \right) \right\rfloor } \right]^{1/n} \right\rfloor
```

## Licence

Licence MIT
