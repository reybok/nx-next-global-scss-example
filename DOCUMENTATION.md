## Setup

```bash
nvm use v16.13.2
yarn create nx-workspace #v13.8.3
yarn nx generate @nrwl/react:library --name=components --style=scss --directory=shared --compiler=swc --no-interactive
yarn add -E carbon-components carbon-components-react carbon-icons
yarn add -DE @types/carbon-components @types/carbon-components-react
```

## The Error

> Global CSS cannot be imported from files other than your Custom <App>. Due to the Global nature of stylesheets, and to avoid conflicts, Please move all first-party global CSS imports to pages/\_app.js. Or convert the import to Component-Level CSS (CSS Modules).
> Read more: https://nextjs.org/docs/messages/css-global
> Location: ../../libs/shared/components/src/lib/greeting.tsx

## Reproduce

1. Clone the repo
2. `nvm use v16.13.2`
3. `yarn install`
4. `yarn nx serve`
5. Go to http://localhost:4200
