function calcTax(income, ...customers) {
    console.log(`Calculating tax for customers with the income ${income}`);
    customers.forEach(customer => console.log(`Processing ${customer}`));
}

calcTax(50000, 'John', 'Jane', 'Mary');