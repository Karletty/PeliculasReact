export type User = {
      id: string,
      name: string,
      lastname: string,
      email: string,
      pass: string,
      birthdate: Date,
}

export type LoginUser = Omit<User, 'id' | 'lastName' | 'name' | 'birthdate'>;
export type SignUpUser = Omit<User, 'id'>;

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