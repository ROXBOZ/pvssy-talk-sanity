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
      def: 'def',
      // relatedPain: 'relatedPain->{title}',
    },
    prepare(selection) {
      const {term, def} = selection
      // console.log('relatedPain :', relatedPain)
      // const subtitle = relatedPain ? `Concerne: ${relatedPain}` : 'Glossaire général'

      return {
        title: term,
        // subtitle,
        description: def,
      }
    },
  },
})
