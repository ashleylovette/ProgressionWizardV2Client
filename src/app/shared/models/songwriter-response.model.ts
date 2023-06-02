
export class SongwriterResponse {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  birthday: Date;
  instruments: [];
  countryOfResidence: string;
  isAuthenticated: boolean;
  errors: [] = [];

  constructor(userResponse: {
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    birthday: Date,
    instruments: [],
    countryOfResidence: string,
    isAuthenticated: boolean,
    errors: []
  }) {
    this.username = userResponse.username;
    this.firstName = userResponse.firstName;
    this.lastName = userResponse.lastName;
    this.email = userResponse.email;
    this.birthday = userResponse.birthday;
    this.instruments = userResponse.instruments;
    this.countryOfResidence = userResponse.countryOfResidence;
    this.isAuthenticated = userResponse.isAuthenticated;
    this.errors = userResponse.errors;
  }
}
