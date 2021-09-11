//PROMISES//

// setTimeout(() => console.log('this is a test of timeouts!'), 1000);

let promise = new Promise(function(resolve, reject){
    setTimeout(() => {
        if (true) {
            resolve('success');
        }else{
            reject('failure');
        }
    }, 3000);
    })

    promise
    .then(blah => console.log(blah)) //for this promise it either needs to resolve or it needs to reject (Pass/Fail) blah = success in this case.
//Promise Chaining
    .catch(err => console.log(err)) //err = failure in this case

console.log('this cod is after our promise & .then chain!');

function playFunc(){
    return 5;
}

console.log(playFunc());