import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import { payloadCloud } from '@payloadcms/plugin-cloud';
import BeforeDashboard from './components/BeforeDashboard';
import Contact from './collections/Contact';
import DirectionWithDescription from './collections/DirectionWithDescription';
import Hero from './collections/Hero';
import LaboratoryWithDescription from './collections/LaboratoryWithDescription';
import Logo from './collections/Logo';
import Media from './collections/Media';
import MainPage from './global/MainPage';

export default buildConfig({
  routes: {
    api: '/api2', // Set API route prefix to /api2
    admin: '/cms/admin',
  },
  serverURL: "https://pmo.kbtu.kz",
  admin: {
    user: Users.slug,
    components: {
      // The BeforeDashboard component renders the 'welcome' block that you see after logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below and the import BeforeDashboard statement on line 5.
      beforeDashboard: [BeforeDashboard],
    }
  },
  collections: [
    Users,
    Contact,
    DirectionWithDescription,
    Hero,
    LaboratoryWithDescription,
    Logo,
    Media
  ],
  globals: [
    MainPage
  ],
  localization: {
    locales: ['en', 'kz', 'rus'],
    defaultLocale: 'rus',
    fallback: true,
  },
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [
    payloadCloud()
  ]
});
