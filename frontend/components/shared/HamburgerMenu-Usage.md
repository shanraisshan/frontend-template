# HamburgerMenu Usage

**Last Updated**: 2025-11-23

This component is used in:
- `components/GlobalHeader.tsx` - Global navigation toggle for sidebar (appears on all pages)

## Component Features
- Hamburger icon (3 horizontal lines) when closed
- X icon when open
- Green background (green.500, green.600 on hover, green.700 when active)
- 48×48px square with sharp corners (borderRadius: 0)
- Animated icon transition with 90° rotation
- Smooth transitions (0.3s ease)
- Animates position from left: 0 to left: 250px when sidebar opens (via GlobalHeader)
- Positioned at right edge of sidebar when open, returns to (0, 0) when closed
- Size: md (medium)
