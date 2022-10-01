
 


    // -----------------------------------
    var span1=document.getElementsByTagName('span');
    var div1 = document.getElementsByClassName ('imgb');
    var l=0;
    span1[1].onclick=()=>{
        l++;
        for(var i of div1){
            if(l==0){ i.style.left="0%";}
            if(l==1){ i.style.left="-30%";}
            if(l==2){ i.style.left="-60%";}
            if(l==3){ i.style.left="-90%";}
            if(l==4){ i.style.left="-120%";}
            if(l>4){ l=4;}
        }
    }
    span1[0].onclick=()=>{
        l--;
        for(var i of div1){
            if(l==0){ i.style.left="0%";}
            if(l==1){ i.style.left="-30%";}
            if(l==2){ i.style.left="-60%";}
            if(l==3){ i.style.left="-90%";}
            
            if(l<0){ l=0;}
        }
    }

    // ----------------------------------
    var span=document.getElementsByClassName ('span2');
    var div = document.getElementsByClassName ('imgk');
    var l=0;
    span[1].onclick=()=>{
        l++;
        for(var i of div){
            if(l==0){ i.style.left="0%";}
            if(l==1){ i.style.left="-30%";}
            if(l==2){ i.style.left="-60%";}
            if(l==3){ i.style.left="-90%";}
            if(l==4){ i.style.left="-120%";}
            if(l>4){ l=4;}
        }
    }
    span[0].onclick=()=>{
        l--;
        for(var i of div){
            if(l==0){ i.style.left="0%";}
            if(l==1){ i.style.left="-30%";}
            if(l==2){ i.style.left="-60%";}
            if(l==3){ i.style.left="-90%";}
            
            if(l<0){ l=0;}
        }
    }
    
    