function numFibonacci(num) {
    if (num === 0 || num === 1) {
      return true
    }
  
    let a = 0
    let b = 1
  
    while (true) {
      let c = a + b
  
      if (c === num) {
        return true
      }
  
      else if (c > num) {
        return false
      }
  
      a = b
      b = c
    }
  }
  
  function teste() {
    let num = parseInt(prompt("Informe um numero para verificar se pertence a sequncia: "))
  
    if (numFibonacci(num)) {
      console.log(`${num} pertence a sequncia de Fibonacci`)
    }
  
    else console.log(`${num} não pertence a sequência de Fibonacci`)
  }

teste()
