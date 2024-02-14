import {defineField, defineType} from 'sanity'
// import TimeInput from '../components/TimeInput' // Custom TimeInput component

export default defineType({
  name: 'event',
  title: 'Évènements',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'relatedPain',
      title: 'Douleur(s) concernée(s)',
      type: 'array',
      of: [{type: 'reference', to: {type: 'pain'}}],
    }),

    defineField({
      name: 'eventDuration',
      title: 'Durée',
      type: 'string',
      options: {
        layout: 'radio',
        direction: 'horizontal',
        list: [
          {title: 'Un jour', value: 'oneDay'},
          {title: 'Plusieurs', value: 'manyDays'},
        ],
      },
    }),
    defineField({
      name: 'eventDate',
      title: 'Date',
      type: 'date',
      hidden: ({parent}) => parent?.eventDuration !== 'oneDay',
    }),
    defineField({
      name: 'eventStartTime',
      title: 'Heure de début',
      type: 'string',
      hidden: ({parent}) => parent?.eventDuration !== 'oneDay',
    }),
    defineField({
      name: 'eventEndTime',
      title: 'Heure de fin',
      type: 'string',

      hidden: ({parent}) => parent?.eventDuration !== 'oneDay',
    }),
    defineField({
      name: 'eventStartDate',
      title: 'Date de début',
      type: 'date',

      hidden: ({parent}) => parent?.eventDuration !== 'manyDays',
    }),
    defineField({
      name: 'eventEndDate',
      title: 'Date de fin',
      type: 'date',

      hidden: ({parent}) => parent?.eventDuration !== 'manyDays',
    }),
    defineField({
      name: 'shortDef',
      title: 'En bref',
      type: 'blockContent',
    }),
    defineField({
      name: 'longDef',
      title: 'En détails',
      type: 'blockContent',
    }),
    defineField({
      name: 'organizer',
      title: 'Organisé par',
      type: 'string',
    }),
    defineField({
      name: 'website',
      title: 'Site internet',
      type: 'string',
    }),
    defineField({
      name: 'eventLocation',
      title: 'Emplacement',
      type: 'string',
      options: {
        layout: 'radio',
        direction: 'horizontal',
        list: [
          {title: 'Sur place', value: 'onsite'},
          {title: 'En ligne', value: 'online'},
        ],
      },
    }),
    defineField({
      name: 'address',
      title: 'Adresse',
      type: 'string',
      hidden: ({parent}) => parent?.eventLocation !== 'onsite',
    }),
    defineField({
      name: 'city',
      title: 'Lieu',
      type: 'string',
      hidden: ({parent}) => parent?.eventLocation !== 'onsite',
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
      name: 'zoomLink',
      title: 'Lien réunion',
      type: 'string',
      hidden: ({parent}) => parent?.eventLocation !== 'online',
    }),
    defineField({
      name: 'reservations',
      title: 'Réservations',
      type: 'object',

      fields: [
        defineField({
          name: 'telephone',
          title: 'Téléphone',
          type: 'string',
        }),
        defineField({
          name: 'email',
          title: 'Email',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'eventPrice',
      title: 'Tarif d’entrée/participation',
      type: 'string',
      options: {
        layout: 'radio',
        direction: 'horizontal',
        list: [
          {title: 'Gratuit', value: 'free'},
          {title: 'Payant', value: 'payable'},
        ],
      },
    }),
    defineField({
      name: 'eventPriceType',
      title: 'Type de tarification',
      type: 'string',
      options: {
        layout: 'radio',
        direction: 'horizontal',
        list: [
          {title: 'Fouchette de prix', value: 'fourchette'},
          {title: 'uniquePrice', value: 'uniquePrice'},
        ],
      },
      hidden: ({parent}) => parent?.eventPrice !== 'payable',
    }),
    defineField({
      name: 'uniquePrice',
      title: 'uniquePrice',
      type: 'number',
      hidden: ({parent}) => parent?.eventPriceType !== 'uniquePrice',
    }),
    defineField({
      name: 'minPrice',
      title: 'Prix min.',
      type: 'number',
      hidden: ({parent}) => parent?.eventPriceType !== 'fourchette',
    }),
    defineField({
      name: 'maxPrice',
      title: 'Prix min.',
      type: 'number',
      hidden: ({parent}) => parent?.eventPriceType !== 'fourchette',
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
      const {title} = selection

      return {
        title: title,
      }
    },
  },
})
