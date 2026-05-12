// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Концепция',
      items: ['concept/business-requirements', 'concept/boundaries'],
    },
    {
      type: 'category',
      label: 'Сбор требования',
      items: ['concept/requirements-gathering'], 
    },
   {
      type: 'category',
      label: 'Функциональные требования',
      items: ['functional-requirements/use-cases'],
    },
    {
      type: 'category',
      label: 'Нефункциональные требования',
      items: ['non-functional-requirements/nfr'],
    },
  
   {
      type: 'category',
      label: 'BPMN',
      items: ['concept/bpmn'],
    },
   {
      type: 'category',
      label: 'Сценарии',
      items: ['scenarios/use-case', 'scenarios/sequence-diagram'],
    },
   {
      type: 'category',
      label: 'Макет интерфейса',
      items: ['concept/ui-mockup'],
    },
   
    {
      type: 'category',
      label: 'База данных',
      items: ['concept/database'],
    },

    {
      type: 'category',
      label: 'ERD',
      items: ['db/erd'],
    },
   {
      type: 'category',
      label: 'Асинхронное взаимодействие',
      items: ['concept/async-interaction'],
    },
    {
      type: 'category',
      label: 'Платформизация курсового проекта',
      items: ['concept/platformization'],
    },
    
    
  ],
};

export default sidebars;
