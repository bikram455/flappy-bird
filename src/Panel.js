class Panel{
  constructor(){
  	this.height=10;
  	this.width=100;
  	this.background='cadetblue';

  	this.panel=document.createElement('div');
  	this.panel.id='board';
  	this.panel.style.textAlign='center';
  	this.panel.style.width=this.width+'%';
  	this.panel.style.height=this.height+'%';
  	this.panel.innerHTML='<h1>Score: 0</h1>';
  	this.panel.style.background=this.background;
  }
}

export default Panel;