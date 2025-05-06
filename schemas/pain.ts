import {defineField, defineType} from 'sanity'

import {seo} from './seo'

export default defineType({
  name: 'pain',
  title: 'Douleurs',
  type: 'document',
  groups: [
    {
      title: 'Médical',
      name: 'medical',
    },
    {
      title: 'Sexo',
      name: 'sexo',
    },
    {
      title: 'SEO',
      name: 'seo',
    },
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Nom',
      type: 'string',
    }),

    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/à/g, 'a')
            .replace(/é/g, 'e')
            .slice(0, 200)
            .replace(/’/g, '-'),
      },
    }),

    defineField({
      name: 'filters',
      title: 'Filtres (Où as-tu mal ?)',
      type: 'array',

      of: [
        {
          type: 'string',
          options: {
            list: [
              {title: 'Vulve', value: 'vulve'},
              {title: 'Vagin', value: 'vagin'},
              {title: 'Utérus', value: 'utérus'},
              {title: 'Règles', value: 'règles'},
            ],
          },
        },
      ],
    }),
    defineField({
      name: 'mainImage',
      title: 'Image de couverture',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'medicalApproach',
      title: 'Approche médicale',
      type: 'object',
      group: 'medical',

      fields: [
        defineField({
          name: 'def',
          title: 'Définition',
          type: 'blockContent',
        }),
        defineField({
          name: 'diagrams',
          title: 'Schémas',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'diagram',
                  title: 'Schéma',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                  fields: [
                    defineField({
                      name: 'caption',
                      type: 'string',
                      title: 'Légende',
                    }),
                    defineField({
                      name: 'alternativeText',
                      type: 'string',
                      title: 'Texte alternatif (pour les personnes malvoyantes)',
                      validation: (Rule) => Rule.required(),
                    }),
                  ],
                }),
              ],
              preview: {
                select: {
                  caption: 'diagram.caption',
                  media: 'diagram',
                },
                prepare(selection) {
                  const {caption, media} = selection
                  return {
                    title: caption || 'Untitled Diagram',
                    media,
                  }
                },
              },
            },
          ],
        }),
        defineField({
          name: 'diag',
          title: 'Diagnostic',
          type: 'blockContent',
        }),
        defineField({
          name: 'sympt',
          title: 'Symptômes',
          type: 'blockContent',
        }),
        defineField({
          name: 'why',
          title: 'Pourquoi ça m’arrive ?',
          type: 'blockContent',
        }),
        defineField({
          name: 'auto',
          title: 'Que puis-je faire solo ?',
          type: 'blockContent',
        }),
        defineField({
          name: 'pros',
          title: 'Qui consulter ?',
          type: 'blockContent',
        }),
      ],
    }),
    defineField({
      name: 'sexologicApproach',
      title: 'Approche sexologique',
      group: 'sexo',
      type: 'object',
      fields: [
        defineField({
          name: 'body',
          title: 'Moi et mon corps',
          type: 'blockContent',
        }),
        defineField({
          name: 'norms',
          title: 'Normes genrées',
          type: 'blockContent',
        }),
        defineField({
          name: 'everydayLife',
          title: 'Vie quotidienne',
          type: 'blockContent',
        }),
        defineField({
          name: 'libido',
          title: 'Libido',
          type: 'blockContent',
        }),
        defineField({
          name: 'charge',
          title: 'Charge mentale et communication',
          type: 'blockContent',
        }),
        defineField({
          name: 'consent',
          title: 'Sexe et consentement',
          type: 'blockContent',
        }),
        defineField({
          name: 'mental',
          title: 'Santé mentale',
          type: 'blockContent',
        }),
        defineField({
          name: 'parenthood',
          title: 'Parentalité',
          type: 'blockContent',
        }),
        defineField({
          name: 'checkup',
          title: 'Avec les pros de la santé',
          type: 'blockContent',
        }),
        defineField({
          name: 'treatments',
          title: 'Quels soins pour me soulager ?',
          type: 'blockContent',
        }),
        defineField({
          name: 'pleasure',
          title: 'Plaisir / anti-douleur',
          type: 'blockContent',
        }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'Seo',
      type: 'object',
      group: 'seo',
      fields: [...seo],
    }),
  ],

  preview: {
    select: {
      name: 'name',
    },
    prepare(selection: {name?: string}) {
      const {name = ''} = selection
      return {
        title: name,
      }
    },
  },
})
