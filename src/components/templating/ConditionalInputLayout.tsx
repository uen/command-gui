/* eslint-disable react/react-in-jsx-scope */
import { Box, HStack, Heading, Text, VStack } from '@chakra-ui/react';
import { CheckboxBlock } from 'components/blocks/CheckboxBlock';
import React, { ReactNode, useEffect, useState } from 'react';

interface IConditionalInputLayout {
  linksTo: string[];
  values: Record<string, string>;
  children: ReactNode;
  linkedTo: string[];
  description: string;
}

export const ConditionalInputLayout = ({
  label,
  children,
  values,
  linkedTo,
  setValues,
  description,
  ...props
}: IConditionalInputLayout) => {
  console.log('children', children);
  const [previousValues, setPreviousValues] = useState<Record<string, string>>(
    {}
  );
  function handleChange(checked: boolean) {
    setIsVisible(checked);

    console.log(checked);
    if (!checked) {
      console.log('set values', setValues);
      console.log('values', values);

      setPreviousValues(
        Object.fromEntries(
          Object.entries(values).filter(([key]) => linkedTo.includes(key))
        )
      );

      if (setValues)
        setValues({
          ...values,
          ...linkedTo.reduce<Object>((object, current) => {
            return { ...object, [current]: undefined };
          }, {}),
        });
    } else {
      console.log('setting prev values', previousValues);
      setValues({ ...values, ...previousValues });
    }
  }
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    linkedTo.map((link: string) => {
      // Find input in values, if so set visible
      if (values[link]) {
        setIsVisible(true);
      }
      console.log(values);
      console.log(link);
    });
  }, []);
  return (
    <CheckboxBlock
      label={label}
      description={description}
      onChange={handleChange}
    >
      {isVisible && children}
    </CheckboxBlock>
  );
};
