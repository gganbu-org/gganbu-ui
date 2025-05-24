<h1 align="center">An UI library which used Panda CSS</h1>
<p align="center">
<img alt="NPM Downloads" src="https://img.shields.io/npm/v/@gganbu-org/react"/>
  <img alt="Bundle Size" src="https://badgen.net/bundlephobia/minzip/@gganbu-org/react">
  <a href="https://github.com/ggnabu-org/gganbu-ui/blob/main/LICENSE">
    <img alt="MIT License" src="https://img.shields.io/github/license/ggnabu-org/gganbu-ui"/>
  </a>
</p>

<br />

## What's inside?
This repository uses the following :

- [`pnpm`](https://pnpm.io) as a package manager
- [`Panda-css`](https://panda-css.com/) as CSS-in-JS library
- [`Tsup`](https://tsup.egoist.dev/) as build tool
- [`Storybook`](https://storybook.js.org/) for visual testing
- [`TypeScript`](https://www.typescriptlang.org/) for static type checking
- [`ESLint`](https://eslint.org/) for code linting
- [`Prettier`](https://prettier.io) for code formatting

## Packages
This repository contains the following packages :

- `@gganbu-org/react` – Core components library
- `@gganbu-org/hooks` – Collection of hooks for React Hooks for Gganbu UI components
- `@gganbu-org/utils` – Collection of Common utilities for Gganbu UI
- `@gganbu-org/styled` – Styled API for creating component styling
- `@gganbu-org/styled-utils` – CSS utilities for the Gganbu Design System
- `@gganbu-org/theme` – A preset for Panda CSS that contains Gganbu Design System's branding

## Installation
To use Gganbu UI components, all you need to do is install the
`@gganbu-org/react` package and its peer dependencies:

```sh
# with pnpm
$ pnpm add @gganbu-org/react

# with Yarn
$ yarn add @gganbu-org/react

# with npm
$ npm i @gganbu-org/react
```

## Usage
To start using the components, please follow these steps:

1. Import the entry CSS in your src/app/layout.tsx file as follows:

```jsx
import '@gganbu-org/styled/styles.css';

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

Optionally, you can wrap your application with the `GganbuProvider` so you
can toggle between light and dark mode within your app.

2. Now you can start using components the following snippet:

```jsx
import { Button } from "@gganbu-org/react"

function Example() {
  return  <Button variant='solid'>Hello 🐼!</Button>
}
```

## License

MIT License