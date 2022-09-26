//Constructor Function
function BankAccount(customerName, balance=0){
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
    //constructor methods    
    this.deposit = function(amount){
        this.balance += amount;
    }
    this.withdraw = function(amount){
        this.balance -= amount;
    } //not required, can be done via prototype. see 2_prototype.js
}
// const raushanAccount = new BankAccount("Raushan K", 1000);
// const johnAccount = new BankAccount("Jhon D");
// console.log(raushanAccount, johnAccount);




//The whole notion of constructor functions can be replaced with that of Class. see 3_class.js

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