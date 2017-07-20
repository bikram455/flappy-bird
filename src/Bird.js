class Bird{
  constructor(){
  	this.x=0;
  	this.y=45;
  	this.dead=0;
  	this.score=0;
  	this.width=50;
  	this.height=50;
  	this.position='absolute';
  	this.background='url("./images/bird1.png")';
  	this.checkKeyDown=this.checkKeyDown.bind(this);

  	this.bird=document.createElement('div');
  	this.bird.style.left=this.x;
  	this.bird.style.top=this.y;
  	this.bird.style.width=this.width;
  	this.bird.style.height=this.height;
  	this.bird.style.position=this.position;
  	this.bird.style.background=this.background;
  	this.bird.style.backgroundSize='contain';
  }

  move(){
  	if(this.y<583){
  	  this.y +=2;	
  	}  	
  	this.bird.style.top=this.y;
  	this.bird.style.left=this.x;
  	document.onkeydown=this.checkKeyDown;
  }

  checkKeyDown(e){
  	if(this.y>20 && this.dead==0 && e.keyCode=='38'){
  	  this.y -=30;		
  	}  	
  	this.bird.style.top=this.y;
  }

}

export default Bird;