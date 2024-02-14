import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'typeform',
  title: 'Liens Typeforms',
  type: 'object',
  fields: [
    defineField({
      name: 'directoryTypeform',
      title: 'Typeform Annuaire',
      type: 'url',
    }),
    defineField({
      name: 'mediasTypeform',
      title: 'Typeform Médias',
      type: 'url',
    }),
    defineField({
      name: 'agendaTypeform',
      title: 'Typeform Agenda',
      type: 'url',
    }),
  ],

  preview: {
    prepare() {
      const title = 'Typeforms'
      return {
        title: title,
      }
    },
  },
})
