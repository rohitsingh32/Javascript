// class and object

//class  /ek khali form/chij
class Customer {
    constructor(n) {
        this.name = n;
    }
    age = 25;
    buy() {
        console.log(this.name);
    }
}

//inheritance /means class ka photocopy
class GuestCustomer extends Customer {
    hello() {
        console.log("hello");
    }
}

// object / class me dalne wala chij

let Customer1 = new GuestCustomer("Ram");

console.log(Customer1);

Customer1.buy();
