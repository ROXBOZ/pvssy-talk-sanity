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
          name: 'typeform',
          title: 'Typeform',
          type: 'object',
          fields: [
            defineField({
              name: 'typeformName',
              title: 'Typeform Name',
              description: 'Information interne – non modifiable',
              type: 'string',
              readOnly: true,
            }),
            defineField({
              name: 'typeformLink',
              title: 'Lien Typeform ',
              type: 'url',
            }),
          ],
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
