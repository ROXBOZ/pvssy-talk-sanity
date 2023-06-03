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
      type: 'text',
    }),

    defineField({
      name: 'relatedPain',
      title: 'Douleur(s) concernée(s)',
      type: 'reference',
      to: {type: 'pain'},
    }),
  ],

  preview: {
    select: {
      term: 'term',
      def: 'def',
      relatedPain: 'relatedPain.name',
    },
    prepare(selection) {
      const {term, def, relatedPain} = selection

      const subtitle =
        relatedPain && relatedPain.length > 0 ? `Concerne: ${relatedPain}` : 'Glossaire général'

      return {
        title: term,
        subtitle,
        description: def,
      }
    },
  },
})
