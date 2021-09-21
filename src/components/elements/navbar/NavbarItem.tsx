import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Box, HStack } from '@chakra-ui/react';
import { Link } from './Link';
import { Icon } from './Icon';

interface NavbarButtonProps {
  href?: string;
  icon?: IconProp;
  children?: string;
  disabled?: boolean;
}

export function NavbarButton({
  children,
  disabled,
  href,
  icon,
}: NavbarButtonProps) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    setIsActive(
      `/${location.pathname.replace(/(\/[^/]*).*/, '$1').substr(1)}` === href
    );
  }, [location.pathname, href]);

  return (
    <Link
      px={5}
      h="100%"
      alignItems="center"
      display="flex"
      backgroundColor={isActive ? 'rgba(0,0,0,.2)' : undefined}
      textDecor="none"
      _hover={{ textDecor: 'none', backgroundColor: 'rgba(0,0,0,.1)' }}
      to={href}
      fontSize="sm"
      color="white"
      fontWeight={400}
    >
      <HStack spacing={2}>
        {icon ? <Icon icon={icon} /> : null}
        <Box key={href}>{children}</Box>
      </HStack>
    </Link>
  );
}
