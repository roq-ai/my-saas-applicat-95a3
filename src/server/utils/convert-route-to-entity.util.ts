const mapping: Record<string, string> = {
  companies: 'company',
  dashboards: 'dashboard',
  invitations: 'invitation',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
