import {
  type RouteConfig,
  layout,
  index,
  route
} from '@react-router/dev/routes'


export default [
  layout('layouts/sidebar.tsx', [
    index('routes/home.tsx'),

    route('add-contact', 'routes/add-contact.tsx'),

    route('contacts/:contactId', 'routes/contact.tsx'),
    route('contacts/:contactId/edit', 'routes/edit-contact.tsx'),
    route('contacts/:contactId/destroy', 'routes/destroy-contact.tsx')
  ]),

  route('about', 'routes/about.tsx')
] satisfies RouteConfig
