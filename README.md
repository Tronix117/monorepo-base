# Monorepo exemple setup

This repository is a bootstrap exemple for a project with multiple apps :

- api (NestJS)
- web (NextJS)

Using pnpm workspaces (and turborepo for conveniance)

## Structure

```
apps => application that can be started
packages => shared packages
```

Every package or app must have a `package.json` file describing dependencies, naming of the package should be `@my-project/package-name` (change my-project by what you want but keep consistency).

## Setup

1. Install the IDE extension Biome (for linting) 
2. Install pnpm (from website curl, if you want pnpm to automaticaly manage node version, which is recommended, avoid npm, corepack or packaga manager => https://pnpm.io/installation)
3. Install dependencies: `pnpm i`

For linting, you can replace biome with packages/eslint you will find an exemple in the `legacy` git branch.

## Develop

### Run the project with

```
pnpm dev
```

all apps will be launched in parallel.

### Build the project

```
pnpm build
```

### Test the project

```
pnpm test
```

or 

```
pnpm test:watch
```

### Lint and format the project

```
pnpm lint
```

or to fix issues:

```
pnpm lint:fix
```

## Technical informations

### Turborepo

Turborepo is used to run scripts in parallel and cache results.
It is fundamentaly not a requirement since `pnpm run -R ` can also do that.

### Typescript

The challenge of a monorepo is to make packages shareable, usualy we do that by compiling packages prior to using them within the apps.

It may cause issues with live-reloads, since the dependency packages will need to be recompiled first when a package is updated, and the apps will need to know that and rebuild too.
Also if one app is ESM and the other is CommonJS, it will cause issues, and will need a "double" compilation of the package.
Precompiling package also means dependency can have trouble being tree-shaken.

The approach here is to use :
* webpack on NestJS, compiling everything and using `node-externals` for exclusions (like node_modules) except for the packages starting by our prefix `@my-project`
* transpilePackages on NextJS, to compile the packages starting by our prefix `@my-project`

This way, the apps themselves use the package sources directly without the need to be precompiled first.

### Biome

Biome is used for linting and formatting. Faster than eslint, but less available rules, also handle formatting (instead of prettier).

