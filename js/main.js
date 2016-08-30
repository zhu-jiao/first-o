// JavaScript Document
var can;
var ctx;

var w;
var h;
var girlPic=new Image();
var starPic=new Image();

var num=60;
var stars=[];

var lastTime;
var deltaTime;

var switchy=false;
var life=0;
//HTML加载完成后执行这个函数
function init()
{
	can=document.getElementById("canvas");
	ctx=can.getContext("2d");  //获得画布 获取ctx这个工具
	
	w=can.width; //画布的宽
	h=can.height; //画布的高
	
	document.addEventListener("mousemove",mousemove,false);//给鼠标添加移动的事件监听
	
	girlPic.src="src/girl.jpg"; //初始化时加载进图片
	starPic.src="src/star.png";
	
	for(var i=0; i<num;i++) //使用类？？
	{
		var obj=new starObj();
		stars.push(obj);
		stars[i].init();	
	}
	
	lastTime=Date.now();  //？？
	gameloop();
}
document.body.onload=init;  //init这个函数在在HTML加载完后执行，把js函数调用起来
//帧绘画 每隔一段时间刷新canves上面的内容
function gameloop(){
	//循环调用这个函数
	window.requestAnimFrame(gameloop); //两帧之间刷新的时间间隔不是一个固定值
	
	var now=Date.now();  //??
	deltaTime=now-lastTime;
	lastTime=now;
	
	drawBackground(); //绘制背景
	drawGirl();       //绘制女孩
	
	drawStars()
	aliveUpdate()
	}
//绘制背景
function drawBackground()
{
	ctx.fillStyle="#393550"; //填充的样式 紫色
	ctx.fillRect(0,0,w,h);
}
//绘制图片
//drawImage(image,x,y,width,heidht)x,y是在canvas上的坐标，width,height指在图片的宽度和高度
//x轴坐标正方向向右，y轴正方向向下，（0,0）在canvas左上角
function drawGirl(){
	ctx.drawImage(girlPic,100,150,600,300);
	}
	//
function mousemove(e)
{
	if(e.offsetX||e.layerX)//？？
	{
		var px=e.offsetX==undefined?e.layerX:e.offsetX;
		var py=e.offsetY==undefined?e.layerY:e.offsetY; //检测鼠标移动事件
		
		if(px>100&&px<700&&py>150&&py<450)
		{
			switchy=true; //在区域内
			}
		else
		{
			switchy=false;//不在区域内
			}
	}
}