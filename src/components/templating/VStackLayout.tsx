/* eslint-disable react/react-in-jsx-scope */
import { HStack, VStack } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

export const VStackLayout = ({
  children,
  ...props
}: {
  children: ReactNode;
}) => {
  console.log('i am vstack', props);
  return (
    <VStack align="flex-start" spacing={4} {...props}>
      {children}
    </VStack>
  );
};

// export const FORM_LAYOUT_ELEMENTS = {
//   'h-stack': ({ children, ...props }: { children: ReactNode }) => (
//     <HStack children={children} align="flex-start" spacing={4} {...props} />
//   ),
//   header: ({ label }: ILayoutProps) => (
//     <Text
//       type="error"
//       // color={error ? 'red.500' : 'gray.400'}
//       pt={2}
//       pb={2}
//       fontWeight="bold"
//       fontSize={14}
//     >
//       {label}
//     </Text>
//   ),
// };
