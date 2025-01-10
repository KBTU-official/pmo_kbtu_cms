// src/collections/Logo.ts
import { CollectionConfig } from 'payload/types';

const Logo: CollectionConfig = {
  slug: 'logo',
  labels: {
    singular: 'Logo',
    plural: 'Logos',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Logo Image',
    },
  ],
};

export default Logo;
