import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'map',
  title: 'Map',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'content',
      title: 'Contenu',
      type: 'array',
      of: [
        defineField({
          name: 'pagesMenu',
          title: 'Menu de pages',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'string',
            }),
            defineField({
              name: 'pages',
              title: 'Page',
              type: 'array',
              of: [{type: 'pageReference'}],
            }),
          ],
        }),
        defineField({
          name: 'painsMenu',
          title: 'Menu de douleurs',
          type: 'object',
          description: 'Toutes les douleurs sont affichées dans le menu',
          fields: [
            defineField({
              name: 'description',
              title: 'Description',
              type: 'string',
            }),
          ],
        }),
        defineField({
          name: 'resources',
          title: 'Ressource',
          type: 'object',
          fields: [
            defineField({
              name: 'resource',
              type: 'string',
              options: {
                list: ['Annuaire', 'Exercices', 'Glossaire', 'Médias'],
              },
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'string',
            }),
          ],
        }),
      ],
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
