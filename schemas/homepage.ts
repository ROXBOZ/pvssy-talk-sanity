import {defineField, defineType} from 'sanity'

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
      name: 'marquee',
      title: 'Marquee',
      type: 'object',
      description: 'Optionel',

      fields: [
        defineField({
          name: 'text',
          title: 'Text',
          type: 'string',
          validation: (Rule) => [
            Rule.max(100).warning('Les messages plus courts sont généralement meilleurs'),
          ],
        }),
        defineField({
          name: 'callToAction',
          title: 'Call to action',
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'string',
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: 'intro',
      title: 'Intro',
      type: 'object',
      fields: [
        defineField({
          name: 'pitch',
          title: 'Pitch',
          type: 'text',
          rows: 2,
          validation: (Rule) => [
            Rule.required().min(10).error('Un titre de min. 10 characters est requis'),
            Rule.max(160).warning('Les titres plus courts sont généralement meilleurs'),
          ],
        }),
        defineField({
          name: 'text',
          title: 'Text',
          type: 'blockContent',
          validation: (Rule) => [Rule.required()],
        }),

        defineField({
          name: 'navigation',
          title: 'Navigation',
          type: 'array',
          of: [
            defineField({
              name: 'page',
              title: 'Page',
              type: 'reference',
              to: [{type: 'page'}],
            }),
          ],
        }),
      ],
    }),
  ],
})
