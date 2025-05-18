# otaniemi.vite
A Vite-based MapLibre site for otaniemi.pmtiles

## 🚀 Demo
https://hfu.github.io/otaniemi.vite/

## 🎯 Purpose
- Demonstrate the use of PMTiles with MapLibre
- Show 3D buildings in Otaniemi
- Illustrate how to create a style.json using JavaScript spread syntax effectively

## 🛠️ Build Instructions for Copilot
- Create a Vite project
  - The static site is generated under the `docs` folder instead of `dist` so it can be hosted on GitHub Pages.
- Create the MapLibre style description inside `main.ts`.
  - Use spread syntax to efficiently create the style.json file.
  - Example: `style = { ...style, layers: [ { ...extrusion, id: '3d-buildings' } ] }`
- The PMTiles source is at `https://hfu.github.io/otaniemi.pmtiles/otaniemi.pmtiles`
  - The schema of the vector tiles is documented at https://docs.protomaps.com/basemaps/layers
  - The `buildings` vector tile layer is used, with properties `soft_rank`, `height`, `min_height` to create 3D buildings as a `fill-extrusion` layer. Only polygons with `kind` being either `building` or `building_part` are used.
- Install the maplibre-gl-js and pmtiles packages
  - `main.ts` may start with `import { Map } from 'maplibre-gl'; import * as pmtiles from 'pmtiles';`
- The default map center is set to Otaniemi, Espoo, Finland, with zoom 13.66 at [60.18498, 24.82685]
- With MapLibre GL JS, a geolocation control, a zoom control, and a scale control are added to the map.

## 📦 Prerequisites
- Node.js (version 18.x or higher recommended)
- npm (version 9.x or higher recommended)
- Vite (globally installed with `npm install -g vite`, or use `npx vite`)

## 💻 Usage

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

## 🗂️ Project Structure
- `src/` - Source code (TypeScript, styles, etc.)
- `docs/` - Static site output for GitHub Pages
- `index.html` - Main HTML entry point
- `vite.config.ts` - Vite configuration (output to `docs`)
- `README.md` - Project documentation

## 🏗️ How Was the Repo Set Up?

Here are all the commands that were used to set up this repository:

1. Initialize a new Vite project (Vanilla + TypeScript):
   ```sh
   npm create vite@latest .
   # Options: Ignore files and continue → Vanilla → TypeScript
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
6. Build the static site for GitHub Pages:
   ```sh
   npm run build
   ```

> "A good setup is like a well-paved road—smooth and easy to follow!"

## 📄 License
This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.

## 🔗 See Also
- https://github.com/hfu/otaniemi.pmtiles
- https://docs.protomaps.com/basemaps/layers
