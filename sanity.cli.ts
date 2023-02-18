import {defineCliConfig} from 'sanity/cli'
import { datasetKey, projectIdKey } from './lib/constant'



export default defineCliConfig({
  api: {
    projectId: projectIdKey,
    dataset: datasetKey,
  }
})
