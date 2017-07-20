class Pipes{
  constructor(x,y){
  	this.x=x;
  	this.y=y;
  	this.width=200;
  	this.position='absolute';
  	this.height=(Math.random()*3)*50+50;
  	this.background='url("./images/pipe.png")';
  	if(y==1){
  	  this.y=633-this.height;	
  	}

  	this.pipe=document.createElement('div');
  	this.pipe.style.left=this.x;
  	this.pipe.style.top=this.y;
  	this.pipe.style.width=this.width;
  	this.pipe.style.height=this.height;
  	this.pipe.style.position=this.position;
  	this.pipe.style.background=this.background;
  }

  move(bird){
  	this.x -=3;
  	this.pipe.style.left=this.x;
  	if(this.x<=-200){
  	  this.x=1450;
  	  ++bird.score;
  	  if(this.y!=0){
  		this.height=(Math.random()*3)*50+50;
  	    this.y=633-this.height;	
  	    this.pipe.style.left=this.x;
  	    this.pipe.style.height=this.height;
  	  	this.pipe.style.top=this.y;	
  	  }
  	  
  	}
  }

  collide(bird){
  	if(((bird.x>=this.x && bird.x<=this.x+this.width) || (bird.x<=this.x && this.x<=bird.x+bird.width)) && ( (bird.y>=this.y && bird.y<=this.y+this.height) ||(bird.y<=this.y && bird.y+bird.height>=this.y) ) ){
  	  bird.dead=1;
  	}
  }

}

export default Pipes;