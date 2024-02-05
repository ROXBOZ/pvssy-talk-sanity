import './admin.css'

import {defineArrayMember, defineType} from 'sanity'

import React from 'react'

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
      ],
      lists: [{title: 'Liste', value: 'bullet'}],
      marks: {
        decorators: [
          {title: 'Gras', value: 'strong'},
          {title: 'Italique', value: 'em'},
          {title: 'Souligné', value: 'underline'},
          {
            title: 'Logo',
            value: 'logo',
            blockEditor: {
              render: ({children}: any) =>
                React.createElement('span', {className: 'logo'}, children),
              icon: () => '🍑',
            },
          },
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
                validation: (Rule) =>
                  Rule.uri({
                    scheme: ['http', 'https', 'mailto'],
                  }),
              },
            ],
          },
          {
            name: 'internalLink',
            type: 'object',
            title: 'Glossaire',
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [{type: 'glossary'}],
              },
            ],
            blockEditor: {
              icon: () => '📖',
            },
            toPreview: ({reference}: any) => {
              const slug = slugify(reference)
              const currentURL = window.location.href
              return `${currentURL}/glossaire/#${slug}`
            },
          },
        ],
      },
    }),
  ],
})
