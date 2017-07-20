class Sky{

  constructor(){
  	this.height=633;
  	this.width=1520;
  	this.background='url("./images/background.png")';
  	this.position='relative';

  	this.sky=document.createElement('div');
  	this.sky.id='sky';
  	this.sky.style.height=this.height;
  	this.sky.style.width=this.width;
  	this.sky.style.position=this.position;
  	this.sky.style.background=this.background;
  	this.sky.style.backgroundSize='contain';
  	this.sky.style.overflow='hidden';
  	this.sky.style.textAlign='center';
  }

  append(object){
  	this.sky.appendChild(object);
  }
}

export default Sky;