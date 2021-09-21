import { SectionLayout } from 'components/templating/SectionLayout';
import { InputElement } from 'components/templating/TextInput';
import { VStackLayout } from 'components/templating/VStackLayout';

// eslint-disable-next-line import/prefer-default-export
export const FORM_ELEMENTS = {
  'text-input': InputElement,
};

export const LAYOUT_ELEMENTS = {
  'v-stack': VStackLayout,
  section: SectionLayout,
};
