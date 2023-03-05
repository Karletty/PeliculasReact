export type UpcomingMovie = {
      adult: boolean;
      backdrop_path: string;
      genre_ids: number[];
      id: number;
      original_language: string;
      original_title: string;
      overview: string;
      popularity: number;
      poster_path: string;
      release_date: Date;
      title: string;
      video: boolean;
      vote_average: number;
      vote_count: number;
}

export type User = {
      id: string;
      name: string;
      lastname: string;
      email: string;
      password: string;
      birthdate: Date;
      token?: string | null;
};

export type UserPayload = Omit<User, 'id'>;;