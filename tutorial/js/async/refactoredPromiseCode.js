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
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      ok = true;
      if(!ok)
        reject(new Error("I don't know the title, so don't ask"));
      resolve("title of the video");
      }, 1000);
  });
  
}

loginUser("scoobydoobydoo@cartoons.com", "abracadabra")
.then( user => getUserVideos(user))
.then( videos => getVideoDetails(videos[0]))
.then( detail => console.log(detail))
.catch(error => console.log(error.message));
;

console.log("End");
