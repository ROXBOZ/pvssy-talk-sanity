import {defineConfig} from 'sanity'
import {schemaTypes} from './schemas'
import {structureTool} from 'sanity/structure'
import {vercelDeployTool} from 'sanity-plugin-vercel-deploy'
import {visionTool} from '@sanity/vision'

export default defineConfig({
  name: 'default',
  title: 'Pvssy-talk',
  projectId: 'jk2z8dh4',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Menus')
              .id('menu')
              .child(S.document().schemaType('menu').documentId('menu')),
            S.divider(),
            S.listItem()
              .title('Accueil')
              .id('homepage')
              .child(S.document().schemaType('homepage').documentId('homepage')),
            S.divider(),
            S.documentTypeListItem('page').title('Pages'),
            S.divider(),
            S.documentTypeListItem('pain').title('Douleurs'),
            S.divider(),
            S.documentTypeListItem('event').title('Agenda'),
            S.documentTypeListItem('directory').title('Annuaire'),
            S.documentTypeListItem('exercise').title('Exercices'),
            S.documentTypeListItem('glossary').title('Glossaire'),
            S.documentTypeListItem('media').title('Médias'),
          ]),
    }),
    visionTool(),
    vercelDeployTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
