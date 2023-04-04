export type User = {
      id: string;
      name: string;
      email: string;
      lastname: string;
      pass: string;
      birthdate: Date;
}

export type LoginUser = Omit<User, 'id' | 'lastName' | 'birthdate'>;
export type SignUpUser = Omit<User, 'id'>;