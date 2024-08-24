import { PlayIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const platformType = defineType({
  name: 'platform',
  title: 'Platform',
  type: 'document',
  icon: PlayIcon,
  fields: [
    defineField({
      name: 'slug',
      type: 'string',
    }),
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
  ],
})
