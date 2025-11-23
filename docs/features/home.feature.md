# Home Page Feature

## Overview
The Home page serves as the landing page for the application. It provides a simple entry point and welcomes users with a clear call-to-action to access the main functionality.

## Route
- **Path**: `/`
- **Component**: `app/page.tsx`

## Layout & Design

### Visual Design
- Full viewport height layout
- Clean, minimal design
- Light gray background (`#f6f8fa`)
- Centered content alignment

### Components
- **Primary CTA Button**: "Generate Image" (customizable)
  - Uses `ButtonAI` shared component
  - Prominently displayed in center of viewport
  - Primary action button styling
  - Blue colorScheme with large size

## Functionality

### Navigation
- **Action**: Click the primary CTA button
- **Behavior**: Navigates user to Feature page (`/feature`)
- **Implementation**: Uses Next.js `useRouter` for client-side navigation

### Current Implementation
```tsx
'use client';

import { Flex } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import ButtonAI from '@/components/shared/ButtonAI';

export default function Home() {
  const router = useRouter();

  const handleGenerateClick = () => {
    router.push('/feature');
  };

  return (
    <Flex
      h="100vh"
      w="100%"
      align="center"
      justify="center"
      bg="#f6f8fa"
    >
      <ButtonAI onClick={handleGenerateClick}>
        Generate Image
      </ButtonAI>
    </Flex>
  );
}
```

## Customization Guide

### Changing the Button Text
Update the ButtonAI children prop:
```tsx
<ButtonAI onClick={handleGenerateClick}>
  Your Custom Text
</ButtonAI>
```

### Adding Additional Content
You can enhance the landing page with more elements:

**Add a Heading**:
```tsx
<Flex direction="column" gap={4} align="center">
  <Heading size="2xl">Welcome to Your App</Heading>
  <Text fontSize="lg" color="gray.600">
    Your tagline or description
  </Text>
  <ButtonAI onClick={handleGenerateClick}>
    Get Started
  </ButtonAI>
</Flex>
```

**Add Multiple CTAs**:
```tsx
<VStack gap={4}>
  <ButtonAI onClick={() => router.push('/feature')}>
    Primary Action
  </ButtonAI>
  <Button variant="outline" onClick={() => router.push('/settings')}>
    Secondary Action
  </Button>
</VStack>
```

**Add Background Image or Gradient**:
```tsx
<Flex
  h="100vh"
  w="100%"
  align="center"
  justify="center"
  bgGradient="linear(to-r, blue.400, purple.500)"
>
  {/* Content */}
</Flex>
```

### Changing the Background Color
Modify the `bg` prop in the Flex component:
```tsx
bg="#f6f8fa"  // Current light gray
bg="white"    // White background
bg="blue.50"  // Light blue
```

### Alternative Navigation Targets
Update the route in the click handler:
```tsx
const handleClick = () => {
  router.push('/your-route');  // Change to your desired route
};
```

## User Flow

### Default Flow
1. User opens the application
2. Lands on Home page with centered CTA button
3. Clicks button to access the Feature page

### Extended Flow (Optional)
1. User opens the application
2. Views welcome message and app description
3. Chooses from multiple action options
4. Navigates to desired page (Feature, Settings, etc.)

## Technical Implementation

### Technology
- **Framework**: Next.js with App Router
- **Styling**: Chakra UI components
- **State**: No local state (stateless landing page)
- **Client Component**: Required for navigation hook

### Shared Components Used
- **ButtonAI**: Primary action button
  - Import: `import ButtonAI from '@/components/shared/ButtonAI'`
  - Usage tracked in: `components/shared/ButtonAI-Usage.md`
  - Props: Extends all Chakra Button props

### Performance Considerations
- Minimal component tree for fast initial load
- No heavy dependencies or data fetching
- Client-side navigation for instant page transitions

## Design Patterns

### Centered Landing Page Pattern
This is a common pattern for simple landing pages:
- Full viewport height
- Vertically and horizontally centered content
- Minimal distractions
- Clear single call-to-action

### Alternative Patterns

**Hero Section Pattern**:
```tsx
<Box>
  <Flex h="100vh" direction="column">
    {/* Navigation Bar */}
    <Box h="60px" borderBottom="1px" borderColor="gray.200">
      {/* Nav content */}
    </Box>

    {/* Hero Section */}
    <Flex flex={1} align="center" justify="center" direction="column">
      <Heading>Welcome</Heading>
      <ButtonAI onClick={handleClick}>Get Started</ButtonAI>
    </Flex>
  </Flex>
</Box>
```

**Split Layout Pattern**:
```tsx
<Flex h="100vh">
  {/* Left: Image or graphic */}
  <Box flex={1} bg="blue.500" />

  {/* Right: Content and CTA */}
  <Flex flex={1} align="center" justify="center">
    <VStack>
      <Heading>Your App Name</Heading>
      <ButtonAI onClick={handleClick}>Get Started</ButtonAI>
    </VStack>
  </Flex>
</Flex>
```

## Accessibility

- Button is keyboard accessible (Tab to focus, Enter to click)
- Uses semantic HTML via Chakra UI
- High contrast between button and background
- Consider adding ARIA labels for screen readers if you add more content

## Future Enhancements

Ideas for extending the Home page:

- [ ] Add welcome message or tagline
- [ ] Include feature highlights or benefits
- [ ] Add authentication (login/signup buttons)
- [ ] Include social proof (testimonials, stats)
- [ ] Add footer with links
- [ ] Implement hero animation or transitions
- [ ] Add demo video or screenshots

## Notes

- Keep the landing page simple and fast-loading
- Focus on a single primary action
- Ensure the CTA is prominent and clear
- Update ButtonAI usage tracking when making changes
- Test navigation flow after modifications
