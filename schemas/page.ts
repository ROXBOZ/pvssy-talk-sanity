import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/à/g, 'a')
            .replace(/[^\w\s-]/g, '')
            .slice(0, 200)
            .replace(/’/g, '-'),
      },
      description:
        'Modifier le slug peut entraîner des ruptures de lien. Donc, ne le faites que si vous savez ce que vous faites.',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alternativeText',
          type: 'string',
          title: 'Texte alternatif (pour les personnes malvoyantes)',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'subtitle',
      title: 'En-tête',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      validation: (Rule) => Rule.required(),

      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'sectionTitle',
              title: 'Titre de la section',
              type: 'string',
            }),
            defineField({
              name: 'sectionImage',
              title: 'Image de la section',
              type: 'image',
              options: {
                hotspot: true,
              },
              fields: [
                defineField({
                  name: 'alternativeText',
                  type: 'string',
                  title: 'Texte alternatif (pour les personnes malvoyantes)',
                  validation: (Rule) => Rule.required(),
                }),
              ],
            }),
            defineField({
              name: 'sectionContent',
              title: 'Contenu de la section',
              type: 'blockContent',
            }),
          ],
        },
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
