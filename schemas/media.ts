import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'media',
  title: 'Littérature et médias',
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
    // defineField({
    //   name: 'edition',
    //   title: 'Édition (1ère, 2ème, etc.)',
    //   type: 'number',
    // }),
    // defineField({
    //   name: 'isFootnote',
    //   title: 'Lister dans la bibliographie',
    //   type: 'boolean',
    //   initialValue: false,
    // }),

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
      name: 'url',
      title: 'URL - si disponible online (pas de site de vente)',
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
