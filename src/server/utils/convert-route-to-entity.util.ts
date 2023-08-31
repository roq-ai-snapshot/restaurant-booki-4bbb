const mapping: Record<string, string> = {
  guests: 'guest',
  menus: 'menu',
  reservations: 'reservation',
  restaurants: 'restaurant',
  tables: 'table',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
