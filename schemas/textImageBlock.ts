import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'textImageBlock',
  title: 'Block de texte avec image',
  icon: () => '🖼️',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => [Rule.required()],
    }),

    defineField({
      name: 'text',
      title: 'Text',
      type: 'blockContent',
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'callToAction',
      title: 'Call to action',
      type: 'object',
      fields: [
        defineField({
          name: 'label',
          title: 'Label',
          type: 'string',
        }),
        defineField({
          name: 'linkType',
          title: 'Type de Lien',
          type: 'string',
          options: {
            list: [
              {title: 'Page', value: 'page'},
              {title: 'Ressource', value: 'ressource'},
            ],
          },
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
      ],
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
          validation: (Rule) => [Rule.required()],
        }),
        defineField({
          name: 'altText',
          title: 'Alt Text',
          type: 'string',
          validation: (Rule) => [Rule.required()],
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
