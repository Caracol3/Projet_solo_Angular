export class Child {
  id: number;
  username: string;
  birthday: Date;
  gender: string;

  constructor(id: number, username: string, birthday: Date, gender: string) {
    this.id = id;
    this.username = username;
    this.birthday = birthday;
    this.gender = gender;
  }
}

export class ChildCreated {
  username: string;
  birthday: Date;
  gender: string;

  constructor(username: string, birthday: Date, gender: string) {
    this.username = username;
    this.birthday = birthday;
    this.gender = gender;
  }
}
