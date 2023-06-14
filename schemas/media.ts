import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'media',
  title: 'Littérature et médias',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'author',
      title: 'Auteurice(s)',
      type: 'string',
    }),
    defineField({
      name: 'editor',
      title: 'Maison d’édition',
      type: 'string',
    }),
    defineField({
      name: 'year',
      title: 'Année de publication',
      type: 'string',
    }),
    defineField({
      name: 'edition',
      title: 'Édition (1ère, 2ème, etc.)',
      type: 'number',
    }),
    defineField({
      name: 'isFootnote',
      title: 'Lister dans la bibliographie',
      type: 'boolean',
      initialValue: false,
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
          {title: 'Porno éthique et féministes', value: 'porno'},
        ],
      },
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'string',
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
