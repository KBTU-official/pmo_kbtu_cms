// src/collections/DirectionWithDescription.ts
import { CollectionConfig } from 'payload/types';

const DirectionWithDescription: CollectionConfig = {
  slug: 'direction-with-description',
  labels: {
    singular: 'Direction With Description',
    plural: 'Directions With Descriptions',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Title',
      localized: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Image',
    },
    {
      name: 'body',
      type: 'textarea',
      required: true,
      label: 'Body',
      localized: true,
    },
  ],
};

export default DirectionWithDescription;
