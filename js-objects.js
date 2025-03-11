// CREATING OBJECTS

const user ={
    name: 'Dennis',
    age: 25,
    email: 'wachiradenis336@gmail.com',

}

console.log (user);

//READING OBJECTS- dot notation, bracket notation
                        

console.log (user.name);
console.log(user.email);

//bracket notations are used when property names contain special characters or are dynamic

console.log(user["email"]);

//looping through objects

for (let name in user){
    console.log(`${name}: ${user[name]}`);
}

//Using Object.keys(), Object.values(), and Object.entries()
console.log(Object.getOwnPropertyNames(user));
console.log(Object.values(user));
console.log(object.entries(user));



//UPDATING OBJECTS
user.age = 26;
console.log(user.age);

//updating with dynamic keys
const keyToUpdate = "email";
user [keyToUpdate] = "ojahw@icloud.com";
console.log(user.email);

//DEEP UPDATING NESTED OBJECTS

const userProfile = {
    name: "Dennis",
    contact: {
        email: "yankeed336@gmail.com",
        phone: "0798564646",
    }
}
userProfile.contact.phone = "0798546695";
console.log(userProfile.contact.phone);



if ("name" in userProfile){
    console.log('userProfile.name')
}else{
    console.log("the property does not exist")
};


//DELETING - REMOVING OBJECTS

delete user.email;
console.log(user);

//deleting from nested objects
delete user.profile.contact.phone;
//removing all properties
object.keys(user).forEach(key => delete user[key]);


//ADVANCED CRUD OPERATIONS

// checking if a property exists
console.log("name " in user); //true




//freezing objects to prevent changes
const settings = {
    theme: "dark",
    languange: "en",
}
object.freeze(settings);

//making objects read-only-  Allows modifying existing properties but prevents adding/removing properties.
const account = {
    userName: "Dennis",
    email: "wachiradenis336@gmail.com",
}
object.seal(account);

account.userName = "Dennis Wachira"; //allowed
delete account.userName; //not allowed
console.log(account);


//CRUD BEST PRACTICES

const user = { name: "Dennis" }; // Prevents reassignment


const config = Object.freeze({ apiUrl: "https://example.com" });

