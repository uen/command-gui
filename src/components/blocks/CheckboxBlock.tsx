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
import { Form, FormProvider, IElementProps } from 'templator';
import { FORM_ELEMENTS } from 'constants/form-elements';
import { TEST_FORM } from 'forms/test-form';
import { Navbar } from 'components/elements/navbar/Navbar';
import { Sidebar } from 'components/elements/Sidebar';
import { Tabs } from 'components/elements/Tabs';
import { THEME } from 'constants/theme';
import { InputLabel } from 'components/InputLabel';
import { Block } from 'components/elements/Block';

import { Input } from '../elements/Input';

interface CheckboxCardProps {
  label: string;
  param: string;
  children?: ReactNode;
  description: string;
}

export const CheckboxBlock = ({
  value,
  ref,
  name,
  error,
  icon,
  max,
  label,
  description,

  helper,
  min,
  inputType,
  children,
  onChange,
  validate,
  disabled,
  required,
}: IElementProps) => (
  <Block>
    <VStack
      alignItems="flex-start"
      spacing={4}
      justifyContent="flex-start"
      w="100%"
    >
      <HStack w="100%" alignItems="flex-start" justifyContent="space-between">
        <InputLabel label={label} description={description} />
        <Checkbox
          value={value}
          onChange={(event) => {
            onChange(event.target.checked);
          }}
          ml={3}
          borderColor="rgba(255, 255, 255, 0.3)"
          mb={5}
          size="lg"
        />
      </HStack>
    </VStack>

    {children && (
      <VStack w="100%" p={0} spacing={2}>
        {children}
      </VStack>
    )}
  </Block>
);
