interface UserInterface {
  name: string;
  email: string;
  age: number;
  register();
  payInvoice();
}

class User implements UserInterface {
  // private name: string;
  // protected email: string;
  // public age: number;

  name: string;
  email: string;
  age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;

    console.log("User created: " + this.name)
  }

  public register() {
    console.log(this.name + " " + "is now registered")
  }

  payInvoice() {
    console.log(this.name + " paid invoice")
  }
}

let john = new User("John", "123@mail.com", 23)

console.log(john.name)
john.register()

class Member extends User {
  id: number;

  constructor(id: number, name: string, email: string, age: number) {
    super(name, email, age);
    this.id = id;
  }

  payInvoice() {
    super.payInvoice()
  }
}


let mike: User = new Member(4, "Mike", "567@mail.com", 34);

mike.payInvoice()
console.log(mike)
// при этом, у Майка есть id, но получить доступ через TS мы не можем, т.к. у родительского класса такого поля нет
