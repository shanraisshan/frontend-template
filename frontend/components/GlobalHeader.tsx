'use client';

import React from 'react';
import { Box } from '@chakra-ui/react';
import HamburgerMenu from '@/components/shared/HamburgerMenu';
import { useSidebar } from '@/app/context/SidebarContext';

/**
 * Global hamburger menu button that appears on all pages
 * Floating at top-left corner (0,0)
 */
export default function GlobalHeader() {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      zIndex="100"
    >
      <HamburgerMenu isOpen={isSidebarOpen} onClick={toggleSidebar} />
    </Box>
  );
}
