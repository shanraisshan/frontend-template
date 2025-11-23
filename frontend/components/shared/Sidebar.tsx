'use client';

import React from 'react';
import { Box, VStack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Sidebar navigation menu that slides in from the left
 */
export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Feature', path: '/feature' },
    { name: 'Settings', path: '/settings' },
  ];

  return (
    <>
      {/* Backdrop overlay */}
      {isOpen && (
        <Box
          position="fixed"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="rgba(0, 0, 0, 0.5)"
          zIndex="999"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <Box
        position="fixed"
        top="0"
        left="0"
        bottom="0"
        w="250px"
        bg="#ffffff"
        boxShadow="2px 0 8px rgba(0, 0, 0, 0.1)"
        transform={isOpen ? 'translateX(0)' : 'translateX(-100%)'}
        transition="transform 0.3s ease-in-out"
        zIndex="1000"
        overflowY="auto"
      >
        <VStack align="stretch" gap={0} pt={16}>
          {navItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link key={item.path} href={item.path} onClick={onClose}>
                <Box
                  px={6}
                  py={4}
                  bg={isActive ? '#f6f8fa' : 'transparent'}
                  borderLeft={isActive ? '4px solid #0969da' : '4px solid transparent'}
                  _hover={{
                    bg: '#f6f8fa',
                    cursor: 'pointer',
                  }}
                  transition="all 0.2s"
                >
                  <Text
                    fontSize="md"
                    fontWeight={isActive ? 'semibold' : 'normal'}
                    color={isActive ? '#0969da' : '#24292f'}
                  >
                    {item.name}
                  </Text>
                </Box>
              </Link>
            );
          })}
        </VStack>
      </Box>
    </>
  );
}
