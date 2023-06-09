import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pain',
  title: 'Douleurs',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nom',
      type: 'string',
    }),
    defineField({
      name: 'test',
      title: 'test',
      type: 'string',
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').replace(/à/g, '\xE0').slice(0, 200),
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
      fields: [
        defineField({
          name: 'def',
          title: 'Définition',
          type: 'blockContent',
        }),
        defineField({
          name: 'schemas',
          title: 'Schémas',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'schemaImage',
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
                      type: 'blockContent',
                      title: 'Texte alternatif (pour les personnes malvoyantes)',
                    }),
                  ],
                }),
              ],
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
  ],

  preview: {
    select: {
      name: 'name',
    },
    prepare(selection: {name: string}) {
      const {name} = selection
      return {
        title: name,
      }
    },
  },
})
