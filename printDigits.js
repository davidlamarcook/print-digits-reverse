let reverse = 0;
let num = 123456789;
let lastDigit;

while(num != 0){
    lastDigit = num % 10;
    reverse = reverse * 10 + lastDigit;
    num = Math.floor(num/10);
}

console.log(`Reverse number : ${reverse}`)

//solution example

/*const printDigits = num => {
    while (num) {
      let digitToPrint = num % 10
      console.log(digitToPrint)
      num = (num - digitToPrint) / 10
    }
  }*/