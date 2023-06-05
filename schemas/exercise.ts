import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'exercise',
  title: 'Exercices',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
    prepare(selection) {
      return {...selection}
    },
  },
})
