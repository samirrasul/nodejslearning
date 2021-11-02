let i = 1

while (i>0 && i<4) {
     console.log(i)
     i++
 }

let i=0

 do {
    console.log(i)
     i++
 } while(i<4)

for (let i=0; i<5; i++)
    console.log(i)

let i=1

while(true){
    console.log(i)
    i++

    if(i == 102) {
        break
    }
}

 for(let i = 0; i < 10; i++) {

     if(i % 3 == 0) continue;
     console.log(i)
 }

outer: for(let i=0; i<3; i++) {
    for(let j=0; j<3; j++) {
        console.log(i+j)
        if(i==2) break outer;
    }
}

for(let i = 2; i<10; i++) {

    if (i % 2 == 0) {
        console.log(i)
    }
}

prime: for (let i=2; i<=10; i++) {
    for (let j=2; j<i; j++) {
        if (i%j==0) continue prime;
    }
    console.log(i)
}