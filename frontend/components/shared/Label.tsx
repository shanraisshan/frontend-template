'use client';

import React, { ReactNode } from 'react';
import { Text } from '@chakra-ui/react';

interface LabelProps {
  children: ReactNode;
}

/**
 * Label component - Displays centered, large, semibold text
 * Used for page titles and prominent text displays
 */
export default function Label({ children }: LabelProps) {
  return (
    <Text fontSize="2xl" fontWeight="semibold" textAlign="center">
      {children}
    </Text>
  );
}
