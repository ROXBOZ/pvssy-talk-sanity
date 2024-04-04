import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'partnersLogos',
  title: 'Logos Partenaires',
  type: 'document',
  fields: [
    defineField({
      name: 'partners',
      title: 'Partenaires',
      type: 'array',
      of: [
        defineField({
          name: 'partner',
          title: 'Partenaire',
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Nom',
              type: 'string',
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'string',
            }),
            defineField({
              name: 'logoMono',
              title: 'Logo Monochromatique',
              type: 'image',
              description:
                'Pour que ce soit joli ou survol, faire gaffe que les deux images sont exactement de la même taille, mêmes marges, etc. ',
            }),
            defineField({
              name: 'logoColor',
              title: 'Logo Couleur',
              type: 'image',
            }),
          ],
        }),
      ],
    }),
  ],

  preview: {
    prepare() {
      const title = 'Logos'
      return {
        title: title,
      }
    },
  },
})
