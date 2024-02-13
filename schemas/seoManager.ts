import {defineField, defineType} from 'sanity'

import {seo} from './seo'

export default defineType({
  name: 'seoManager',
  title: 'Seo Manager',
  type: 'document',
  fields: [
    defineField({
      name: 'agenda',
      title: 'Agenda',
      type: 'object',
      fields: [...seo],
    }),
    defineField({
      name: 'directory',
      title: 'Annuaire',
      type: 'object',
      fields: [...seo],
    }),
    defineField({
      name: 'exercices',
      title: 'Exercices',
      type: 'object',
      fields: [...seo],
    }),
    defineField({
      name: 'glossary',
      title: 'Glossary',
      description:
        'PS: Gérer le SEO pour l’accueil, les pages et les douleurs directement dans document concerné.',
      type: 'object',
      fields: [...seo],
    }),
    defineField({
      name: 'medias',
      title: 'Médias',
      type: 'object',
      fields: [...seo],
    }),
  ],
  preview: {
    prepare() {
      const title = 'SEO Manager'
      return {
        title: title,
      }
    },
  },
})
