function startMove(obj,json,callback){
          clearInterval(obj.timer);
          var iSpeed=0,iCur;
          obj.timer=setInterval(function(){
               var bstop=true;
              for(var attr in json){
                 if(attr=='opacity'){
                    iCur=parseFloat(getStyle(obj,attr))*100;
                 }else{
                   iCur=parseInt(getStyle(obj,attr));
                 }
                iSpeed= (json[attr]-iCur)/7;
                iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
                if(attr=='opacity'){
                    obj.style[attr]=(iCur+iSpeed)/100;
                    
                }else{
                   
                    obj.style[attr]=(iCur+iSpeed) +'px';
                   
                }
                if(iCur!=json[attr]){
                      bstop=false;
                }
              }
              if(bstop){
                 clearInterval(obj.timer)
                 typeof callback =='function'?callback() :'';
              }
          },30)
    }
/*封装兼容性方法getStyle(elem,prop)*/
   function getStyle(elem,prop){
     if(window.getComputedStyle){
        return window.getComputedStyle(elem,null)[prop];
     }else{
        return elem.currentStyle[prop];
     }
  }