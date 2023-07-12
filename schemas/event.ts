import {defineField, defineType} from 'sanity'
// import TimeInput from '../components/TimeInput' // Custom TimeInput component

export default defineType({
  name: 'events',
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
      name: 'eventDuration',
      title: 'Durée',
      type: 'string',
      options: {
        layout: 'radio',
        direction: 'horizontal',
        list: ['un jour', 'plusieurs jours'],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'eventDate',
      title: 'Date',
      type: 'date',

      validation: (Rule) => Rule.required(),
      hidden: ({parent}) => parent?.eventDuration !== 'un jour',
    }),
    defineField({
      name: 'eventStartTime',
      title: 'Heure de début',
      type: 'string',
      // inputComponent: TimeInput, // Use the custom TimeInput component
      validation: (Rule) => Rule.required(),
      hidden: ({parent}) => parent?.eventDuration !== 'un jour',
    }),
    defineField({
      name: 'eventEndTime',
      title: 'Heure de fin',
      type: 'string',
      // inputComponent: TimeInput, // Use the custom TimeInput component
      validation: (Rule) => Rule.required(),
      hidden: ({parent}) => parent?.eventDuration !== 'un jour',
    }),
    defineField({
      name: 'eventStartDate',
      title: 'Date de début',
      type: 'date',
      validation: (Rule) => Rule.required(),
      hidden: ({parent}) => parent?.eventDuration !== 'plusieurs jours',
    }),
    defineField({
      name: 'eventEndDate',
      title: 'Date de fin',
      type: 'date',
      validation: (Rule) => Rule.required(),
      hidden: ({parent}) => parent?.eventDuration !== 'plusieurs jours',
    }),
    defineField({
      name: 'shortDef',
      title: 'En bref',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required(),
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
        list: ['Sur place', 'En ligne'],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Adresse',
      type: 'string',
      validation: (Rule) => Rule.required(),
      hidden: ({parent}) => parent?.eventLocation !== 'Sur place',
    }),
    defineField({
      name: 'city',
      title: 'Lieu',
      type: 'string',

      validation: (Rule) => Rule.required(),
      hidden: ({parent}) => parent?.eventLocation !== 'Sur place',
    }),
    defineField({
      name: 'region',
      title: 'Canton',
      type: 'string',
      validation: (Rule) => Rule.required(),
      hidden: ({parent}) => parent?.eventLocation !== 'Sur place',
      options: {
        list: ['Genève', 'Vaud', 'Neuchâtel', 'Jura', 'Fribourg', 'Valais'], // Add your region options here
      },
    }),
    defineField({
      name: 'zoomLink',
      title: 'Lien réunion',
      type: 'string',
      validation: (Rule) => Rule.required(),
      hidden: ({parent}) => parent?.eventLocation !== 'En ligne',
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
        list: ['gratuite', 'payante'],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'eventPriceType',
      title: 'Type de tarification',
      type: 'string',
      options: {
        layout: 'radio',
        direction: 'horizontal',
        list: ['fourchette', 'tarif unique'],
      },
      validation: (Rule) => Rule.required(),
      hidden: ({parent}) => parent?.eventPrice !== 'payante',
    }),
    defineField({
      name: 'uniquePrice',
      title: 'Tarif unique',
      type: 'number',
      validation: (Rule) => Rule.required(),
      hidden: ({parent}) => parent?.eventPriceType !== 'tarif unique',
    }),
    defineField({
      name: 'minPrice',
      title: 'Prix min.',
      type: 'number',

      validation: (Rule) => Rule.required(),
      hidden: ({parent}) => parent?.eventPriceType !== 'fourchette',
    }),
    defineField({
      name: 'maxPrice',
      title: 'Prix min.',
      type: 'number',

      validation: (Rule) => Rule.required(),
      hidden: ({parent}) => parent?.eventPriceType !== 'fourchette',
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
