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
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'term',
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/à/g, 'a')
            .replace(/é/g, 'e')
            .slice(0, 200)
            .replace(/’/g, '-'),
      },
      description:
        'partie visible dans l’URL après le "#" lorsqu’on clique sur un terme dans un article',
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
