import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'linkCards',
  title: 'Cartes Liens vers pages/ressources',
  type: 'document',
  icon: () => '🗺️',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'cards',
      title: 'Cartes',
      type: 'array',

      of: [
        defineField({
          name: 'card',
          title: 'Card',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Titre',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 4,
            }),
            defineField({
              name: 'figure',
              title: 'Figure',
              type: 'object',
              fields: [
                defineField({
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                }),
                defineField({
                  name: 'altText',
                  title: 'Texte alternatif',
                  type: 'string',
                }),
              ],
            }),
            defineField({
              name: 'linkType',
              title: 'Type de Lien',
              type: 'string',
              options: {
                list: [
                  {title: 'Page', value: 'page'},
                  {title: 'Ressource', value: 'ressource'},
                  {title: 'Typeform', value: 'typeform'},
                ],
              },
            }),
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
            }),
            defineField({
              name: 'linkRef',
              title: 'Link',
              type: 'reference',
              to: [{type: 'page'}],
              hidden: ({parent}) => parent?.linkType !== 'page',
            }),
            defineField({
              name: 'linkRes',
              title: 'Link',
              type: 'string',
              options: {
                list: [
                  {title: 'Exercices', value: 'exercices'},
                  {title: 'Glossaire', value: 'glossaire'},
                  {title: 'Annuaire', value: 'annuaire'},
                  {title: 'Médias', value: 'medias'},
                ],
              },
              hidden: ({parent}) => parent?.linkType !== 'ressource',
            }),
            defineField({
              name: 'linkTypeform',
              title: 'Typeform',
              type: 'reference',
              to: [{type: 'typeformItem'}],
              hidden: ({parent}) => parent?.linkType !== 'typeform',
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: `${title}`,
      }
    },
  },
})
