import {
  type RouteConfig,

  layout,
  index,
  route,
  prefix
} from '@react-router/dev/routes'


export default [
  layout('layouts/sidebar.tsx', [
    index('routes/home.tsx'),

    route('add-contact', 'routes/contacts/add.tsx'),

    ...prefix('contacts/:contactId', [
      index('routes/contacts/contact.tsx'),

      route('edit', 'routes/contacts/edit.tsx'),
      route('destroy', 'routes/contacts/delete.tsx')
    ])
  ]),

  route('about', 'routes/about.tsx')
] satisfies RouteConfig
