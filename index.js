
document.getElementById("nav_signin").addEventListener("click",function(){
    document.querySelector(".popup").style.display="flex";
})
document.getElementById("popup_close").addEventListener("click",function(){
    document.querySelector(".popup").style.display="none";
})

// function for free trial

document.getElementById("trialbtn").addEventListener("click",function(){
    document.querySelector(".trial_popup").style.display="flex";
})
document.getElementById("trial_close").addEventListener("click",function(){
    document.querySelector(".trial_popup").style.display="none";
})





    let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += "active";
}

// bottom........................
var span=document.getElementsByTagName('span');
    var div = document.getElementsByClassName ('imgbox');
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
               



