import { CollectionConfig } from 'payload/types'

const Hero: CollectionConfig = {
  slug: 'hero',
  labels: {
    singular: 'Hero',
    plural: 'Heros',
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
      relationTo: 'media', // assuming you have a 'media' collection for handling file uploads
      required: true,
      label: 'Image',
    },
  ],
}

export default Hero;
