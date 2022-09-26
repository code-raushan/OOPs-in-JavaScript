class BankAccount{
    constructor(customerName, balance = 0){
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.balance = balance;
    }

    deposit(amount){
        this.balance += amount;
    }
    withdraw(amount){
        this.balance -= amount;
    }
}
//class implementation in background make use of constructor function and prototype.
//what we acheived from last js files can be achieved in this way without worrying about the prototype thing.



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