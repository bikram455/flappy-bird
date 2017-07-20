import Sky from './Sky';
import Bird from './Bird';
import Panel from './Panel';
import Pipes from './Pipes';

class Animator{
  constructor(){
  	this.interval;  	
  	this.checkKeyDown=this.checkKeyDown.bind(this);	
  	this.animate(); 	
  
  }

  animate(){

  	let pipes=[];
  	let game=document.getElementById('game');
  	let panel=new Panel();
  	let sky=new Sky();
  	let bird=new Bird();
  	let pipe1=new Pipes(600,0);  	
  	let pipe2=new Pipes(600,1);  	
  	let pipe3=new Pipes(1000,0);  	
  	let pipe4=new Pipes(1000,1);  	
  	let pipe5=new Pipes(1400,0);  	
  	let pipe6=new Pipes(1400,1);  	

  	game.appendChild(panel.panel);  	
  	game.appendChild(sky.sky);
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
  	  	this.board.innerHTML="<h1>Score:"+bird.score+"</h1>";
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
  	document.onkeydown=this.checkKeyDown;
  	sky.sky.removeChild(bird.bird);  
  	for(let pipe of pipes){
  		sky.sky.removeChild(pipe.pipe);	
  	}	
    this.board.innerHTML='<h1>Game Over</h1>';
  	
  }

  checkKeyDown(e){
  	if(e.keyCode=='13'){
  	  //this.animate();
  	  //alert('pressed');
  	}  	
  }
}

export default Animator;