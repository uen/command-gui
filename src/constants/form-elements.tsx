import { CheckboxBlock } from 'components/blocks/CheckboxBlock';
import { ColorPicker } from 'components/elements/ColorPicker';
import { GridLayout } from 'components/elements/GridLayout';
import { MultiInput } from 'components/elements/MultiInput';
import { MultiSelect } from 'components/elements/MultiSelect';
import { Select } from 'components/elements/Select';
import { Switch } from 'components/elements/Switch';
import { SectionLayout } from 'components/templating/SectionLayout';
import { ConditionalInputLayout } from 'components/templating/ConditionalInputLayout';
import { InputElement } from 'components/templating/TextInput';
import { VStackLayout } from 'components/templating/VStackLayout';
import React from 'react';
import { InputBlock } from 'components/blocks/InputBlock';

// eslint-disable-next-line import/prefer-default-export
export const FORM_ELEMENTS = {
  'text-input': InputElement,

  'checkbox-block': CheckboxBlock,
  'input-block': InputBlock,
  select: Select,
  'multi-select': MultiSelect,
  'multi-input': MultiInput,
  switch: Switch,
  'color-picker': ColorPicker,

  submit: () => <input type="submit" />,
};

export const LAYOUT_ELEMENTS = {
  'v-stack': VStackLayout,
  section: SectionLayout,
  'conditional-input': ConditionalInputLayout,

  grid: GridLayout,
};
