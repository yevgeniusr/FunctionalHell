# Agents

## Cursor Cloud specific instructions

This is a React (Create React App) single-page application with **no backend**. All game state is stored in browser `localStorage`.

### Running the dev server

```
source ~/.nvm/nvm.sh && nvm use 16
npm start        # starts on port 3000
```

Node 16 is required — `react-scripts@2.1.3` does not work on Node 18+. nvm is preconfigured with Node 16 as the default.

### Key commands

| Task | Command |
|------|---------|
| Dev server | `npm start` |
| Lint | `npx eslint src/` |
| Build | `npm run build` |
| Test | `CI=true npm test` (no test files exist in the repo — in-app testing uses Jasmine in the browser) |

### Gotchas

- The app makes a fire-and-forget `fetch` to `localhost:9292` on mount and a WebSocket connection to an external ngrok address. Both fail silently and do not affect functionality.
- `index.html` loads jQuery and toastr from CDNs over **http://**; if the dev server is accessed over HTTPS, mixed-content blocking may suppress toast notifications.
- There are pre-existing ESLint warnings/errors in the codebase (unused vars, `==` instead of `===`, etc.). These do not block the build.
