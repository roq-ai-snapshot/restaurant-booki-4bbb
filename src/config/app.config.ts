interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Chef', 'Waiter'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine v2',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Create a new reservation', 'Update reservation details', 'Cancel reservation'],
  ownerAbilities: ['Manage restaurant', 'Invite employees', 'Manage menu', 'Manage tables', 'Manage reservations'],
};
