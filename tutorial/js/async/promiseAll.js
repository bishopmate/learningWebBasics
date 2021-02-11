console.log("Start");
function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Now we have the email and XXXX(hashed passcode)");
      
      ok = true;
      if(!ok)
        reject(new Error("Can't login"));
      resolve({ userEmail: email });
    }, 1000);
  })
}

function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      videos = ["video", "video1", "video2"];
      console.log(videos);
      
      ok = true;
      if(!ok)
        reject(new Error("Unable to retreive videos"));
      resolve(videos);
    }, 1000);
  })
}

function getVideoDetails(video){
  return new Promise((resolve) => {
    setTimeout(() => {
      ok = true;
      if(!ok)
        reject(new Error("I don't know the title, so don't ask"));
      resolve("Madagascar");
      }, 1000);
  });
  
}


const yutube = new Promise(resolve => {
  setTimeout(()=>{
    console.log("Fetching data from Yutube");
    resolve({videos : [1,2,3,4,5]});
  },2000);
});

const facbook = new Promise(resolve => {
  setTimeout(()=>{
    console.log("Fetching data from Facbook");
    resolve({friends : ["Raghupati", "Raghav", "Raja", "Ram"]});
  },3000);
});
Promise.all([yutube, facbook])
    .then(results => {
    for(index in results){
      console.log(results[index]);
    }
    })
    .catch(error => error.message);


console.log("End");
