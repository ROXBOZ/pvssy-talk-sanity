import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dotsZone',
  title: 'Zone "petits pois"',
  type: 'document',
  icon: () => '🔵',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'callToAction',
      title: 'Call To Action',
      type: 'object',
      fields: [
        defineField({
          name: 'label',
          title: 'Label',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'link',
          title: 'Link',
          type: 'reference',
          to: [{type: 'page'}],
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'text',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: `${title}`,
      }
    },
  },
})
