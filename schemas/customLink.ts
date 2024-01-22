import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'customLink',
  title: 'Custom Link',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'isAction',
      title: 'C’est une Action ?',
      type: 'boolean',
      description: 'Si oui, le lien sera affiché comme un bouton',
      validation: (Rule) => Rule.required(),
      initialValue: false,
    }),
  ],

  preview: {
    select: {
      name: 'title',
    },
    prepare(selection: {name?: string}) {
      const {name = ''} = selection
      return {
        title: name,
      }
    },
  },
})
