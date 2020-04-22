function* doSomething() {
    console.log('Start processing');
    yield;
    console.log('Resume processing');
}

const iterator = doSomething();
iterator.next();
iterator.next();