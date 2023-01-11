# Coding challenge Technische Unie: Product listing

This application is my input for the coding challenge from the Technische Unie.

## Business wish

Using the provided product data, create a PLP (Product Listing Page) based on the following
Acceptance Criterium:

- As a customer, I want an overview of products with the following properties:
  title, image, description, price
- As a customer, I want a sorted overview based on the ascending price
  (no need to create a switch here, just hardcode the order)
- As a customer, I want to be able to add and remove individually favorited products
- As a customer, I want to see a list of my favorite products

## Requirements

- For design reference have a look at this figma file, the font used is Montserrat
- Forego old browser compatibility- the demo should work in the latest version of Chrome or
  Firefox
- Use anything you like within the Vue community code-wise
- Keep it lean and mean within a 2-hour limit; no need to go fancy
- Deliver your code on GitHub (or any other public git service) and share the link to it with us

## Design

The original designs for the product listing application can be found on figma: https://www.figma.com/file/cl1bPObXd2iCAXOSXv1Cyz/PLP-Test-page?node-id=0%3A1&t=5LN6jSUALm44GT1C-1

## Contributing

This project was build using the following technologies:

- [PNPM](https://pnpm.io/motivation)
- [Vite](https://vitejs.dev/guide/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Vue](https://vuejs.org/guide/introduction.html)
- [ESLint](https://eslint.org/docs/latest/user-guide/getting-started)
- [Prettier](https://prettier.io/docs/en/index.html)

### Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm run dev
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm run lint
```
