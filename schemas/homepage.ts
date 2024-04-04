import {defineField, defineType} from 'sanity'

import {seo} from './seo'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {type: 'navBlock'},
        {type: 'painsBlock'},
        {type: 'textImageBlock'},
        {type: 'linkCards'},
        {type: 'dotsZone'},
      ],
    }),
    defineField({
      name: 'seo',
      title: 'Seo',
      type: 'object',
      fields: [...seo],
    }),
  ],
})
