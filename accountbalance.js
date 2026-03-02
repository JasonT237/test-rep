class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log("Insufficient funds");
    }
  }

  displayBalance() {
    console.log("Balance: " + this.balance);
  }
}

const acc1 = new BankAccount("12345", 1000);
acc1.deposit(500);
acc1.withdraw(300);
acc1.displayBalance();