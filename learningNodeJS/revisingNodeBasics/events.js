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
      console.log(`${secondsLeft} seconds left till Event Ends`);
    })
    countDownEventEmitter.on('packup', ()=>{
      console.log("Are you ready? !!!!!!!!!!");
    })
    countDownEventEmitter.on('end', ()=>{
      console.log("Yoo, Booooooooom..... The event has ended");
    })
  }
}

// countDown(5);

class extendedCountDown extends EventEmitter{
  constructor(countDownTime){
    super();
    this.countDownTime = countDownTime;
  }
  startTimer(){
    const timer = setInterval(() => {
      this.emit('count', this.countDownTime);
      if(this.countDownTime == 2){
        this.emit('packup');
      }
      if(this.countDownTime == 0){
        this.emit('end');
        clearInterval(timer);
      }
      this.countDownTime--;      
    },1000);
    this.once('count', (totalSeconds)=>{
      console.log(`Welcome to Havana, This event is ${totalSeconds} seconds long`);
    });
    this.on('count', (secondsLeft)=>{
      console.log(`${secondsLeft} seconds left till Event Ends`);
    })
    this.on('packup', ()=>{
      console.log("Are you ready? !!!!!!!!!!");
    })
    this.on('end', ()=>{
      console.log("Yoo, Booooooooom..... The event has ended");
    }) 
  }
}

const sevenSeconds = new extendedCountDown(7);
sevenSeconds.startTimer();