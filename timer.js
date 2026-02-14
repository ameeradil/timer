// seperate the Class of Timer
class Timer{
    constructor(durationInput, startButton, pauseButton, callbacks){
        this.durationInput = durationInput
        this.startButton = startButton
        this.pauseButton = pauseButton
        if(callbacks){
            this.onStart = callbacks.onStart
            this.onTick = callbacks.onTick
            this.onComplete = callbacks.onComplete
        }

        this.startButton.addEventListener('click', this.start)
        this.pauseButton.addEventListener('click', this.pause)
    }

    start= () =>{
        if(this.onStart){
            this.onStart(this.timeRemaining)
        }
        this.tick()//to run the interval right a way without waiting fo 1 sec, if you want to see the effect, delete the line
        this.intervalID = setInterval(this.tick,50)
    }

    pause = () =>{
        clearInterval(this.intervalID)
    }

    tick = ()=>{
        if(this.timeRemaining<=0){
            this.pause()
            if(this.onComplete){
                this.onComplete()
            }
        }else{
            this.timeRemaining = this.timeRemaining-.05
            if(this.onTick){
                this.onTick(this.timeRemaining)
            }
        }

    }

    get timeRemaining(){
        return parseFloat(this.durationInput.value)
    }

    set timeRemaining(time){
        this.durationInput.value = time.toFixed(2)
    }


}