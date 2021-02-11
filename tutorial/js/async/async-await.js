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

async function usingAsyncAwait(){
  try{
    const user = await loginUser('scoobydoobydoo@gmail.com', 'skdjn1');
    const videos = await getUserVideos(user.email);
    const title = await getVideoDetails(videos[0]);
    console.log(title);
    
  }catch(error){
    console.log(error.message);
  }
}
usingAsyncAwait();

console.log("End");
