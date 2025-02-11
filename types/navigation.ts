export interface NavigationItemI {
  label: string;
  href?: string;
  submenu?: NavigationItemI[];
  cta?: string;
}

export interface NavigationI {
  navigation: NavigationItemI[];
}
