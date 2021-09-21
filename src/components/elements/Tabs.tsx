import {
  Tabs as RNTabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { ReactNode } from 'react';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Icon } from './Icon';

interface ITabsProps {
  tabs: {
    label: string;
    icon: IconProp;
    render: () => ReactNode;
  }[];
}

export function Tabs({ tabs }: ITabsProps) {
  return (
    <>
      <RNTabs colorScheme="brand">
        <TabList
          borderBottomColor="rgba(255, 255, 255, 0.1)"
          borderBottomWidth={1}
        >
          {tabs.map(({ label, icon }) => (
            <Tab
              py={3}
              px={5}
              key={label}
              backgroundColor="rgba(255, 255, 255, 0.01)"
              fontSize={14}
              color="gray.300"
              _hover={{ background: 'transparent' }}
            >
              <Icon mr={4} size={18} icon={icon} />
              {label}
            </Tab>
          ))}
        </TabList>
        <TabPanels mt={0} maxW="100%" overflowX="auto">
          {tabs.map(({ label, render }) => (
            <TabPanel key={label}>{render()}</TabPanel>
          ))}
        </TabPanels>
      </RNTabs>
    </>
  );
}
