function createAccount(pin, amount = 0) {
  let balance = amount;
  let current_pin = pin;

  return {
    checkBalance(inputPin) {
      if (inputPin !== current_pin) return "Invalid PIN.";
      return `$${balance}`;
    },

    deposit(inputPin, amount) {
      if (inputPin !== current_pin) return "Invalid PIN.";
      balance += amount;
      return `Successfully deposited $${amount}. Current balance: $${balance}.`;
    },

    withdraw(inputPin, amount) {
      if (inputPin !== current_pin) return "Invalid PIN.";
      if (amount > balance) return "Withdrawal amount exceeds account balance. Transaction cancelled.";
      balance -= amount;
      return `Successfully withdrew $${amount}. Current balance: $${balance}.`;
    },

    changePin(oldPin, newPin) {
      if (oldPin !== current_pin) return "Invalid PIN.";
      current_pin = newPin;
      return "PIN successfully changed!";
    }
  };
}

module.exports = { createAccount };
