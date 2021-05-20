function download(url){
  return new Promise(function(resolve, reject){
    if(!url.startsWith("http")){
      reject(new Error("Url doesn't start's with http"));
    }else{
      setTimeout(function(){// fake 2 second download
        let fileName = url.split('/').pop();
        resolve(fileName);
      },2000);
    }
  })
}

function resize(fileName){
  return new Promise(function (resolve, reject){
    if(!fileName.endsWith(".png")){
      reject(new Error("file is not png"))
    }else{
      setTimeout(function(){// fake 2 sec resize task
        let resizedFile = fileName.split(".")[0]+"-resized.png";
        resolve(resizedFile);
      }, 2000);
    }
  })
}

download("https://appy.com/apple.jpg")
  .then(resize)
  .then(function(resizedFile){
    console.log("Resized file is at: " + resizedFile);
  })
  .catch(function(err){
    console.error(err.message);
  })