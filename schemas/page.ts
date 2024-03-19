import {defineField, defineType} from 'sanity'

import {seo} from './seo'

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
            .slice(0, 200)
            .replace(/’/g, '-')
            .replace(/à/g, 'a')
            .replace(/é/g, 'e')
            .replace(/è/g, 'e')
            .replace(/ê/g, 'e')
            .replace(/ï/g, 'i')
            .replace(/ü/g, 'u'),
      },
      description:
        'Modifier le slug peut entraîner des ruptures de lien. Donc, ne le faites que si vous savez ce que vous faites.',
    }),
    // defineField({
    //   name: 'isArticle',
    //   title: 'Faire apparaître dans la navigation des articles',
    //   type: 'boolean',
    //   initialValue: false,
    //   description:
    //     'Pour les pages nobles ;) comme l’intro et les guides, mais pas pour les pages boring de type conditions générales',
    // }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'La description sera utilisée dans le menu de BADASS :D',
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
    defineField({
      name: 'seo',
      title: 'Seo',
      type: 'object',
      fields: [...seo],
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
