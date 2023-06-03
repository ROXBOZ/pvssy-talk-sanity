import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pain',
  title: 'Douleurs',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nom',
      type: 'string',
    }),
  ],

  preview: {
    select: {
      name: 'name',
    },
    prepare(selection) {
      const {name} = selection
      return {
        title: name,
      }
    },
  },
})
