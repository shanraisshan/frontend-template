'use client';

import React from 'react';
import { Box } from '@chakra-ui/react';
import { SidebarProvider, useSidebar } from './context/SidebarContext';
import Sidebar from '@/components/shared/Sidebar';
import GlobalHeader from '@/components/GlobalHeader';

interface RootLayoutClientProps {
  children: React.ReactNode;
}

/**
 * Client-side root layout component with sidebar and global header
 */
export default function RootLayoutClient({ children }: RootLayoutClientProps) {
  return (
    <SidebarProvider>
      <LayoutWithHeader>{children}</LayoutWithHeader>
    </SidebarProvider>
  );
}

function LayoutWithHeader({ children }: { children: React.ReactNode }) {
  const { isSidebarOpen, closeSidebar } = useSidebar();

  return (
    <>
      {/* Global Hamburger Button - floating at top-left */}
      <GlobalHeader />

      {/* Sidebar Navigation */}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      {/* Main Content - no offset needed, hamburger floats above */}
      {children}
    </>
  );
}
