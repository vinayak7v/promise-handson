// Q1 call back dunction and Q5
function Sum(a,b){
    return a+b;
 }

 function Display(batch,month){
    console.log(`I am from EA${batch} Month: ${month}`);
 }
 Display(Sum(10,12),"Feb")

//Q2 and Q6

let count = 0;
setTimeout(() => {
    console.log(++count);
    setTimeout(() => {
        console.log(++count);
        setTimeout(() => {
            console.log(++count);
            setTimeout(() => {
                console.log(++count);
                setTimeout(() => {
                    console.log(++count);
                    setTimeout(() => {
                        console.log(++count);
                        setTimeout(() =>{
                            console.log(++count);
                        },7000);
                    }, 6000);
                }, 5000);
            }, 4000);
        }, 3000);
    }, 2000);
}, 1000);


function print(num){
    for(let i = 1 ;i <= num ; i++){
        setTimeout(() => {
           console.log(i); 
        }, i*(i+1)/2 * 1000);
    }
}
//Q3
function printNumbersWithDelay() {
    let delay = 0;
    const promises = [];
  
    for (let i = 1; i <= 7; i++) {
      promises.push(new Promise(resolve => {
        setTimeout(() => {
          console.log(i);
          resolve();
        }, delay);
      }));
      delay += i * 1000; 
    }
  
    return Promise.all(promises);
  }
  
  printNumbersWithDelay()
    .then(() => console.log('Done printing numbers'));

    //Q4
    const P= new Promise((res, rej)=>{
            let Batch = "EA22";
            if(Batch === 'EA22'){
                res('Welcome to EA22 Batch');
            }
            else{
                rej('Sorry, Bad entry!')
            }
        })
        P.then((d) => console.log(d)).catch((err) => console.log(err))
        
  
//Q7

// Promise - 
// let c = 1;
const promise = new Promise((res, rej) => {
    if(c % 2 === 0){
        res('Even');
    }
    else{
        rej('odd')
    }
})
promise
.catch((err) => console.log(err))
.then((a) => console.log(a))


//Q8
function Dis(nums, timeout){
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log(nums);
            res("Promise Resolve...!!")
        }, timeout);
    })
}

async function Call(){
     Dis("A", 2000);
    await Dis("E", 1000);
     Dis("I", 4000);
    await Dis("O", 3000);
     Dis("U", 5000);
}

Call();



//Q9

const p1 = new Promise((res, rej) => {
    res('Hello')
})
const p2 = new Promise((res, rej) => {
    res('I am from')
})
const p3 = new Promise((res, rej) => {
    res('PrepBytes')
})


Promise.all([p1, p2, p3]).then((d) => console.log(d)).catch((err) => console.log(err))



