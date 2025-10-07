# Tatum Monorepo Setup

This document describes the monorepo structure and setup for the Tatum project.

## Project Structure

```
tatum/
├── apps/                    # Applications
│   ├── web/                # Next.js web application
│   └── mobile/             # React Native mobile application
├── packages/               # Shared packages
│   ├── ui/                 # Shared UI components
│   ├── types/              # Shared TypeScript types
│   └── config/             # Shared configuration
├── package.json            # Root package.json with workspace scripts
├── pnpm-workspace.yaml     # PNPM workspace configuration
├── turbo.json             # Turbo build system configuration
└── tsconfig.base.json     # Shared TypeScript configuration
```

## Key Features

- **PNPM Workspaces**: Efficient package management and dependency sharing
- **Turbo**: Fast, incremental builds with intelligent caching
- **TypeScript**: Shared type definitions and configuration
- **Shared Packages**: Reusable UI components, types, and configuration

## Available Scripts

### Root Level Commands

```bash
# Install all dependencies
pnpm install

# Build all packages and apps
pnpm build

# Build only type definitions
pnpm build:types

# Build only packages (not apps)
pnpm build:packages

# Development mode
pnpm dev

# Development mode for web app only
pnpm dev:web

# Development mode for packages only
pnpm dev:packages

# Lint all packages
pnpm lint

# Type checking
pnpm check-types

# Run tests
pnpm test
```

### Package-Specific Commands

Each package and app has its own scripts defined in their respective `package.json` files.

## Shared Packages

### @tatum/ui

Shared UI components that can be used across web and mobile applications.

### @tatum/types

Shared TypeScript type definitions for consistent typing across the monorepo.

### @tatum/config

Shared configuration including environment variables and constants.

## Workspace Dependencies

Packages can depend on each other using the `workspace:*` protocol:

```json
{
  "dependencies": {
    "@tatum/ui": "workspace:*",
    "@tatum/types": "workspace:*"
  }
}
```

## TypeScript Configuration

The monorepo uses a base TypeScript configuration that all packages extend. Path mappings are configured to enable easy imports:

- `@/*` - Web app source files
- `@web/*` - Web app specific imports
- `@mobile/*` - Mobile app imports
- `@tatum/ui` - UI package imports
- `@tatum/types` - Types package imports

## Getting Started

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Build type definitions:

   ```bash
   pnpm build:types
   ```

3. Start development:
   ```bash
   pnpm dev:web
   ```

## Adding New Packages

1. Create a new directory in `packages/`
2. Add a `package.json` with proper naming (`@tatum/package-name`)
3. Create a `tsconfig.json` that extends the base configuration
4. Add the package to workspace dependencies where needed
5. Update the root `package.json` scripts if needed

## Best Practices

- Use `workspace:*` for internal dependencies
- Keep shared packages focused and cohesive
- Use TypeScript for all packages
- Follow the established naming conventions
- Test packages independently before integrating
