import { Text, Link as ChakraLink, TextProps } from '@chakra-ui/react';
import React from 'react';
import { Link as DomLink } from 'react-router-dom';

export interface ILink extends TextProps {
  to?: string;
  isDisabled?: boolean;
  onClick?: () => void;
}
export function Link({ to, isDisabled, onClick, ...props }: ILink) {
  if (isDisabled || onClick) {
    return (
      <Text
        color="brand.700"
        cursor="pointer"
        onClick={isDisabled ? undefined : onClick}
        {...props}
      />
    );
  }

  // @ts-ignore
  return <ChakraLink to={to} as={DomLink} color="brand.200" {...props} />;
}
