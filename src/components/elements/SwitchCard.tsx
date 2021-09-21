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

interface CheckboxCardProps {
  label: string;
  param: string;
  description: string;
}
export const SwitchCard = ({
  label,
  param,
  description,
}: CheckboxCardProps) => (
  <Block>
    <VStack spacing={4} h="100%" justifyContent="center" w="100%">
      <HStack
        justifyContent="space-between"
        w="100%"
        alignItems="center"
        h="100%"
      >
        <InputLabel label={label} description={description} />
        <HStack h="100%" alignItems="center">
          <Button
            bg="rgba(0,0,0,.4)"
            borderRadius={100}
            fontSize={12}
            color="gray.100"
            fontWeight={600}
            _hover={{ backgroundColor: 'rgba(28,111,166,0.1)' }}
          >
            Fail on error
          </Button>
          <Button
            bg="blue.600"
            borderRadius={100}
            px={6}
            fontSize={12}
            color="gray.100"
            fontWeight={600}
          >
            Ignore errors
          </Button>
        </HStack>
      </HStack>
    </VStack>
  </Block>
);
