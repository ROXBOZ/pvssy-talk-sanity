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
              .title('Accueil')
              .id('homepage')
              .child(S.document().schemaType('homepage').documentId('homepage'))
              .icon(() => '🏠'),
            S.documentTypeListItem('page')
              .title('Pages')
              .icon(() => '📄'),
            S.divider(),
            S.documentTypeListItem('pain')
              .title('Douleurs')
              .icon(() => '🔥'),
            S.divider(),
            S.documentTypeListItem('event')
              .title('Agenda')
              .icon(() => '📅'),
            S.documentTypeListItem('directory')
              .title('Annuaire')
              .icon(() => '📒'),
            S.documentTypeListItem('exercise')
              .title('Exercices')
              .icon(() => {
                return '🧘‍♀️'
              }),
            S.documentTypeListItem('glossary')
              .title('Glossaire')
              .icon(() => '📖'),
            S.documentTypeListItem('media')
              .title('Médias')
              .icon(() => '🎙️'),
            S.documentTypeListItem('product')
              .title('Produits')
              .icon(() => '🛍️'),
            S.listItem()
              .title('SEO Ressources')
              .id('seoManager')
              .child(S.document().schemaType('seoManager').documentId('seoManager'))
              .icon(() => '👩‍💻'),
            S.divider(),
            S.listItem()
              .title('Menus')
              .id('menu')
              .child(S.document().schemaType('menu').documentId('menu'))
              .icon(() => '🍑'),

            S.listItem()
              .title('Typeforms')
              .id('typeform')
              .child(S.document().schemaType('typeform').documentId('typeform'))
              .icon(() => '📢'),
            S.listItem()
              .title('Régions')
              .id('region')
              .child(S.document().schemaType('region').documentId('region'))
              .icon(() => '📍'),
            S.listItem()
              .title('Logos')
              .id('partnersLogos')
              .child(S.document().schemaType('partnersLogos').documentId('partnersLogos'))
              .icon(() => '🤝'),
          ]),
    }),
    visionTool(),
    vercelDeployTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
