/*
Asynchronous JS
setTimeout(function(){
    console.log('third');
    },3000);
function sync(){
console.log('first);
}
sync();
console.log('second');
API:-Application Programming Interface
way to connect between to backend and frontend
promises

let waadaa1 = new Promise(function(resolve, reject) {
    setTimeout(()=> {
        console.log('setimeout1 started');
    },2000);
    resolve(true);
})

let output = waadaa1.then(() => {
    let waadaa2 = new Promise(function(resolve, reject) {
        setTimeout(()=> {
            console.log('setimeout2 started');
        },3000);
        resolve("waada 2 resolved");
    })
    return waadaa2;
})

output.then((value) => console.log(value));
Async-await: special syntex used to work with promises.

async function abcd(){
return "Kya hua tera";
}

async function utility(){
let delhiMausam = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Delhi me bhot garmi hai");
    },5000);
    });
    let hydMausam = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hyderabad is Cool");
        },6000);
    });
    let DM = await delhiMausam;
    let HM = await hydMausam;
    return [DM, HM];
}
Fetch API
network request to fetch data from the server
API use hota h network par data lene ke liye ya bhejne ke liye
async function utility(){
let content = await fetch('https://jsonplaceholder.typicode.com/posts/1')
let output = await content.json();
console.log(output);
}
utility();

async function helper() {
let options = {
        method: 'POST',
        body: JSON.stringify({
          title: 'Babbar',
          body: 'Tagdi Body ',
          userId: 1998,
          weight: 90,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    };
    
    let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);
    let response = content.json();
    return response;
}
async function utility() {
    let ans = await helper();
    console.log(ans);
}
utility();

closures



*/ 

let meraPromise1 = new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('I am insde Promise1');
        }, 5000);
        //resolve(1234567890);
        reject(new Error('Bhaisahab Error aaaye hai'))
});
meraPromise1.then((value) => { console.log(value)}, (error) => { console.log("Recieved an Error")});
let meraPromise2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('I am insde Promise2');
    }, 3000);
    //resolve(2233);
    //reject(new Error('Bhaisahab Error aaaye hai'))
});
console.log('Pehla');
let temp =  {
    val:123
};

async function abcd() {
    return "kya hua tera";
}

let obj = {
    heading:"head"
};
async function utility() {
    let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    //let output = await content.json();
    console.log(content);
}
utility();
    let options = {
        method: 'POST',
        body: JSON.stringify({
          title: 'Babbar',
          body: 'Tagdi Body ',
          userId: 1998,
          weight: 90,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    };
     let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);
    let response = content.json();
    return response;

async function utility() {
    let ans = await helper();
    console.log(ans);
}

utility();

function init() {
    let name = "Mozilla"; 
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    return displayName;
}
let a = init();
a();