import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'typeform',
  title: 'Liens Typeforms',
  type: 'object',
  fields: [
    defineField({
      name: 'typeforms',
      title: 'Typeforms',
      type: 'array',
      of: [
        defineField({
          name: 'typeformItem',
          title: 'Typeform',
          type: 'reference',
          to: [{type: 'typeformItem'}],
        }),
      ],
    }),
  ],

  preview: {
    prepare() {
      const title = 'Typeforms'
      return {
        title: title,
      }
    },
  },
})
