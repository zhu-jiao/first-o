// JavaScript Document
//创建类
var starObj=function(){
	this.x;
	this.y;
	
	this.picNo;
	this.timer;
	this.xSpd;
	this.ySpd;
	}

starObj.prototype.init=function(){
	this.x=Math.random()*600+100; //星星的位置
	this.y=Math.random()*300+150;
	
	this.picNo=Math.floor(Math.random()*7); // 让星星随机一闪一闪,每一帧随机变化
	this.timer=0;
	
	this.xSpd=Math.random()*3-1.5; //让星星速度随机 上下任意运动 速度
	this.ySpd=Math.random()*3-1.5;
	}

starObj.prototype.update=function(){ 
//星星的速度在每一帧的时候都作用于x，y坐标
	this.x+=this.xSpd*deltaTime*0.004; //速度的大小调整
	this.y+=this.ySpd*deltaTime*0.004;
	//如果x，y超过了区间，则init重生
	if(this.x<100||this.x>700)
	{
		this.init();
		return; //不执行下面的代码
		}
	if(this.y<150||this.y>450)
	{
		this.init()
		return;
		}
	//每一帧变化间隔	控制使其帧变化间隔均匀
	this.timer+=deltaTime;
	if(this.timer>50)
	{
		this.picNo+=1;
		this.picNo%=7;
		this.timer=0;
		}
	
	}
starObj.prototype.draw=function(){
	
	//save()
	ctx.save();
	//globalAlpha全局透明度
	ctx.globalAlpha=life;//[0,1]
	ctx.drawImage(starPic,this.picNo*7,0,7,7,this.x,this.y,7,7);
	
	//restore()
	ctx.restore();
	}
function drawStars()
{
	for(i=0;i<num;i++)
	{
		stars[i].update();
		stars[i].draw();
	}	
}
function aliveUpdate()
{
	if(switchy) //在图片区域范围内
	{
		//show stars
		life+=0.03*deltaTime*0.05;
		if(life>1)
		{
			life=1;
		}
	}
	else
	{
		//hide stars
		life-=0.03*deltaTime*0.05;
		if(life<0)
		{
			life=0;
		}
	}
}