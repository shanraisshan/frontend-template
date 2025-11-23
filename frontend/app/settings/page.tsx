'use client';

import React from 'react';
import { Flex } from '@chakra-ui/react';
import Label from '@/components/shared/Label';

/**
 * Settings page - Simplified placeholder
 */
export default function SettingsPage() {
  return (
    <Flex
      h="100vh"
      w="100%"
      align="center"
      justify="center"
      bg="#f6f8fa"
    >
      <Label>this is settings page</Label>
    </Flex>
  );
}
