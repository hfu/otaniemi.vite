# otaniemi.vite
A vite-based maplibre site for otaniemi.pmtiles

# Demo
https://hfu.github.io/otaniemi.vite/

# Purpose
- demonstrate the use of pmtiles with maplibre
- show 3D buildings in otaniemi
- show how to create style.json using JavaScript scpread syntax effectively

# Build instructions for copilot
- create a vite project
  - static site is created under `docs` folder instead of `dist` so that it can be hosted on github pages.
- create MapLibre Style description inside `main.js` file. 
  - use spread syntax to create the style.json file efficiently. 
  - like `style = { ...style, layers: [ { ...extrusion, id: '3d-buildings' } ] }`...
- the PMTiles source is at `https://hfu.github.io/otaniemi.pmtiles/otaniemi.pmtiles`
  - schema of the vector tiles are documented at https://docs.protomaps.com/basemaps/layers
  - first we use `buildings` vector tile layer, with properties `soft_rank`, `height`, `min_height` to create 3D buildings with as `fill-extrusion` layer. We only use `buildings` polygons with `kind` being either `building` or `building_part`.
- need to install maplibre-gl-js and pmtiles packages
  - `main.js` may start with `import { Map } from 'maplibre-gl'; import * as pmtiles from 'pmtiles';`
- the default map center is set to Otaniemi, Espoo, Finland, with 13.66/60.18498/24.82685
- With MapLibre GL JS, a geolocation control, a zoom control, and a scale control are added to the map.

# Prerequisites
- Node.js (version 18.x or higher recommended)
- npm (version 9.x or higher recommended)
- Vite (globally installed with `npm install -g vite`, or use `npx vite`)

# How was the repo set? 

Here are all the commands that were used to set up this repository:

1. Initialize a new Vite project (Vanilla + TypeScript):
   ```sh
   npm create vite@latest .
   # 選択肢: Ignore files and continue → Vanilla → TypeScript
   ```
2. Update Node.js to the latest version using Volta:
   ```sh
   volta install node
   ```
3. Install project dependencies:
   ```sh
   npm install
   ```
4. Install MapLibre GL JS and pmtiles packages:
   ```sh
   npm install maplibre-gl pmtiles
   ```
5. Start the Vite development server:
   ```sh
   npm run dev
   ```

> "A good setup is like a well-paved road—smooth and easy to follow!"

# Usage

To run the project locally:

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```
   The app will be available at the URL shown in your terminal (usually http://localhost:5173).

To build the static site for GitHub Pages:

1. Run the build command:
   ```sh
   npm run build
   ```
   The static site will be generated in the `docs` folder.
2. Push your repository to GitHub and enable GitHub Pages for the `docs` folder.

# Project Structure

- `src/` - Source code (TypeScript, styles, etc.)
- `docs/` - Static site output for GitHub Pages
- `index.html` - Main HTML entry point
- `vite.config.ts` - Vite configuration (output to `docs`)
- `README.md` - Project documentation

# License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.

# See also
- https://github.com/hfu/otaniemi.pmtiles
