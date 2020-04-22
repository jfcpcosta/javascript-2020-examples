const customers = ['John', 'Jane', 'Mary', 'Lou'];
const [firstCustomer, secondCustomer, ...otherCustomers] = customers;

console.log(`The first customer is ${firstCustomer} and the second customer is ${secondCustomer}`);
console.log(`Other customers are ${otherCustomers}`);