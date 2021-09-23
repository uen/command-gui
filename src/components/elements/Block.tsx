import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Box,
  Button,
  ChakraProvider,
  Checkbox,
  Grid,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Form, FormProvider } from 'templator';
import { FORM_ELEMENTS } from 'constants/form-elements';
import { TEST_FORM } from 'forms/test-form';
import { Navbar } from 'components/elements/navbar/Navbar';
import { Sidebar } from 'components/elements/Sidebar';
import { Tabs } from 'components/elements/Tabs';
import { THEME } from 'constants/theme';

interface CheckboxCardProps {
  children: ReactNode;
}
export const Block = ({ children }: CheckboxCardProps) => (
  <Box
    p={4}
    // h="100%"
    bg="rgba(0,0,0,.4)"
    borderRadius={4}
    w="100%"
    alignItems="flex-start"
  >
    <VStack
      alignItems="flex-start"
      spacing={4}
      h="100%"
      justifyContent="flex-start"
      w="100%"
    >
      {children}
    </VStack>
  </Box>
);
