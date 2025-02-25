# React TypeScript Vite Boilerplate

A modern and minimal boilerplate for React projects using TypeScript, Vite, and other essential tools for a productive development experience.

## Features

- ⚡️ [Vite](https://vitejs.dev/) - Lightning fast build tool
- ⚛️ [React 19](https://react.dev/) - The library for web UIs
- 📝 [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- 🎨 [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- 📚 [Storybook](https://storybook.js.org/) - UI component development environment
- 🔍 [ESLint](https://eslint.org/) - Code linting
- 💅 [Prettier](https://prettier.io/) - Code formatting
- 🐶 [Husky](https://typicode.github.io/husky/) - Git hooks made easy
- 📋 [Commitlint](https://commitlint.js.org/) - Lint commit messages
- 🧭 [TanStack Router](https://tanstack.com/router) - Type-safe routing for React

## Getting Started

1. Clone this repository:

```bash
git clone https://github.com/yourusername/react-ts-vite-boilerplate.git
cd react-ts-vite-boilerplate
```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run storybook` - Start Storybook server
- `npm run build-storybook` - Build Storybook

## Commit Convention

This boilerplate follows [Conventional Commits](https://www.conventionalcommits.org/):

- `feat`: New feature
- `fix`: Bug fix
- docs: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `ci`: CI/CD changes

## Project Structure

```
.
├── .husky/             # Git hooks
├── .storybook/         # Storybook configuration
├── src/
│   ├── assets/        # Static assets
│   ├── components/    # React components
│   ├── lib/          # Utility functions and helpers
│   ├── stories/      # Storybook stories
│   └── styles/       # Global styles
├── public/            # Public static files
└── ... configuration files
```

## License

MIT
