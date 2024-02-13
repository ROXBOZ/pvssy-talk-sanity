import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'media',
  title: 'Médias',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
    }),
    defineField({
      name: 'author',
      title: 'Auteurice(s)',
      type: 'string',
    }),
    defineField({
      name: 'editor',
      title: 'Maison d’édition / production',
      type: 'string',
    }),
    defineField({
      name: 'year',
      title: 'Année de publication',
      type: 'number',
    }),
    defineField({
      name: 'relatedPain',
      title: 'Douleur(s) concernée(s)',
      type: 'array',
      of: [{type: 'reference', to: {type: 'pain'}}],
    }),
    defineField({
      name: 'filter',
      title: 'Filtres (Catégories)',
      type: 'string',
      options: {
        list: [
          {title: 'Livres/BD', value: 'livres'},
          {title: 'Articles', value: 'articles'},
          {title: 'Podcasts', value: 'podcasts'},
          {title: 'Vidéos/films', value: 'videos'},
          {title: 'Porno éthique et féministe', value: 'porno'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'reference', to: {type: 'tag'}}],
    }),

    defineField({
      name: 'url',
      title: 'URL - si disponible online (pas de site de vente)',
      type: 'string',
    }),
    defineField({
      name: 'isValidated',
      title: 'Validé',
      type: 'boolean',
      initialValue: false,
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {...selection}
    },
  },
})
