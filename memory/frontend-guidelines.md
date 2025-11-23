# Frontend Development Guidelines
# Frontend Template Application

**Last Updated**: 2025-11-23
**Status**: Active
**Applies To**: All frontend development in `frontend/`
**Project**: Modern Frontend Template with Next.js, TypeScript, and Chakra UI

## Overview

This document defines the frontend development standards, UI patterns, and component architecture for this frontend template application. This is a foundational template designed to kickstart any modern web application with best practices and reusable components.

## Table of Contents

1. [Technology Stack](#technology-stack)
2. [Project Structure](#project-structure)
3. [Component Architecture](#component-architecture)
4. [UI Layout Specifications](#ui-layout-specifications)
5. [Styling Standards](#styling-standards)
6. [State Management](#state-management)
7. [Best Practices](#best-practices)

---

## Technology Stack

### Core Technologies
- **Framework**: Next.js 16+ (App Router)
- **Language**: TypeScript (strict mode)
- **UI Library**: Chakra UI v3
- **Styling**: Tailwind CSS (supplementary)
- **Icons**: Chakra UI icons (or your choice)

### Key Dependencies
```json
{
  "@chakra-ui/react": "^3.30.0",
  "@chakra-ui/next-js": "^2.4.2",
  "@emotion/react": "^11.14.0",
  "@emotion/styled": "^11.14.1",
  "framer-motion": "^12.23.24",
  "next": "16.0.3",
  "react": "19.2.0",
  "typescript": "^5"
}
```

### When to Use What

**Chakra UI** - Use for:
- All interactive components
- Layout components (Box, Flex, Grid)
- Form elements
- Buttons and inputs
- Modals and menus

**TypeScript** - Required for:
- All new code (no JavaScript allowed)
- Strict type checking enabled
- Props interfaces for all components

---

## Project Structure

```
frontend/
├── app/
│   ├── layout.tsx           # Root layout with ChakraProvider
│   ├── providers.tsx        # Chakra UI provider setup
│   ├── page.tsx            # Home page
│   ├── feature/
│   │   └── page.tsx        # Feature page (main workspace)
│   ├── settings/
│   │   └── page.tsx        # Settings page
│   ├── context/            # React context providers
│   │   └── SidebarContext.tsx
│   ├── RootLayoutClient.tsx # Client-side root layout wrapper
│   ├── icon.tsx            # App icon
│   └── globals.css         # Global styles
│
├── components/
│   ├── shared/             # ⭐ Shared components (reusable across app)
│   │   ├── ButtonAI.tsx            # Primary action button
│   │   ├── ButtonAI-Usage.md       # Usage tracking
│   │   ├── HamburgerMenu.tsx       # Navigation toggle button
│   │   ├── HamburgerMenu-Usage.md  # Usage tracking
│   │   ├── Sidebar.tsx             # Navigation sidebar
│   │   └── Sidebar-Usage.md        # Usage tracking
│   └── GlobalHeader.tsx    # Global navigation header
│
├── lib/                    # Utility functions and types
│   └── types.ts           # TypeScript types
│
└── public/                # Static assets

```

---

## Component Architecture

### Component Naming Conventions
- PascalCase for component files: `MyComponent.tsx`
- Descriptive names: `UserProfile` not `Profile1`
- `AI` suffix for shared components: `ButtonAI`, `InputAI`

### Shared Components Structure

All shared components MUST:
1. Be placed in `frontend/components/shared/`
2. Have a corresponding `-Usage.md` file
3. Use TypeScript with proper interfaces
4. Use Chakra UI components
5. Include JSDoc documentation

#### Current Shared Components

**ButtonAI** (`components/shared/ButtonAI.tsx`)
- **Purpose**: Primary action button with consistent styling
- **Usage Tracking**: `components/shared/ButtonAI-Usage.md`
- **Props**: Extends Chakra UI ButtonProps
- **Features**:
  - Blue colorScheme
  - Large size by default
  - Custom padding and typography
  - 4xl font size, bold weight

**Example**:
```tsx
import ButtonAI from '@/components/shared/ButtonAI';

<ButtonAI onClick={handleAction}>Click Me</ButtonAI>
<ButtonAI isLoading>Processing...</ButtonAI>
```

**HamburgerMenu** (`components/shared/HamburgerMenu.tsx`)
- **Purpose**: Animated hamburger/close icon for sidebar navigation
- **Usage Tracking**: `components/shared/HamburgerMenu-Usage.md`
- **Props**: `isOpen: boolean`, `onClick: () => void`
- **Features**:
  - Green background (green.500)
  - 48px × 48px square with sharp corners (borderRadius: 0)
  - Animated icon transition (≡ ↔ ×)
  - Rotation animation on toggle
  - Hover/active states

**Example**:
```tsx
import HamburgerMenu from '@/components/shared/HamburgerMenu';

<HamburgerMenu isOpen={isSidebarOpen} onClick={toggleSidebar} />
```

**Sidebar** (`components/shared/Sidebar.tsx`)
- **Purpose**: Global navigation sidebar with route links
- **Usage Tracking**: `components/shared/Sidebar-Usage.md`
- **Props**: `isOpen: boolean`, `onClose: () => void`
- **Features**:
  - Slides in from left (250px width)
  - Backdrop overlay
  - Active route highlighting (blue left border)
  - Smooth transitions (0.3s ease)
  - Uses Next.js Link and usePathname

**Example**:
```tsx
import Sidebar from '@/components/shared/Sidebar';

<Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
```

### Component Usage Tracking (CRITICAL)

**All shared components MUST have usage tracking files** to maintain visibility of where components are used.

**Location**: `frontend/components/shared/{Component}-Usage.md`

**Requirements**:

1. **When Using a Shared Component**:
   - ✅ ALWAYS update the corresponding `{Component}-Usage.md` file
   - ✅ Add the file path where it's used
   - ✅ Update "Last Updated" date

2. **When Creating a NEW Shared Component**:
   - ✅ Create the component in `frontend/components/shared/`
   - ✅ CREATE the usage file immediately: `{Component}-Usage.md`
   - ✅ Document the first usage location

3. **Usage File Structure**:
```markdown
# {ComponentName} Usage

**Last Updated**: YYYY-MM-DD

This component is used in:
- `app/page.tsx` - Description of usage
- `app/feature/page.tsx` - Description of usage

## Component Features
- Feature 1
- Feature 2
```

**Tracked Shared Components**:
- `shared/ButtonAI-Usage.md` - Primary action button
- `shared/HamburgerMenu-Usage.md` - Navigation toggle button
- `shared/Sidebar-Usage.md` - Global navigation sidebar

---

## UI Layout Specifications

### Global Layout Pattern

All pages share a consistent layout with optional sidebar navigation:

```tsx
<Flex direction="column" h="100vh">
  {/* Optional Global Header with Hamburger Menu */}
  <GlobalHeader />

  {/* Main Content Area */}
  <Box flex={1}>
    {/* Page-specific content */}
  </Box>
</Flex>
```

### Navigation System

**Sidebar Navigation**:
- Slides in from left (250px width)
- Backdrop overlay on mobile
- Active route highlighting
- Smooth transitions
- Accessible keyboard navigation

**Hamburger Menu Button**:
- Fixed position (top-left or header)
- Green background
- 48×48px square
- Animated icon states

---

## Styling Standards

### Color Palette

**Primary Colors**:
- Primary Blue: `#0969da` (Buttons, active states)
- Primary Hover: `#0860ca`
- Green: `#48bb78` (HamburgerMenu, success states)

**Backgrounds**:
- White: `#ffffff` (Pages, cards)
- Light Gray: `#f6f8fa` (Alternate backgrounds)
- Dark Gray: `#24292f` (Text, headers)

**Borders**:
- Default: `#d0d7de`

**Text Colors**:
- Primary: `#24292f`
- Secondary: `#57606a`
- Link: `#0969da`

### Typography

**UI Text**:
- Body: 14px regular
- Buttons: 16px semibold (ButtonAI uses 4xl bold)
- Labels: 12px regular
- Headings: Use Chakra's heading sizes

### Spacing

Follow Chakra's spacing scale:
- `2` = 0.5rem (8px)
- `4` = 1rem (16px)
- `6` = 1.5rem (24px)
- `8` = 2rem (32px)

### Responsive Design

- Desktop-first approach
- Mobile-friendly sidebar navigation
- Responsive Chakra components
- Use Chakra's responsive props: `{ base: 'value', md: 'value' }`

---

## State Management

### Application State Patterns

**Use React useState for**:
- UI state (sidebar open/closed, modals)
- Form inputs
- Local component state

**Use useContext for**:
- Global sidebar state (SidebarContext)
- Theme preferences
- User authentication state

**Use useRef for**:
- DOM element references
- Mutable values that don't trigger re-renders

**Use useCallback for**:
- Event handlers passed to child components
- Memoized functions

### Example State Patterns

**Sidebar State (Context)**:
```typescript
// context/SidebarContext.tsx
const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}
```

---

## Best Practices

### Component Development

✅ **DO**:
- Use shared components (`ButtonAI`, `Sidebar`, etc.) for consistency
- Use TypeScript with proper types
- Keep components small and focused
- Update usage tracking files
- Use Chakra UI components
- Handle loading and error states
- Write clean, self-documenting code

❌ **DON'T**:
- Create custom buttons when `ButtonAI` exists
- Skip TypeScript types
- Use inline styles (use Chakra props)
- Forget to update usage tracking
- Mix different component patterns

### File Organization

**Component Files**:
```tsx
// MyComponent.tsx
'use client'; // If needed

import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

interface MyComponentProps {
  title: string;
  onAction: () => void;
}

/**
 * MyComponent - Brief description
 */
export default function MyComponent({ title, onAction }: MyComponentProps) {
  return (
    <Box>
      {/* Component JSX */}
    </Box>
  );
}
```

### Performance

**Component Optimization**:
- Use `React.memo()` for expensive components
- Use `useCallback()` for event handlers
- Use `useMemo()` for expensive calculations
- Avoid unnecessary re-renders

**Code Splitting**:
- Use dynamic imports for large components
- Lazy load routes when appropriate
- Optimize bundle size

---

## Code Review Checklist

Before committing frontend changes:

**Shared Components**:
- [ ] Uses `ButtonAI` for action buttons
- [ ] Updated component usage tracking files
- [ ] No custom implementations of existing components

**Code Quality**:
- [ ] TypeScript strict mode, no `any` types
- [ ] Proper error handling
- [ ] Consistent styling with Chakra UI
- [ ] Component props properly typed

**UI/UX**:
- [ ] Responsive design tested
- [ ] Accessible components (keyboard navigation, ARIA labels)
- [ ] Consistent with design system
- [ ] Loading and error states handled

**Documentation**:
- [ ] Component usage tracked
- [ ] Complex logic commented
- [ ] README updated if needed

---

## Related Documentation

### Core Documentation

- **Product Requirements**: [PRD.md](../docs/PRD.md) - High-level product overview and references to feature specs
- **README**: [README.md](../README.md)

### Feature Documentation

**IMPORTANT**: Detailed specifications for each feature are maintained in separate feature files:

- **Home Page**: [docs/features/home.feature.md](../docs/features/home.feature.md)
  - Landing page design
  - Navigation behavior
  - Component implementation details

- **Feature Page**: [docs/features/feature.feature.md](../docs/features/feature.feature.md)
  - Main application workspace
  - Core functionality area
  - User interaction patterns

- **Settings Page**: [docs/features/settings.feature.md](../docs/features/settings.feature.md)
  - Configuration options
  - User preferences

**When to Reference Feature Documentation**:
- Before implementing a new page or major feature
- When adding functionality to existing pages
- To understand complete user flows
- To verify technical implementation details

**When to Update Feature Documentation**:
- After adding new page functionality
- When modifying user flows
- After adding new components to a page
- When technical implementation changes significantly

### Shared Components

- [ButtonAI.tsx](../frontend/components/shared/ButtonAI.tsx)
- [ButtonAI-Usage.md](../frontend/components/shared/ButtonAI-Usage.md)
- [HamburgerMenu.tsx](../frontend/components/shared/HamburgerMenu.tsx)
- [HamburgerMenu-Usage.md](../frontend/components/shared/HamburgerMenu-Usage.md)
- [Sidebar.tsx](../frontend/components/shared/Sidebar.tsx)
- [Sidebar-Usage.md](../frontend/components/shared/Sidebar-Usage.md)

---

## Questions or Improvements?

This is a living document. If you have suggestions:
1. Update this file directly
2. Document changes in git commits
3. Discuss major changes with the team

**Maintainers**: Frontend Team
**Review Frequency**: As needed
**Next Review**: TBD
