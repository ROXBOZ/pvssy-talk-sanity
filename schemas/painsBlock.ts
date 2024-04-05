import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'painsBlock',
  title: 'Cartes Douleurs',
  type: 'document',
  icon: () => '💥',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'blockContent',
    }),
    defineField({
      name: 'note',
      title: 'Note',
      description: 'Message en bas à droite pour boucher le trou',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: `${title}`,
      }
    },
  },
})
