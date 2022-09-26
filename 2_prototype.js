//Constructor Function
function BankAccount(customerName, balance=0){
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
   
}

//Prototype code
//We mainly use prototypes to reduce memory usage as then the methods and variables become the part of the.. 
//... prototype object, in the following case that is BankAccount.
BankAccount.prototype.deposit = function(amount){
    this.balance += amount;
} 
//Do not use arrow functions with prototype because, the 'this' keyword will then take global object(window) reference.
BankAccount.prototype.withdraw = function(amount){
    this.balance -= amount;
}


//The whole notion of constructor functions can be replaced with that of Class.
//```````````````````````````````````````````````````````````````````````````````````//
const accounts = []
const accountForm = document.querySelector('#accountForm');
const customerName = document.querySelector('#customerName');
const balance = document.querySelector('#balance');
accountForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const account = new BankAccount(customerName.value, +balance.value); //+ to convert balance.value(str) to int
    accounts.push(account);
    console.log(accounts);

})
const depositForm = document.querySelector('#depositForm');
const accountNumber = document.querySelector('#accountNumber');
const amount = document.querySelector('#amount')
depositForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const account = accounts.find(
        (account)=> account.accountNumber === +accountNumber.value
    )
    account.deposit(+amount.value);
    console.log(accounts);

});