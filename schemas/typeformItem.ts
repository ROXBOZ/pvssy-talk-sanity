import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'typeformItem',
  title: 'Typeform',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nom',
      type: 'string',
      description: 'Usage interne',
    }),
    defineField({
      name: 'url',
      title: 'Url',
      type: 'string',
    }),
  ],

  preview: {
    select: {
      title: 'name',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: `${title}`,
      }
    },
  },
})
