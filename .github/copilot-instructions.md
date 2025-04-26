# Project Instructions for GitHub Copilot

## Project Overview
This project is built using Astro as the main framework, with Tailwind CSS for styling and React for interactive components. The combination allows for a partially static site with dynamic islands of interactivity.

## Technology Stack
- **Astro**: Main framework for page building and routing
- **React**: Used for interactive components
- **Tailwind CSS**: Used for all styling
- **TypeScript**: Used for type safety

## Project Architecture

### File Structure
- `src/pages/`: Contains all Astro pages with the `.astro` extension
- `src/components/`: Contains Astro components (`.astro`) 
- `src/components/react`: Contains React components (`.tsx`)
- `src/layouts/`: Contains layout templates used across the site
- `src/styles/`: Contains global CSS and Tailwind customizations
- `public/`: Static assets like images, fonts, and files

### Coding Patterns

#### Astro Components
```astro
---
// Front matter for imports and JavaScript logic
import SomeComponent from '../components/SomeComponent.astro';
const pageTitle = "Page Title";
---

<SomeComponent title={pageTitle}>
  <p class="text-lg text-gray-800">Content goes here</p>
</SomeComponent>

<style>
  /* Scoped styles - use sparingly, prefer Tailwind */
</style>
```

#### React Components
```tsx
import { useState } from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export default function Button({ text, onClick }: ButtonProps) {
  const [isActive, setIsActive] = useState(false);
  
  return (
    <button 
      className={`px-4 py-2 rounded-md transition-colors ${
        isActive ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800'
      }`}
      onClick={() => {
        setIsActive(!isActive);
        onClick?.();
      }}
    >
      {text}
    </button>
  );
}
```

## Tailwind CSS Conventions
- Use Tailwind utility classes for all styling when possible
- Group related utilities with single spaces between groups:
  ```html
  <div class="flex items-center justify-between p-4 m-2 text-sm font-medium text-gray-800">
  ```
- Use consistent color schemes from the Tailwind palette
- For responsive design, use Tailwind's responsive prefixes (sm, md, lg, xl)
- Color Palette Preferences:
    - Primary: Hex #1991b8
    - Secondaries: Hex #1e4220, Hex #f7d064
- Font Preferences:
    - Primary: Georgia Regular and Bold
    - Secondary: Archivo

## Astro-Specific Patterns
- Use Astro's built-in features for SSG wherever possible
- For dynamic data, use Astro's data fetching in the frontmatter
- Components that need interactivity should use Astro's client directives:
  ```astro
  <InteractiveComponent client:load />
  <LazyComponent client:visible />
  ```
- Prefer `.astro` components over React components when interactivity isn't needed

## React Component Guidelines
- Keep React components small and focused
- Use TypeScript interfaces for props
- Use React hooks appropriately (useState, useEffect, etc.)
- For component state management, prefer React Context for global state

## API Integration
- Place API calls in separate utility files when possible
- Use TypeScript interfaces to define API response types
- Handle loading and error states gracefully

## Performance Considerations
- Optimize images using Astro's built-in image optimization
- Use client:visible or client:idle for non-critical React components
- Avoid large JavaScript libraries that might impact performance

## Accessibility Standards
- Ensure proper semantic HTML throughout the application
- Maintain WCAG 2.1 AA compliance
- Use appropriate aria attributes where necessary
- Ensure proper keyboard navigation

## When Writing Code
1. Follow the existing patterns in the codebase
2. Prefer functional components over class components
3. Use TypeScript for type safety
4. Comment complex logic
5. Use descriptive variable and function names

These instructions should help guide your suggestions to be consistent with the project's patterns and best practices.