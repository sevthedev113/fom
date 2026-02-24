import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/findout-app/__docusaurus/debug',
    component: ComponentCreator('/findout-app/__docusaurus/debug', '440'),
    exact: true
  },
  {
    path: '/findout-app/__docusaurus/debug/config',
    component: ComponentCreator('/findout-app/__docusaurus/debug/config', '8de'),
    exact: true
  },
  {
    path: '/findout-app/__docusaurus/debug/content',
    component: ComponentCreator('/findout-app/__docusaurus/debug/content', '8d1'),
    exact: true
  },
  {
    path: '/findout-app/__docusaurus/debug/globalData',
    component: ComponentCreator('/findout-app/__docusaurus/debug/globalData', '807'),
    exact: true
  },
  {
    path: '/findout-app/__docusaurus/debug/metadata',
    component: ComponentCreator('/findout-app/__docusaurus/debug/metadata', 'fd4'),
    exact: true
  },
  {
    path: '/findout-app/__docusaurus/debug/registry',
    component: ComponentCreator('/findout-app/__docusaurus/debug/registry', '814'),
    exact: true
  },
  {
    path: '/findout-app/__docusaurus/debug/routes',
    component: ComponentCreator('/findout-app/__docusaurus/debug/routes', 'fb7'),
    exact: true
  },
  {
    path: '/findout-app/docs',
    component: ComponentCreator('/findout-app/docs', 'c08'),
    routes: [
      {
        path: '/findout-app/docs/building-release',
        component: ComponentCreator('/findout-app/docs/building-release', '3cf'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/findout-app/docs/ci-cd',
        component: ComponentCreator('/findout-app/docs/ci-cd', '11a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/findout-app/docs/development-guide',
        component: ComponentCreator('/findout-app/docs/development-guide', '02b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/findout-app/docs/getting-started',
        component: ComponentCreator('/findout-app/docs/getting-started', '095'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/findout-app/docs/intro',
        component: ComponentCreator('/findout-app/docs/intro', '285'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/findout-app/docs/project-architecture',
        component: ComponentCreator('/findout-app/docs/project-architecture', '38a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/findout-app/docs/services-integration',
        component: ComponentCreator('/findout-app/docs/services-integration', 'ffd'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/findout-app/docs/troubleshooting',
        component: ComponentCreator('/findout-app/docs/troubleshooting', '63c'),
        exact: true,
        sidebar: "docs"
      }
    ]
  },
  {
    path: '/findout-app/',
    component: ComponentCreator('/findout-app/', '0b0'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
