import {defineField, defineType} from 'sanity'
interface PreviewValue {
  title: any
  isValidated?: boolean
  media?:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | React.ComponentClass<any>
    | React.FunctionComponent<any>
    | null
    | undefined
}
export default defineType({
  name: 'directory',
  title: 'Annuaire',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          {title: 'Spécialiste', value: 'specialist'},
          {title: 'Shop', value: 'shop'},
          {title: 'Association', value: 'association'},
          {title: 'Plateforme digitale', value: 'website'},
        ],
      },
    }),

    defineField({
      name: 'firstName',
      title: 'Prénom',
      type: 'string',
      hidden: ({parent}) => parent?.category !== 'specialist',
    }),

    defineField({
      name: 'name',
      title: 'Nom',
      type: 'string',
    }),

    defineField({
      name: 'subtitle',
      title: 'Sous-titre',
      type: 'string',
      description: 'Par ex: pour Fondation PROFA ==> Conseil en périnatalité',
    }),

    defineField({
      name: 'profession',
      title: 'Profession',
      type: 'reference',
      to: {type: 'profession'},
      hidden: ({parent}) => parent?.category !== 'specialist',
    }),

    defineField({
      name: 'addresses',
      title: 'Adresses',
      type: 'array',
      hidden: ({parent}) => parent?.category === 'website',

      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'address',
              title: 'Adresse complète',
              type: 'string',
              placeholder: 'Rue du Lac 20, 1020 Renens',
            }),
            defineField({
              name: 'region',
              title: 'Région',
              type: 'string',
              options: {
                list: [
                  {title: 'Genève', value: 'Genève'},
                  {title: 'Vaud', value: 'Vaud'},
                  {title: 'Neuchâtel', value: 'Neuchâtel'},
                  {title: 'Jura', value: 'Jura'},
                  {title: 'Fribourg', value: 'Fribourg'},
                  {title: 'Valais', value: 'Valais'},
                  {title: 'France voisine', value: 'France voisine'},
                ],
              },
            }),
            defineField({
              name: 'isAccessible',
              title: 'Adapté aux personnes à mobilité réduite',
              type: 'boolean',
              initialValue: true,
            }),
            defineField({
              name: 'phoneIndicator',
              title: 'Indicateur Pays',
              type: 'string',
              options: {
                list: [
                  {title: '+41 (Suisse)', value: '0041'},
                  {title: '+33 (France)', value: '0033'},
                ],
              },
            }),
            defineField({
              name: 'phone',
              title: 'Téléphone',
              type: 'string',
            }),
          ],
        },
      ],
    }),

    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),

    defineField({
      name: 'url',
      title: 'Site internet',
      type: 'string',
    }),

    defineField({
      name: 'relatedPain',
      title: 'Douleur(s) concernée(s)',
      type: 'array',
      of: [{type: 'reference', to: {type: 'pain'}}],
    }),

    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'reference', to: {type: 'tag'}}],
    }),

    defineField({
      name: 'pricing',
      title: 'Tarifs de consultation',
      type: 'object',
      hidden: ({parent}) => parent?.category !== 'specialist',
      fields: [
        defineField({
          name: 'pricingMin',
          title: 'Min',
          type: 'number',
        }),
        defineField({
          name: 'pricingMax',
          title: 'Max',
          type: 'number',
        }),
      ],
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
      title: 'name',
      isValidated: 'isValidated',
    },
    prepare({title, isValidated}: PreviewValue) {
      const validationStatus = isValidated ? '' : 'à valider'

      return {
        title,
        subtitle: validationStatus,
      }
    },
  },
})
