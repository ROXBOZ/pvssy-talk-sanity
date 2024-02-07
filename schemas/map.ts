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
      name: 'type',
      title: 'Type de données',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        layout: 'radio',
        list: ['Douleurs', 'Ressources', 'Pages'],
      },
    }),
    defineField({
      name: 'pages',
      title: 'Pages',
      type: 'array',
      of: [{type: 'pageReference'}],
      hidden: ({parent}) => {
        return parent?.type?.includes('Pages') ? false : true
      },
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
