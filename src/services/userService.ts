import { fetcher } from '@/lib/fetcher';
import { User } from '@/types/user';

export async function getUsers(): Promise<User[]> {
  return fetcher<User[]>('/api/users');
}

export async function getUserById(id: string): Promise<User> {
  return fetcher<User>(`/api/users/${id}`);
}
