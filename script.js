
(function(){
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }
    
    
    var box=document.getElementById('pitch-invader-box');
    var xMin=0,yMin=0;
    var xMax=window.innerWidth-100;
    var yMax=window.innerHeight-150;
    
    function run(){
    // var left=window.getComputedStyle(box, null).getPropertyValue("left");
    // left=left.splice(0,-2);
    // var val1=eval(left);
    // var top=window.getComputedStyle(box, null).getPropertyValue("top");
    // top=top.slice(0,-2);
    // var val2=eval(top);
    
    var randomX= getRandomInt(xMin,xMax);
    var randomY=getRandomInt(yMin,yMax);
    var str1= randomX+"px";
    var str2=randomY+"px";
    box.style.left=str1;
    box.style.top=str2;
    
    }

    function win(){
        alert("You win");
    }
    
    
    box.addEventListener('mouseover',run);
    box.addEventListener('click',win);

})();

