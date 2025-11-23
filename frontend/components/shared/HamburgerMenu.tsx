'use client';

import React from 'react';
import { IconButton } from '@chakra-ui/react';

interface HamburgerMenuProps {
  isOpen: boolean;
  onClick: () => void;
}

/**
 * Hamburger menu icon button that toggles sidebar
 * Green background with animated icon
 */
export default function HamburgerMenu({ isOpen, onClick }: HamburgerMenuProps) {
  return (
    <IconButton
      aria-label="Toggle menu"
      onClick={onClick}
      variant="solid"
      size="md"
      bg="green.500"
      color="white"
      _hover={{ bg: 'green.600' }}
      _active={{ bg: 'green.700' }}
      borderRadius="0"
      transition="all 0.3s ease"
      width="48px"
      height="48px"
      minWidth="48px"
      minHeight="48px"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transition: 'transform 0.3s ease',
          transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
        }}
      >
        {isOpen ? (
          // X icon when open (animated)
          <>
            <path
              d="M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                animation: 'fadeIn 0.3s ease',
              }}
            />
            <path
              d="M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                animation: 'fadeIn 0.3s ease',
              }}
            />
          </>
        ) : (
          // Hamburger icon when closed (animated)
          <>
            <path
              d="M3 12H21"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                animation: 'slideIn 0.3s ease',
              }}
            />
            <path
              d="M3 6H21"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                animation: 'slideIn 0.3s ease 0.1s',
              }}
            />
            <path
              d="M3 18H21"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                animation: 'slideIn 0.3s ease 0.2s',
              }}
            />
          </>
        )}
      </svg>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </IconButton>
  );
}
