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
          type: 'blockContent',
          validation: (Rule) => [
            Rule.custom((blocks) => {
              // Check if blocks is defined and it's an array
              if (blocks && Array.isArray(blocks)) {
                // Iterate through each block
                for (const block of blocks) {
                  // Check the length of text in the block
                  if (block.children && block.children[0] && block.children[0].text.length > 100) {
                    return 'Les messages plus courts sont généralement meilleurs'
                  }
                }
              }
              return true // If no validation issue found, return true
            }),
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
