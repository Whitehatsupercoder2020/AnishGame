class Form {
    constructor() {
      this.playButton = createButton("Play");
      this.title = createElement("h1");
      this.greeting = createElement("h2");
    }
  
    setElementsPosition() {
      this.title.position(120, 50);
      this.playButton.position(width / 2 - 90, height-100);
      this.greeting.position(width / 2 - 300, height / 2 - 100);
    }
  
    setElementsStyle() {
      this.playButton.class("customButton");
      this.greeting.class("greeting");
      this.title.class("title")
    }
  
    hide() {
      this.greeting.hide();
      this.playButton.hide();
      
    }
  handleIntro(){
    var message = `
    Hello!!! This Game is about Indian War
    </br>Are you ready to play??`;
    this.greeting.html(message);
    var title='Commander Game';
    this.title.html(title);
  }
    handleMousePressed() {
      this.playButton.mousePressed(() => {
      
        this.playButton.hide();
       this.greeting.hide();
       this.title.hide();
        gameState=1;
      
      });
    }
  
    display() {
      this.setElementsPosition();
      this.setElementsStyle();
      this.handleIntro();
      this.handleMousePressed();
    }
  }
  