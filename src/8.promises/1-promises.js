const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Success!!!');
    } else {
        reject('Error!!!');
    }
});

promise
    .then(message => console.log(message))
    .catch(error => console.log(error));