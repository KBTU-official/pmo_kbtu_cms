import { GlobalConfig } from 'payload/types';

const MainPage: GlobalConfig = {
  slug: 'mainpage',
  label: 'Main Page',
  access: {
    read: () => true,
  },
  fields: [
    { // Hero Image
      name: 'hero', 
      type: 'upload',
      relationTo: 'media', // assuming you have a 'media' collection for handling images
      label: 'Hero Image',
    },

    { // Hero Text
      name: 'heroText',
      type: 'text',
      label: 'Hero Text',
      localized: true,
    },

    { // Image Section
      name: 'imageSection',
      type: 'upload',
      relationTo: 'media',
      label: 'Image Section',
    },

    { // About Us
      name: 'aboutUs',
      type: 'array',
      label: 'About Us',
      fields: [
        { // About Us Title
          name: 'title',
          type: 'text',
          label: 'Title Text',
          localized: true,
        },
        { // About Us Image
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
        },
        { // About Us Content
          name: 'content',
          type: 'array',
          label: 'Content Text',
          fields: [
            {
              name: 'text',
              type: 'text',
              label: 'Text',
              localized: true,
            },
          ],
        },
        { // About Us isBodyBulletedList
          name: 'isBodyBulletedList',
          type: 'checkbox',
          label: 'Is Content Displayed as Bulleted List',
          defaultValue: false,
        },
      ],
    },

    { // Direction
      name: 'directions',
      type: 'array',
      label: 'Directions',
      fields: [
        { // Direction Image
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Direction Image',
        },
        { // Direction Text
          name: 'text',
          type: 'text',
          label: 'Direction Text',
          localized: true,
        },
      ],
    },

    { // Partners
      name: 'partners',
      type: 'array',
      label: 'Partners',
      fields: [
        { // Partners Image
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Partner Image',
        },
        { // Partners Text
          name: 'text',
          type: 'text',
          label: 'Partner Text',
        }
      ],
    },
  ],
};

export default MainPage;
