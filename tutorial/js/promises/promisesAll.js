function download(url){
  return new Promise(function(resolve, reject){
    if(!url.startsWith("http")){
      reject(new Error("Url doesn't start's with http"));
    }else{
      console.log("Downloading Started: " + url);
      setTimeout(function(){// fake 2 second download
        let fileName = url.split('/').pop();
        resolve(fileName);
      },3000);
    }
  })
}

function resize(fileName){
  return new Promise(function (resolve, reject){
    if(!fileName.endsWith(".png")){
      reject(new Error("file is not png"))
    }else{
      console.log("Resizing Started: " + fileName);
      setTimeout(function(){// fake 2 sec resize task
        let resizedFile = fileName.split(".")[0]+"-resized.png";
        resolve(resizedFile);
      }, 2000);
    }
  })
}

Promise.all([
  download("https://appy.com/apple.png"),
  download("https://appy.com/banana.png"),
  download("https://appy.com/candy.png")
]).then(function(values){// if any promise in unresolved then it goes to catch and .then is not ran
    return Promise.all(values.map(resize));
  }).then(function(values){
    console.log(values);
  })
  .catch(function(err){
    console.log(err.message);
  })