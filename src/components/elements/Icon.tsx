import React from 'react';
import { Icon as RNIcon, IconProps } from '@chakra-ui/react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface IIconProps extends IconProps {
  icon: IconProp;
  size?: number;
}

export function Icon({ icon, size = 14, ...props }: IIconProps) {
  return <RNIcon icon={icon} as={FontAwesomeIcon} fontSize={size} {...props} />;
}
