class User {
  email: string;
  name: string;
  readonly city: string = "";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const samuel = new User("s@s.com", "Samuel");

// samuel.city = "Caracas";
samuel.email = "sam@bg.com";
