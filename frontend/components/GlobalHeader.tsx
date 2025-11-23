'use client';

import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import HamburgerMenu from '@/components/shared/HamburgerMenu';
import { useSidebar } from '@/app/context/SidebarContext';

/**
 * Global hamburger menu button that appears on all pages
 * Animates from top-left corner (0,0) to end of sidebar (250px) when open
 */
export default function GlobalHeader() {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const [mounted, setMounted] = useState(false);

  // Ensure component only renders dynamic position after client mount
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Box
      position="fixed"
      top="0"
      left={mounted && isSidebarOpen ? '250px' : '0'}
      zIndex="1001"
      transition="left 0.3s ease-in-out"
    >
      <HamburgerMenu isOpen={isSidebarOpen} onClick={toggleSidebar} />
    </Box>
  );
}
