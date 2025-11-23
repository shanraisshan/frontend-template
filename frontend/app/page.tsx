'use client';

import { Flex } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import ButtonAI from '@/components/shared/ButtonAI';

/**
 * Home page - Landing page
 * Simple centered button that navigates to the feature page
 */
export default function Home() {
  const router = useRouter();

  const handleGenerateClick = () => {
    router.push('/feature');
  };

  return (
    <Flex
      h="100vh"
      w="100%"
      align="center"
      justify="center"
      bg="#f6f8fa"
    >
      <ButtonAI onClick={handleGenerateClick}>
        Move to Feature Page
      </ButtonAI>
    </Flex>
  );
}
