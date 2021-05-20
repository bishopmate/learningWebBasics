function downloadPromise(){
  return new Promise(function(resolve, reject){
    console.log("Starting Download");
    setTimeout(function(){
      console.log("Download complete");
      resolve(); 
    },2000);
  });
}

let downloadedFile = downloadPromise();

setTimeout(function(){
  downloadedFile.then(
    function(){
      console.log("After download");
    }
  )
},5000);