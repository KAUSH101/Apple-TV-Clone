
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

var span4=document.getElementsByClassName ('span4');
    var div4 = document.getElementsByClassName ('imgbox');
    var l=0;
    span4[1].onclick=()=>{
        l++;
        for(var i of div4){
            if(l==0){ i.style.left="0%";}
            if(l==1){ i.style.left="-30%";}
            if(l==2){ i.style.left="-60%";}
            if(l==3){ i.style.left="-90%";}
            if(l==4){ i.style.left="-120%";}
            if(l>4){ l=4;}
        }
    }
    span4[0].onclick=()=>{
        l--;
        for(var i of div4){
            if(l==0){ i.style.left="0%";}
            if(l==1){ i.style.left="-30%";}
            if(l==2){ i.style.left="-60%";}
            if(l==3){ i.style.left="-90%";}
            
            if(l<0){ l=0;}
        }
    }





    var span2=document.getElementsByClassName ('span2');
    var div1 = document.getElementsByClassName ('imgk');
    var l=0;
    span2[1].onclick=()=>{
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
    span2[0].onclick=()=>{
        l--;
        for(var i of div1){
            if(l==0){ i.style.left="0%";}
            if(l==1){ i.style.left="-30%";}
            if(l==2){ i.style.left="-60%";}
            if(l==3){ i.style.left="-90%";}
            
            if(l<0){ l=0;}
        }
    }




    // -----------------------------------
    var span=document.getElementsByClassName ('span3');
    var div = document.getElementsByClassName ('imgb');
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


    // ---------------------------------------query section
    const faqs = document.querySelectorAll(".faq");
    faqs.forEach((faq) =>{
        faq.addEventListener("click",() =>{
            faq.classList.toggle("active");
        })
    })
               



