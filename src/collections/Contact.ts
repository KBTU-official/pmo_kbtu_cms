import { CollectionConfig } from 'payload/types';

const Contact: CollectionConfig = {
  slug: 'contacts',
  fields: [
    {
      name: 'contacts',
      type: 'array',
      label: 'Contacts',
      fields: [
        {
          type: 'text',
          name: 'contact',
          required: true,
        },
      ],
    },
    {
      name: 'projectManagementOffice',
      type: 'array',
      label: 'Project Management Office',
      fields: [
        {
          type: 'text',
          name: 'office',
          required: true,
        },
      ],
    },
    {
      name: 'email',
      type: 'array',
      label: 'Email',
      fields: [
        {
          type: 'text',
          name: 'emailAddress',
          required: true,
        },
      ],
    },
  ],
};

export default Contact;
