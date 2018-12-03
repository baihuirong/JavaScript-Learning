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
        

        function startMove(obj,attr,iTarget,fnEnd)//fnEnd参数是一个函数,运动结束的时候被调用
        {
            clearInterval(obj.timer);
            obj.timer=setInterval(function(){
                //开一个定时器30ms
                var cur=0;

                if(attr=="opacity")
                {
                    cur=Math.round(parseFloat(getStyle(obj,attr))*100);

                }
                else{
                    cur=parseInt(getStyle(obj,attr));
                }
                var speed=(iTarget-cur)/6;
                speed=speed>0?Math.ceil(speed):Math.floor(speed);

                if(cur==iTarget)
                {
                    clearInterval(obj.timer); 

                    if(fnEnd) fnEnd();
                }
                else{
                    if(attr=="opacity")
                    {
                        obj.style.filter='alpha(opacity('+(cur+speed)+')';
                        obj.style.opacity=(cur+speed)/100;

                        document.getElementById('txt1').value=obj.style.opacity;

                    }
                    else{
                        obj.style[attr]=cur+speed+'px';

                    }
                }
            },30)

        };