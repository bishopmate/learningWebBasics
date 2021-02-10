console.log("Start");
function loginUser(email, password, callback) {
  setTimeout(() => {
    console.log("Now we have the email and XXXX(hashed passcode)");
    callback({ userEmail: email });
  }, 1000);
}

function getUserVideos(email, callback) {
  setTimeout(() => {
    callback(["video", "video1", "video2"]);
  }, 1000);
}

function getVideoDetails(video, callback) {
  setTimeout(() => {
    callback("title of the video");
  }, 1000);
}

const user = loginUser("shashigoofy@gmail.com", 123456, (user) => {
  console.log(user);
  getUserVideos(user.userEmail, (videos) => {
    console.log("The user likes");
    console.log(videos);
    getVideoDetails(videos[0], (title) => {
      console.log(title, videos[0]);
    });
  });
});

console.log("End");
