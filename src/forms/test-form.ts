export const TEST_FORM = [
  {
    type: 'section',
    label: 'Commit settings',
    children: [
      {
        // Required fields
        type: 'text-input',
        name: 'first_name',
        label: 'Commit message',

        // Additional fields (these are passed to your component and can be anything)
        yourProp: 'A field: ',

        // Validators
        required: true,
        minLength: 2,
        maxLength: 50,
      },
      {
        type: 'text-input',
        name: 'last_name',
        label: 'Last name',

        yourProp: 'Another: ',

        required: true,
      },
    ],
  },
  {
    type: 'section',
    label: 'Flags',
    children: [
      {
        // Required fields
        type: 'text-input',
        name: 'first_name',
        label: 'Commit message',

        // Additional fields (these are passed to your component and can be anything)
        yourProp: 'A field: ',

        // Validators
        required: true,
        minLength: 2,
        maxLength: 50,
      },
      {
        type: 'text-input',
        name: 'last_name',
        label: 'Last name',

        yourProp: 'Another: ',

        required: true,
      },
    ],
  },
  {
    type: 'submit',
    name: 'submit',
  },
];
