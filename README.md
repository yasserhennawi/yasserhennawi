# Yasser Hennawi portfolio

A personal portfolio website for Yasser Hennawi, built on top of [react-boilerplate](https://github.com/react-boilerplate/react-boilerplate). It is a single-page application powered by React, Redux, Redux-Saga, and styled-components, served in development by a small Express dev server with hot-module reloading.

## Tech stack

- React 15 with React Router 3
- Redux + Redux-Saga + reselect
- styled-components and Material UI
- Webpack 2 build, served by Express in development
- Jest + Enzyme for tests

## Run it locally

### Prerequisites

- Node.js (the `package.json` `engines` field requires Node `>= 5`; in practice use Node 8 because the project predates modern Node releases)
- npm `>= 3`
- Git

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yasserhennawi/yasserhennawi.git
   cd yasserhennawi
   ```

2. Install dependencies. The `postinstall` hook will also build the webpack DLL bundle:

   ```bash
   npm install
   ```

   If you hit peer-dependency or engine errors on a newer Node, retry with:

   ```bash
   npm install --legacy-peer-deps
   ```

3. Start the development server with hot reloading:

   ```bash
   npm start
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000).

### Other useful scripts

- `npm test` — run the Jest test suite with coverage
- `npm run test:watch` — run Jest in watch mode
- `npm run lint` — run ESLint over the codebase
- `npm run build` — produce a production build in `./build`
- `npm run start:prod` — serve the production build locally
- `npm run start:tunnel` — expose the dev server over an ngrok tunnel
- `npm run clean:all` — wipe build, coverage, and analyzer output

## Project layout

```
app/          React application source (components, containers, store, routes)
server/       Express dev server entry point
internals/    Webpack config, generators, scripts, mocks, test setup
docs/         Project documentation (architecture, css, js, testing)
```

## License

MIT. See [LICENSE.md](./LICENSE.md).
