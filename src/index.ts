// class User {
//   public email: string;
//   private name: string;
//   private readonly city: string = "";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }

class User {
  readonly city: string = "Caracas";
  constructor(
    public email: string,
    public name: string // private userId: number
  ) {}
}

const samuel = new User("s@s.com", "Samuel");

// samuel.city = "Caracas";
samuel.email = "sam@bg.com";
// samuel.name;
