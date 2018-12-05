function ajax(url,fnSucc,fnFailed)
{
    //1.创建ajax对象
                if(window.XMLHttpRequest)//为了放置ie6报错
                {
                    var oAjax=new XMLHttpRequest();
                }
                else
                {
                     var oAjax=new ActiveXObject("Microsoft.XMLHTTP");
                }

                //2.连接服务器
                //open(方法，文件名,异步传输)
                oAjax.open('GET',url,true);

                //3.发送请求
                oAjax.send();

                //4.接收返回
                oAjax.onreadystatechange=function()
                {
                    //oAjax.readyState    //浏览器和服务器，进行到哪一步了
                    if(oAjax.readyState==4)//读取（通信）完成
                    {
                        if(oAjax.status==200)//成功
                        {
                            fnSucc(oAjax.responseText);        
                        }
                        else
                        {
                            if(fnFailed)
                            {
                                fnFailed(oAjax.responseText);
                            }
                        }
                    }

                };
}