import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  Image,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Container,
  HStack,
  Button,
  VStack,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import React from 'react';

const COMMANDS = ['ls', 'git', 'youtube-dl'];
export function Sidebar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      // bg="#2c2c2c"
      width="280px"
      pt={2}
      backgroundColor="rgba(5,5,5,.2)"
      // borderRight="1px solid rgba(255, 255, 255, 0.2)"
      h="100%"
      backdropFilter="blur(8px)"
    >
      <VStack spacing={0}>
        {COMMANDS.map((command) => {
          const isActive = command === 'git';
          return (
            <Box
              key={command}
              p={2}
              px={4}
              w="100%"
              // backdropFilter={isActive ? 'blur(10px)' : ''}
              bg={isActive ? 'rgba(255, 255, 255, 0.05)' : ''}
              color={isActive ? 'white' : '#797979'}
            >
              {command}
            </Box>
          );
        })}
      </VStack>
    </Box>
  );
}

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Product',
    href: '#product',
  },
  {
    label: 'Features',
    href: '#features',
  },
  {
    label: 'Pricing',
    href: '#pricing',
  },
];
