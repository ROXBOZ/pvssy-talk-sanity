import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'profession',
  title: 'Profession',
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
    prepare(selection: {name?: string}) {
      const {name = ''} = selection
      return {
        title: name,
      }
    },
  },
})
