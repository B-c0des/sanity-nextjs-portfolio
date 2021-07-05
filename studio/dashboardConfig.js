export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '60e26dcad44d37d534f57b02',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-portfolio-studio-3n3f2t7x',
                  apiId: '67553e50-1cc2-43fe-86ac-5ecd37c6b96b'
                },
                {
                  buildHookId: '60e26dc9b8c8791688aad15b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-portfolio-web',
                  apiId: '612c9034-5a45-4bc8-9373-8b4bd440b3f6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/B-c0des/sanity-nextjs-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-portfolio-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
