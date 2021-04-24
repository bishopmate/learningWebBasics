const { EventEmitter }  = require('events');
const timerEventEmitter = new EventEmitter();

let currentTime = 0;
setInterval(()=>{
  currentTime++;
  // timerEventEmitter.emit('secondPassed', currentTime);
},1000);

timerEventEmitter.once('secondPassed', (currentTime)=>{
  console.log('Welcome to Paradise, Heaven awaits you');
});

timerEventEmitter.on('secondPassed', (currentTime) =>{
  console.log(`${currentTime} seconds have passed since you came to Heaven`);
})

const countDown = (countDownTime) => {
  if(countDownTime <= 2){
    console.log("Time too short to countdown");
  }else{
    const countDownEventEmitter = new EventEmitter();
    const timer = setInterval(() => {
      countDownTime--;
      countDownEventEmitter.emit('count', countDownTime);
      if(countDownTime == 2){
        countDownEventEmitter.emit('packup');
      }
      if(countDownTime == 0){
        countDownEventEmitter.emit('end');
        clearInterval(timer);
      }      
    },1000);
    countDownEventEmitter.on('count', (secondsLeft)=>{
      console.log(`${secondsLeft} seconds lift till Event Ends`);
    })
    countDownEventEmitter.on('packup', ()=>{
      console.log("Are you ready? !!!!!!!!!!");
    })
    countDownEventEmitter.on('end', ()=>{
      console.log("Yoo, Booooooooom..... The event has ended");
    })
  }
}

countDown(5);