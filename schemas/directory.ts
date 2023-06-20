import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'directory',
  title: 'Annuaire',
  type: 'document',

  fields: [
    defineField({
      name: 'itemType',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Personne', value: 'person'},
          {title: 'Entité', value: 'entity'},
        ],
      },
      initialValue: 'person',
    }),
    defineField({
      name: 'firstName',
      title: 'Prénom',
      type: 'string',
      hidden: ({parent}) => parent?.itemType !== 'person',
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
      hidden: ({parent}) => parent?.itemType !== 'person',
    }),

    defineField({
      name: 'directoryIntro',
      title: 'Accroche',
      type: 'string',
      hidden: ({parent}) => parent?.itemType !== 'entity',
    }),
    defineField({
      name: 'address',
      title: 'Adresses',
      type: 'array',
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
      name: 'filterPerson',
      title: 'Filtres (Catégories)',
      type: 'string',
      options: {
        list: [
          {title: 'Gynécologue', value: 'gynecologist'},
          {title: 'Sexologue', value: 'sexologist'},
        ],
      },
      initialValue: 'gynecologist',
      hidden: ({parent}) => parent?.itemType !== 'person',
    }),
    defineField({
      name: 'filterEntity',
      title: 'Filtres (Catégories)',
      type: 'string',
      options: {
        list: [
          {title: 'Association', value: 'association'},
          {title: 'Boutique', value: 'shop'},
        ],
      },
      initialValue: 'association',
      hidden: ({parent}) => parent?.itemType !== 'entity',
    }),
  ],

  preview: {
    select: {
      title: 'name',
    },
    prepare(selection) {
      return {...selection}
    },
  },
})
