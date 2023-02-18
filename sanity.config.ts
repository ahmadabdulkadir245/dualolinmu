import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { myTheme } from './theme'
import StudioNavbar from './components/StudioNavbar'
import Logo from './components/Logo'
import { getdefaultDocumentNode } from './structure'
import { datasetKey, projectIdKey } from './lib/constant'


export default defineConfig({
  basePath: '/studio',
  name: 'DAULOLINMU_CONTENT_STUDIO',
  title: 'DAULOLINMU CONTENT STUDIO',
  projectId: projectIdKey,
  dataset: datasetKey,

  plugins: [deskTool(
   { defaultDocumentNode: getdefaultDocumentNode}
  ), visionTool()],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      // logo: Logo,
      // navbar: StudioNavbar
    },
  },
  theme: myTheme
})
