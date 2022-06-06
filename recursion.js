/*function pow(value, power) {
    result = 1;
    for(i = 0; i < power; i++) {
        result *= value;
    }
    return result;
}

console.log(pow(3, 4));*/

/*function pow(value, power) {
    if(power == 1) return value;
    else {
        return value * pow(value, power - 1);
    }
}

console.log(pow(3, 4))*/

/*function pow(value, power) {
    return (power == 1) ? value: value * pow(value, power - 1);
}
console.log(pow(3, 4))*/

/*let company = { // the same object, compressed for brevity
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
    development: {
      sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
      internals: [{name: 'Jack', salary: 1300}]
    }
  };

  function sumSalaries(department) {
      if(Array.isArray(department)) {
          return department.reduce((prev, current) => prev + current.salary, 0);
      } else {
          let sum = 0;
          for(let subdep of Object.values(department)) {
              sum += sumSalaries(subdep);
          }
          return sum;
      }
  }

  console.log(sumSalaries(company));*/

  /*function sumTo(value) {
      if(value == 1) return value;
      else {
          return value = value + sumTo(value - 1);
      }
  }

  console.log(sumTo(100))*/

  /*function factorial(value) {
      if(value == 0 || value == 1) return 1;
      else {
          return value * factorial (value - 1);
      }
  }

  console.log(factorial(5))*/

  function fibonacci(n) {
      if(n <= 1) return n;
      else {
          return fibonacci(n-2) + fibonacci(n-1);
      }
  }

  console.log(fibonacci(6))

  