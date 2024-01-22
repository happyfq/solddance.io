 # Local Development
To run this project locally, follow these steps:

1. Clone the repository:
`git clone https://github.com/upgllc7/soldance.io.git`

2. Open the cloned repository in your Code Editor

3. Install the dependencies:
`yarn install`

Start the development server:
`yarn dev`

Open your browser and visit `http://localhost:3000` to see the project running.

# Contributing
To contribute to the project, follow these steps:


1. Create a new branch for your changes:
`git checkout -b <branch-name>`

2. Make your desired changes and commit them with descriptive commit messages:
`git commit -am 'Add feature or fix bug: <description>'`

3. Push your changes to the repository:
`git push origin <branch-name>`

5. Open a pull request from your branch to the main repository.

# Commits messages conventions:
*feat*: This prefix is used when adding a new feature or significant enhancement to your codebase. It indicates the introduction of new functionality that wasn't previously available.

Example: `feat: Implement user authentication feature`

*chore*: The chore prefix is used for tasks related to maintenance, housekeeping, or general upkeep of the project. This includes activities like updating dependencies and configuring build tools without adding new features.

Example: `chore: Update package dependencies`

*refactor*: When making changes to the code that improves its structure, readability, or performance without altering its functionality, you can use the refactor prefix. It denotes code improvements that don't introduce new features or fix bugs.

Example: `refactor: Simplify logic in component X`

*fix*: If you're addressing a bug or resolving an issue, the fix prefix is appropriate. It indicates that the commit resolves an existing problem or bug in the codebase.

Example: `fix: Resolve issue with data rendering in component Y`

*style*: When making changes to the code solely for stylistic purposes, such as formatting, indentation, or code style adherence, you can use the style prefix. These changes don't affect the functionality of the code.

Example: `style: Format code according to the style guide`

# Additional Resources
- [Metaplex Candy Machine Documentation](https://docs.metaplex.com/programs/candy-machine/)
- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Spring.js documentation](https://www.react-spring.dev/docs/getting-started)

# Creating Test Files for React Components in Next.js

To ensure the reliability of your React components within a Next.js project, it's essential to create test files using Jest. Here's how to do it:

## Navigate to Component Directory

Inside your project's `components` folder, locate the component you want to create a test for. Let's say it's named `Button`.

## Create a Test File

Inside the `__tests__` folder (assuming it already exists), create a new file named `Button.test.js`. This naming convention is crucial as Jest will automatically detect and run these files.

## Write Your Test

In `Button.test.js`, use Jest's testing functions to write your tests for the `Button` component. For example:

```javascript
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../Button'; // Adjust the import path based on your project structure

test('Button renders correctly and triggers a click event', () => {
  // Arrange
  const onClickMock = jest.fn(); // Create a mock function
  const { getByText } = render(<Button label="Click Me" onClick={onClickMock} />);

  // Act
  const buttonElement = getByText('Click Me');
  fireEvent.click(buttonElement); // Simulate a button click

  // Assert
  expect(buttonElement).toBeInTheDocument();
  expect(onClickMock).toHaveBeenCalled(); // Ensure the mock function is called
});
```
## Run Tests
Run your tests using the `yarn test` command. Jest will automatically locate and execute the test files in the __tests__ directory.
After running the command, Jest will provide test results indicating whether your tests have passed or failed. This process helps you catch issues early and maintain the quality of your components throughout the development process.
