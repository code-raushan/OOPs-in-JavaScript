//Utility Functions

class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //static methods and properties are related to the class only and not its objects
    static compareByAge(user1, user2){
        return user1.age-user2.age;
    }


}
const user1 = new User('Rashan K', 20);
const user2 = new User('Raj K', 25);
const user3 = new User('Rahul R', 18);
const users = [user1, user2, user3]

// users.sort((a, b)=>a.age-b.age);
users.sort(User.compareByAge)
console.log(users);