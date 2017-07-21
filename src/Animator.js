import Sky from './Sky';
import Bird from './Bird';
import Panel from './Panel';
import Pipes from './Pipes';

class Animator{
  constructor(){
  	this.interval;  	
    this.startval=1;
  	this.checkKeyDown=this.checkKeyDown.bind(this);	
  	this.startGame();   
  }

  startGame(){
    this.board=document.getElementById('game');
    this.board.innerHTML="<br><br><h1>FLAPPY BIRD</h1><br><br><br><h1>Press Enter to Start!!!!</h1><h2>Press up arrow key keep the bird mid-air.</h2>";
    document.onkeydown=this.checkKeyDown;
  }

  animate(){
    let game=document.getElementById('game');
    let sky=new Sky();
    game.appendChild(sky.sky);
  	let pipes=[];

  	let panel=new Panel();
  	let bird=new Bird();
  	let pipe1=new Pipes(600,0);  	
  	let pipe2=new Pipes(600,1);  	
  	let pipe3=new Pipes(1000,0);  	
  	let pipe4=new Pipes(1000,1);  	
  	let pipe5=new Pipes(1400,0);  	
  	let pipe6=new Pipes(1400,1);  	

  	game.appendChild(panel.panel);  	
  	
  	sky.append(bird.bird);
  	sky.append(pipe1.pipe);
  	sky.append(pipe2.pipe);
  	sky.append(pipe3.pipe);
  	sky.append(pipe4.pipe);
  	sky.append(pipe5.pipe);
  	sky.append(pipe6.pipe);
  	pipes.push(pipe1,pipe2,pipe3,pipe4,pipe5,pipe6); 
  	/////////////////////////////////////////
  	this.board=document.getElementById('board');
  	
  	if(bird.dead==0){
  	  this.interval=setInterval(()=>{
  	  	this.board.innerHTML="<h2>Score:"+bird.score+"</h2>";
  	  	bird.move();
  	  	for(let pipe of pipes){
  	  	  pipe.move(bird);
  	  	  pipe.collide(bird);
  	  	}
  	  	if(bird.dead==1){
  	  	  this.stop(sky,bird,pipes);
  	  	}
  	  },1000/60);
  	}
  }

  stop(sky,bird,pipes){
  	clearInterval(this.interval);
  	this.board=document.getElementById('sky');    
    this.board.innerHTML='<h1>Game Over</h1><h1>Press Enter</h1> ';
  	document.onkeydown=this.checkKeyDown;
  }

  checkKeyDown(e){
  	if(e.keyCode=='13' && this.startval==1){
  	  this.board=document.getElementById('game');
      this.board.innerHTML="";
      this.animate();
      startval=0;
  	}
    if(e.keyCode=='13' && this.startval==0){
      this.startGame();
    
    }  	

  }
}

export default Animator;