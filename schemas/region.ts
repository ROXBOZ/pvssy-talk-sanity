import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'region',
  title: 'Régions',
  type: 'object',
  fields: [
    defineField({
      name: 'regions',
      title: 'Régions',
      type: 'array',
      of: [
        defineField({
          name: 'region',
          title: 'Région',
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Nom',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
  ],

  preview: {
    prepare() {
      const title = 'Régions'
      return {
        title: title,
      }
    },
  },
})
