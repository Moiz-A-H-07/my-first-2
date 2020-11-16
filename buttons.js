class Button{
    constructor(){
        this.but1=createButton("Mathematics")
        this.but2=createButton('English')
       

    }

    hide(){
        this.but1.hide()
        this.but2.hide()
    }


    display(){
        this.but1.position(displayWidth/2,displayHeight/2-50)
        this.but2.position(displayWidth/2,displayHeight/2+50)

        this.but1.mousePressed(()=>{
            this.but1.hide()
            this.but2.hide()
            textSize(30)
            fill("blue")
            text("welcome to mathematics",displayWidth/2,displayHeight/2)
            console.log("maths")

        })

        this.but2.mousePressed(()=>{
            this.but1.hide()
            this.but2.hide()
            textSize(30)
            fill("blue")
            text("welcome to english",displayWidth/2,displayHeight/2)
            console.log("english")

        })
    }

}