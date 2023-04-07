export type User = {
      id: string;
      name: string;
      email: string;
      lastname: string;
      pass: string;
      birthday: Date;
}

export type SignUpForm = Omit<User, 'id' | 'birthday'> & { birthday: string;}
export type LoginUser = Omit<User, 'id' | 'lastname' | 'birthday'>;
export type SignUpPayload = Omit<User, 'id'>;

export type Movie = {
      adult: boolean,
      backdrop_path: string,
      genre_ids: Number[],
      id: Number,
      original_language: string,
      original_title: string,
      overview: string,
      popularity: Number,
      poster_path: string,
      release_date: string,
      title: string,
      video: boolean,
      vote_average: Number
      vote_count: Number
}