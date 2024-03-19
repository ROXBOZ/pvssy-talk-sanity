import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'menu',
  title: 'Menu',
  type: 'document',
  fields: [
    defineField({
      name: 'headerMenu',
      title: 'Header Menu de BADASS',
      type: 'array',
      of: [{type: 'map'}, {type: 'pageReference'}, {type: 'customLink'}],
    }),

    defineField({
      name: 'marquee',
      title: 'Bannière',
      type: 'object',
      description: 'Optionel',
      fields: [
        defineField({
          name: 'text',
          title: 'Text',
          type: 'string',
          validation: (Rule) => [
            Rule.max(100).warning('Les messages plus courts sont généralement meilleurs'),
          ],
        }),

        defineField({
          name: 'callToAction',
          title: 'Call to action',
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'footerMenu',
      title: 'Footer Menu',
      type: 'array',
      of: [{type: 'pageReference'}, {type: 'customLink'}],
    }),
  ],

  preview: {
    select: {
      name: 'title',
    },
    prepare(selection: {name?: string}) {
      const {name = ''} = selection
      return {
        title: name,
      }
    },
  },
})
