import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'navBlock',
  title: 'NavBlock',
  type: 'object',
  fields: [
    defineField({
      name: 'anchor',
      title: 'Ancre',
      type: 'string',
    }),

    defineField({
      name: 'pitch',
      title: 'Title/Pitch',
      type: 'text',
      rows: 2,
      validation: (Rule) => [
        Rule.required().min(10).error('Un titre de min. 10 characters est requis'),
        Rule.max(160).warning('Les titres plus courts sont généralement meilleurs'),
      ],
    }),

    defineField({
      name: 'text',
      title: 'Text',
      type: 'blockContent',
    }),

    defineField({
      name: 'navigationType',
      title: 'Type de Navigation',
      type: 'string',
      options: {
        list: [
          {title: 'Pages', value: 'pages'},
          {title: 'Se soigner (Annuaire et exercices)', value: 'selfCare'},
          {title: 'S’informer (Glossaire, médias et agenda)', value: 'selfLearning'},
          {
            title: 'Ressources complètes (Annuaire, exercices, glossaire, médias et agenda)',
            value: 'allRessources',
          },
        ],
      },
      initialValue: 'pages',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'navigation',
      title: 'Navigation',
      type: 'array',
      hidden: ({parent}) => parent?.navigationType !== 'pages',
      of: [
        defineField({
          name: 'page',
          title: 'Page',
          type: 'reference',
          to: [{type: 'page'}],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'pitch',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: `${title}`,
      }
    },
  },
})
