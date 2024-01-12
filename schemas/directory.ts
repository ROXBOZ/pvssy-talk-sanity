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
          {title: 'Sexologie', value: 'sexology'},
          {title: 'Médical', value: 'medical'},
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
      hidden: ({parent}) => parent?.category !== 'sexology' && parent?.category !== 'medical',
    }),

    defineField({
      name: 'name',
      title: 'Nom',
      type: 'string',
    }),

    defineField({
      name: 'profession',
      title: 'Profession',
      type: 'string',
      hidden: ({parent}) => parent?.category !== 'sexology' && parent?.category !== 'medical',
    }),

    defineField({
      name: 'tagline',
      title: 'Accroche',
      type: 'string',
      hidden: ({parent}) =>
        parent?.category !== 'shop' &&
        parent?.category !== 'association' &&
        parent?.category !== 'website',
    }),

    defineField({
      name: 'addresses',
      title: 'Adresses',
      type: 'array',
      hidden: ({parent}) => parent?.category !== 'shop',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'address',
              title: 'Adresse complète',
              type: 'string',
              placeholder: 'Rue du Lac 20, 1020 Renens',
            },
            {
              name: 'phone',
              title: 'Téléphone',
              type: 'string',
            },
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
