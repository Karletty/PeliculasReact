import { mapToArray } from "../helpers/mapToArray";
import { SignUpPayload, User } from "../types";
import { apiFirebase } from "../utils/axios"

const add = async (user: SignUpPayload) => {
      const response = await apiFirebase.post('/users.json', user);
      return response.data.name;
}

const getAll = async () => {
      const response = await apiFirebase.get('/users.json');
      return mapToArray<User>(response.data);
}

const get = async (id: string) => {
      const response = await apiFirebase.get(`/users/${id}.json`);
      return { id, ...response.data };
}

const update = async ({ id, name, lastname, email, pass, birthday}: User) => {
      const response = await apiFirebase.put(`/users/${id}.json`, { name, lastname, email, pass, birthday });
      return response.data.name;
}

const remove = async (id: string) => {
      const response = await apiFirebase.delete(`/users/${id}.json`);
      return response.data;
}

export const servicesUser = { add, getAll, get, update, remove };