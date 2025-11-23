'use client';

import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

/**
 * Feature page - Simplified placeholder
 */
export default function FeaturePage() {
  return (
    <Flex
      h="100vh"
      w="100%"
      align="center"
      justify="center"
      bg="#f6f8fa"
    >
      <Text fontSize="2xl" fontWeight="semibold">
        this is a feature page
      </Text>
    </Flex>
  );
}
