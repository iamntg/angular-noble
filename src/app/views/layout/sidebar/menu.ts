import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'Main',
    isTitle: true
  },
  {
    label: 'Dashboard',
    icon: 'home',
    link: '/dashboard'
  },
  {
    label: 'Group 1',
    isTitle: true
  },
  {
    label: 'Reports',
    icon: 'layers',
    subItems: [
      {
        label: 'Daily',
        link: '/reports/daily',
      },
      {
        label: 'Section',
        link: '/reports/section'
      },
      {
        label: 'Monthly',
        link: '/reports/monthly'
      },
    ]
  },
  {
    label: 'Statements',
    icon: 'message-square',
    link: '/statements',
  },
  {
    label: 'Group 2',
    isTitle: true
  },
  {
    label: 'Some Link',
    icon: 'link',
    subItems: [
      {
        label: 'SubLink',
        link: '/sublink',
      }]
  }
];
