function getStyle(obj,name)
        {
            if(obj.currentStyle)
            {
                return obj.currentStyle[name];
            }
            else{
                return getComputedStyle(obj,false)[name];
            }
        }
        
       //startMove(oDiv,{width:400,height:400})
        function startMove(obj,json,fnEnd)//fnEnd参数是一个函数,运动结束的时候被调用
        {
            clearInterval(obj.timer);
            obj.timer=setInterval(function(){
                var bStop=true;   //假设所有的值都已经到了
                //开一个定时器30ms
                for(var attr in json)
                {
                    var cur=0;

                if(attr=="opacity")
                {
                    cur=Math.round(parseFloat(getStyle(obj,attr))*100);

                }
                else{
                    cur=parseInt(getStyle(obj,attr));
                }
                var speed=(json[attr]-cur)/6;
                speed=speed>0?Math.ceil(speed):Math.floor(speed);

                if(cur!=json[attr])
                   bStop=false;

                /*if(cur==json[attr])
                {
                    //clearInterval(obj.timer); 需要等所有人都到了再清空定时器

                    if(fnEnd) fnEnd();
                }
                else{*/

                if(attr=="opacity")
                {
                    obj.style.filter='alpha(opacity('+(cur+speed)+')';
                    obj.style.opacity=(cur+speed)/100;

                }
                else{
                    obj.style[attr]=cur+speed+'px';

                } 
             }

             if(bStop)
             {
                 clearInterval(obj.timer);
                 if(fnEnd) fnEnd();
             }
                
            },30)

        };