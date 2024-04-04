import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'textImageBlock',
  title: 'TextImageBlock',

  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => [Rule.required()],
    }),

    // defineField({
    //   name: 'color',
    //   title: 'Couleur',
    //   type: 'string',
    //   options: {
    //     list: [
    //       {title: 'Primaire', value: 'primary'},
    //       {title: 'Secondaire', value: 'secondary'},
    //       {title: 'Tertiaire', value: 'tierary'},
    //     ],
    //   },
    //   validation: (Rule) => [Rule.required()],
    // }),

    defineField({
      name: 'text',
      title: 'Text',
      type: 'blockContent',
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'callToAction',
      title: 'Call to action',
      description: 'Terminer le texte par un lien OU ajouter un bouton mais pas les deux.',

      type: 'object',
      fields: [
        defineField({
          name: 'label',
          title: 'Label',
          type: 'string',
        }),
        defineField({
          name: 'link',
          title: 'Link',
          type: 'reference',
          to: [{type: 'page'}],
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
