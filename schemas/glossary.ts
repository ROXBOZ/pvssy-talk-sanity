import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'glossary',
  title: 'Glossaire',
  type: 'document',

  fields: [
    defineField({
      name: 'term',
      title: 'Terme',
      type: 'string',
    }),

    defineField({
      name: 'def',
      title: 'Définition',
      type: 'blockContent',
    }),

    defineField({
      name: 'relatedPain',
      title: 'Douleur(s) concernée(s)',
      type: 'array',
      of: [{type: 'reference', to: {type: 'pain'}}],
    }),
  ],

  preview: {
    select: {
      term: 'term',
    },
    prepare(selection) {
      const {term} = selection

      return {
        title: term,
      }
    },
  },
})
