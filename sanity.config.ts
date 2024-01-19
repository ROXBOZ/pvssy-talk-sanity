import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {visionTool} from '@sanity/vision'

export default defineConfig({
  name: 'default',
  title: 'Pvssy-talk',
  projectId: 'jk2z8dh4',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Global')
              .id('global')
              .child(S.document().schemaType('global').documentId('global')),
            S.divider(),
            S.documentTypeListItem('page').title('Pages'),
            S.divider(),
            S.documentTypeListItem('events').title('Agenda'),
            S.documentTypeListItem('directory').title('Annuaire'),
            S.documentTypeListItem('exercise').title('Exercices'),
            S.documentTypeListItem('glossary').title('Glossaire'),
            S.documentTypeListItem('media').title('Médias'),
          ]),
    }),
    ,
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
