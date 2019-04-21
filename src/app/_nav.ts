interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [

  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
  },
  {
    name: 'More',
    icon: 'icon-list',
    children: [
      {
        name: 'Users',
        url: '/users',
        icon: 'icon-people'
      },
      {
        name: 'Restaurants',
        url: '/restaurants',
        icon: 'fa fa-cutlery'
      },
      {
        name: 'Riders',
        url: '/riders',
        icon: 'fa fa-bicycle'
      }
    
    ]
  }
 

];
