import { defineSchema, defineTable } from 'convex/server'

import {
  organizationFields,
  organizationModuleFields,
} from './organizations/validators'

export default defineSchema({
  organizations: defineTable(organizationFields).index('by_slug', ['slug']),

  organizationModules: defineTable(organizationModuleFields)
    .index('by_organization_id', ['organizationId'])
    .index('by_organization_id_and_module_key', [
      'organizationId',
      'moduleKey',
    ]),
})
