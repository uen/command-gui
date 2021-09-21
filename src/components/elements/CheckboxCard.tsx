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
import { InputLabel } from 'components/InputLabel';
import { Block } from './Block';
import { Input } from './Input';

interface CheckboxCardProps {
  label: string;
  param: string;
  children?: ReactNode;
  hasInput: boolean;
  description: string;
}
export const CheckboxCard = ({
  label,
  hasInput,
  children,
  param,
  description,
}: CheckboxCardProps) => (
  <Block>
    <VStack
      alignItems="flex-start"
      spacing={4}
      justifyContent="flex-start"
      w="100%"
    >
      <HStack
        justifyContent="space-between"
        w="100%"
        alignItems="flex-start"
        w="100%"
      >
        <InputLabel label={label} description={description} />
        <Checkbox
          ml={3}
          borderColor="rgba(255, 255, 255, 0.3)"
          mb={5}
          size="lg"
        />
      </HStack>
      {hasInput && <Input />}
      {children}
    </VStack>
  </Block>
);
