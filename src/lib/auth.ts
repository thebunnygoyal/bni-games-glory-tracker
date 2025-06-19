
// Authentication and authorization utilities
export type UserRole = 'admin' | 'captain' | 'member';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  chapter?: string;
  name?: string;
}

// Mock authentication state (replace with actual auth provider)
let currentUser: User | null = null;

export const getCurrentUser = (): User | null => {
  return currentUser;
};

export const setCurrentUser = (user: User | null): void => {
  currentUser = user;
};

export const isAuthenticated = (): boolean => {
  return currentUser !== null;
};

export const hasRole = (requiredRole: UserRole): boolean => {
  if (!currentUser) return false;
  
  const roleHierarchy: Record<UserRole, number> = {
    member: 1,
    captain: 2,
    admin: 3
  };
  
  return roleHierarchy[currentUser.role] >= roleHierarchy[requiredRole];
};

export const canAccessAdminPanel = (): boolean => {
  return hasRole('admin');
};

export const canSubmitData = (): boolean => {
  return hasRole('captain');
};

export const canViewChapterData = (chapter?: string): boolean => {
  if (!currentUser) return false;
  if (hasRole('admin')) return true;
  if (hasRole('captain') && currentUser.chapter === chapter) return true;
  return false;
};
