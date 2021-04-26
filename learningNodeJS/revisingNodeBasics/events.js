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
  const countDownEventEmitter = new EventEmitter();
  
  if(countDownTime <= 2){
    countDownEventEmitter.on("error", function rep(err){
      console.error(err.message);
    });
    countDownEventEmitter.emit('error', new Error('Value of the countdown timer can\'t be less than 3'));
  }else{
    const timer = setInterval(() => {

    countDownEventEmitter.on('error',function(wrong){
      console.error(wrong.message);
    });
      countDownEventEmitter.emit('count', countDownTime);
      if(countDownTime == 2){
        countDownEventEmitter.emit('packup');
      }
      if(countDownTime == 0){
        countDownEventEmitter.emit('end');
        clearInterval(timer);
      }      
      countDownTime--;
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

countDown(2);

class extendedCountDown extends EventEmitter{
  constructor(countDownTime){
    super();
    this.countDownTime = countDownTime;
  }
  startTimer(){
     
    this.on("error", function rep(err){
      console.error(err.message);
    });
    if(this.countDownTime <= 2){
      const err = new Error('Value of the countdown timer cannot be less than 3');
      this.emit("error", err);
    }else{
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
      });
      this.on('packup', ()=>{
        console.log("Are you ready? !!!!!!!!!!");
      });
      this.on('end', ()=>{
        console.log("Yoo, Booooooooom..... The event has ended");
      });
  }
  }
}

const sevenSeconds = new extendedCountDown(7);
console.log(sevenSeconds.eventNames());
sevenSeconds.startTimer();

const ee = new EventEmitter();
function ping(){
  console.log('ping');
}
function pong(){
  console.log('pong');
}
ee.on("tt", ping);
ee.on("tt", pong);
ee.emit("tt");
ee.off("tt", ping);// off is an alias for removeListener
ee.emit("tt");
ee.on("tt", ping);
ee.emit("tt");
ee.removeAllListeners("tt");
ee.emit("tt");