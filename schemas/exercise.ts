import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'exercise',
  title: 'Exercices',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
    }),
    defineField({
      name: 'exerciseIntro',
      title: 'Introduction',
      type: 'blockContent',
    }),
    defineField({
      name: 'video',
      title: 'Vidéo URL (YouTube)',
      type: 'string',
    }),
    defineField({
      name: 'steps',
      title: 'Étapes clés',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Titre',
              type: 'string',
            }),
            defineField({
              name: 'stepDescription',
              title: 'Description',
              type: 'blockContent',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'relatedPain',
      title: 'Douleur(s) concernée(s)',
      type: 'array',
      of: [{type: 'reference', to: {type: 'pain'}}],
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
