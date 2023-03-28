export type User = {
      id: string;
      name: string;
      email: string;
      lastName: string;
      pass: string;
      birthdate: Date;
}

export type LoginUser = Omit<User, 'id' | 'lastName' | 'pass' | 'birthdate'>;
export type SignUpUser = Omit<User, 'id'>;