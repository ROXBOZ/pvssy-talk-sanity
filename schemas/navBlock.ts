import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'navBlock',
  title: 'NavBlock',
  type: 'object',
  fields: [
    defineField({
      name: 'anchor',
      title: 'Ancre',
      type: 'string',
    }),

    defineField({
      name: 'pitch',
      title: 'Title/Pitch',
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
  preview: {
    select: {
      title: 'pitch',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: `${title}`,
      }
    },
  },
})
