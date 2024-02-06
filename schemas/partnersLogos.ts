import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'partnersLogos',
  title: 'Logos Partenaires',
  type: 'document',
  fields: [
    defineField({
      name: 'partners',
      title: 'Partenaires',
      type: 'array',
      of: [
        defineField({
          name: 'partner',
          title: 'Partenaire',
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Nom',
              type: 'string',
            }),
            defineField({
              name: 'logo',
              title: 'Logo',
              type: 'image',
            }),
          ],
        }),
      ],
    }),
  ],

  preview: {
    prepare() {
      const title = 'Logos'
      return {
        title: title,
      }
    },
  },
})
