import { mapToArray } from '../../helpers/mapToArray';
import { User, UserPayload } from '../../types';
import { apiFirebase } from '../../utils/axios';

const add = async (userPayload: UserPayload) => {
      const response = await apiFirebase.post('./users.json', userPayload);
      return response.data;
}

const getAll = async (): Promise<User[]> => {
      const response = await apiFirebase.get('./users.json');
      return mapToArray(response.data);
}

const getBy = async (prop: 'token' | 'email', value: string) => {
      const users = await getAll();
      return users.find(user => user[prop] === value);
}

const update = (user: Partial<User>) => {
      const { id, ...rest } = user
      const response = apiFirebase.patch(`./user/${id}.json`, { ...rest });
      return response;
}

export const usersService = { add, getAll, getBy, update };