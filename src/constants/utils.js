const headers = [
  { label: 'Animals', name: 'animals' },
  { label: 'Birds', name: 'birds' },
  { label: 'Alphabets', name: 'alphabets' }
];

const headerMenu = [
 c
  {
    label: 'Learning',
    name: 'learning',
    route: '/learning',
    icon: '',
    submenu: [
      {
        label: 'Animals',
        value: 'animals',
        route: '/learning/animals',
        icon: 'camel_0QsFAgwMS-.png'
      },
      {
        label: 'Fruits',
        value: 'fruits',
        route: '/learning/fruits',
        icon: 'red-apple_UOS0EbXIUI.png'
      },
      {
        lacel: 'Vegetables',
        value: 'vegetables',
        route: '/learning/vegetables',
        icon: 'onion_LyqYoWcYhl.png'
      },
      {
        label: 'Countries',
        value: 'countries',
        route: '/learning/countries',
        icon: 'onion_LyqYoWcYhl.png'
      },
       {
        label: 'Vegetables',
        value: 'vegetables',
        route: '/learning/vegetables',
        icon: 'onion_LyqYoWcYhl.png'
      }
    ]
  },
     {
    label: 'Entertainment',
    name: 'entertainment',
    route: '/entertainment',
    icon: '',
    submenu: [
      {
        label: 'Animals',
        value: 'animals',
        route: '/entertainment/animals',
        icon: 'tiger_EScqhyDJzR.png'
      }
    ]
  }, 
    {
    label: 'Credit',
    name: 'entertainment',
    route: '/entertainment',
    icon: '',
    submenu: [
      {
        label: 'Shivang Raj',
        value: 'animals',
        route: '/entertainment/animals',
        icon: 'tiger_EScqhyDJzR.png'
      }
    ]
  }
];

const synthesisPrefix = 'This is, ';

export { headers, headerMenu, synthesisPrefix };
