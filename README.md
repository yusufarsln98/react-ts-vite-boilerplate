# React TypeScript Vite Boilerplate

A modern and minimal boilerplate for React projects using TypeScript, Vite, and other essential tools for a productive development experience.

## Credits

This boilerplate was inspired by [vite-react-boilerplate](https://github.com/RicardoValdovinos/vite-react-boilerplate) by Ricardo Valdovinos.

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
- 🌐 [i18next](https://www.i18next.com/) - Internationalization framework for language switching and localization

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
- `npm run build` - Build for production (runs TypeScript compiler and Vite build)
- `npm run preview` - Preview production build
- `npm run prepare` - Setup Husky git hooks
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run storybook` - Start Storybook server (port 6006)
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

Collecting workspace informationI'll help update the project structure section in your README.md to reflect your actual workspace structure. Here's the updated version:

## Project Structure

```
.
├── .env.example       # Example environment variables
├── .husky/            # Git hooks configuration
├── .storybook/        # Storybook configuration
├── docs/              # Project documentation
├── public/            # Public static files
├── src/
│   ├── assets/        # Static assets (images, locales)
│   ├── common/        # Common utilities and configurations
│   ├── components/    # Reusable UI components
│   │   └── ui/        # Common UI components
│   ├── features/      # Feature-specific modules
│   ├── hooks/         # Custom React hooks
│   ├── pages/         # Page components
│   ├── routes/        # Router configuration
│   ├── store/         # Global state management
│   ├── stories/       # Storybook stories
│   ├── styles/        # Global styles
│   └── types/         # TypeScript type definitions
└── ... configuration files
```

Key directories:

- `assets/`: Contains static files like images and localization files
- `common/`: Shared utilities, helpers, and configurations
- `components/`: Reusable UI components organized by feature
- `features/`: Feature-specific code organized in modules
- `hooks/`: Custom React hooks for shared logic
- `pages/`: Top-level page components
- `routes/`: TanStack Router configuration and route definitions
- `store/`: Global state management using Zustand
- `types/`: TypeScript type definitions and interfaces

This structure better reflects your actual project organization and includes the additional directories like `features`, `hooks`, `pages`, and `store` that are present in your workspace.

## License

MIT License
