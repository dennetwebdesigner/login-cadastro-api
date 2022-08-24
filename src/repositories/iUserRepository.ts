import { User } from 'entities/User'

export interface data {
  username: string
  password: string
}

export interface iUserRepository {
  findByUsername(username: string): Promise<User | any>
  save(data: data): Promise<User>
}
