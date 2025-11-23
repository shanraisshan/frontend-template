'use client';

import { Button, ButtonProps } from '@chakra-ui/react';

interface ButtonAIProps extends ButtonProps {
  children: React.ReactNode;
}

export default function ButtonAI({ children, ...props }: ButtonAIProps) {
  return (
    <Button
      colorScheme="blue"
      size="lg"
      fontSize="4xl"
      fontWeight="bold"
      px={6}
      py={6}
      {...props}
    >
      {children}
    </Button>
  );
}
