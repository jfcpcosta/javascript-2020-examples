const regexp = /t(e)(st(\d))/g;
const str = 'test1test2';

const array = [...str.matchAll(regexp)];

console.log(array[0]);
console.log(array[1]);