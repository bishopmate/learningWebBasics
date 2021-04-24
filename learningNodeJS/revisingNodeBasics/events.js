const { EventEmitter }  = require('events');
const timerEventEmitter = new EventEmitter();

let currentTime = 0;
setInterval(()=>{
  currentTime++;
  timerEventEmitter.emit('secondPassed', currentTime);
},1000);

timerEventEmitter.once('secondPassed', (currentTime)=>{
  console.log('Welcome to Paradise, Heaven awaits you');
});

timerEventEmitter.on('secondPassed', (currentTime) =>{
  console.log(`${currentTime} seconds have passed since you came to Heaven`);
})

