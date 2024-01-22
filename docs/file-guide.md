# Soldance.io Repository File Guide

Updated on: 7/19/2023

## File Layout

Listed below are the files that should be modified in order to update or add features to the website.

```
soldance.io/
|- public/
| | |- high/
| | | |- example.png
| | |- low/
| | | |- example.png
| |- favicon.ico
|
|- src/
| | |- app/
| | | |- example.png
| | |- components/
| | | |- solana/
| | | |- layout.tsx
| | | |- image.tsx
| | |- styles/
| | | |- globals.css
|
|- package.json
|- next.config.js
|- tailwind.config.ts
|- ... (other project-related files)
```

The `public` folder is used to store static assets such as images and the favicon (`.png`, `.ico`)

- It has two folders, `high/` (high res images) and `low/` (low res images) for the lazy loading image component.

The `src` folder is where most of the source code is stored.

- The `app/` folder contains all the pages and api routes.
  - `layout.tsx` defines the root of the project. This should only be modified when adding new react context providers.
  - To create a new **page**, create a new folder within the `app/` folder (ex: `example/`) and then create a `page.tsx` file.

```tsx
/* Sample code for page.tsx */
import Layout from 'components/layout';
import { generateMetadata } from 'components/metadata';

export const metadata = generateMetadata({ title: 'Example' });

export default function Example() {
  return <Layout>/* ... your components here */</Layout>;
}
```

- The `components/` folder contains reusable components that can be used in the `app/` directory when making new pages.
  - The `solana/` folder here contains the necessary solana wallet components and should not be modified unless it's necessary.
  - The `layout.tsx` file can be reused in order to introduce a 12-column grid layout for uniform style across pages.

```tsx
/* Sample code for newComponent.tsx */
'use client'; // THIS IS REQUIRED FOR ALL CLIENT COMPONENTS

import { type FC, type PropsWithChildren } from 'react';

const NewComponent: FC = () => {
  // used for solo components
  return <>/* your code here */</>;
};

// Usage: <NewComponent />

const NewComponent: FC<PropsWithChildren> = ({ children }) => {
  // used when wrapping around other components
  return (
    <>
      {children}
      /* your code here */
    </>
  );
};

/* Usage:
<NewComponent>
  <p>Hello</p>
</NewComponent> */

export default NewComponent;
```

- The `styles/` folder contains global css styles which can be added to `globals.css`. These styles must be defined in the root layout in the `app/` folder.

Notes:

- When installing new dependencies, use `yarn add <package-name>` and do not modify `package.json` directly.
- `next.config.js` and `tailwind.config.ts` should only be modified when necessary. Refer to the [Tailwind CSS docs](https://tailwindcss.com/) and [Next.js docs](https://nextjs.org/docs).
