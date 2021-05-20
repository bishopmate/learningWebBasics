function someAsyncTask(callback){
  console.log("Beginning of Task");
  setTimeout(function(){
    callback();
    console.log("End of Task");
  },2000);
}
function dummyTask(){
  console.log("We did some task");
}

// someAsyncTask(dummyTask);

let someTaskPromise = function (){
  return new Promise(function(resolve, reject){
    someAsyncTask(resolve);
  })
}

someTaskPromise().then(dummyTask); 