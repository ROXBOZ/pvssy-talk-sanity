import {defineField} from 'sanity'

export const seo = [
  defineField({
    name: 'pageTitle',
    title: 'Page Title',
    type: 'string',
    description: 'Title will appear in search engine results and browser tabs.',
    validation: (Rule) => Rule.max(60).warning('Title should be less than 60 characters'),
  }),
  defineField({
    name: 'metaDescription',
    title: 'Meta Description',
    type: 'text',
    rows: 4,
    description: 'Page summary will appear in search results and social media shares.',
    validation: (Rule) =>
      Rule.max(160).warning('Meta description should be less than 160 characters'),
  }),
]
