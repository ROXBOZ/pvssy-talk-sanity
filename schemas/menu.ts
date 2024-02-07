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
