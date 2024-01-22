import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pageReference',
  title: 'Page Reference',
  type: 'reference',
  to: [{type: 'page'}],
})
