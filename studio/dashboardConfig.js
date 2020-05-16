export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec03e9b5ae70a47958599b8',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-k7civ4ai',
                  apiId: '5c6ac2a4-1221-4713-b243-78380379d1d3'
                },
                {
                  buildHookId: '5ec03e9b5ae70a47958599b9',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ukq7x8hm',
                  apiId: '2940e004-63c9-4517-b0db-4ea496e63c75'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thomaspaillot/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ukq7x8hm.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
