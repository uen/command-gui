import React, { ReactNode } from 'react';
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
  label: ReactNode;
  description: string;
}
export const InputLabel = ({ description, label }: CheckboxCardProps) => (
  <VStack justifyContent="flex-start" alignItems="flex-start" spacing={1}>
    <Text fontSize={14} color="white" fontWeight="bold">
      {label}
    </Text>
    {description && (
      <Text fontSize={12} color="white">
        {description}
      </Text>
    )}
  </VStack>
);
