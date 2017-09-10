  
        var y = document.getElementById("yinshen");
        var c = document.getElementById("ckzwjs");
       var a= document.getElementById("chaojida");

var b = 0;
c.onclick=function(){
    console.log("1")
if(b==0){
         y.style.display = "none";
    c.innerHTML="查看自我介绍";
    a.style.display = "block"
        b=1
      
         
      

}else if(b==1){
        b=0
        y.style.display = "block";
        c.innerHTML="查看主页面";
         a.style.display = "none" 
         }       
}
