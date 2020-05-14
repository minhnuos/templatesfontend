document.addEventListener("DOMContentLoaded",function() {
    var angle_up = document.querySelector(".fa-angle-up");
    var angle_down = document.querySelector(".fa-angle-down");
    var img_slide = document.getElementById('img_slide');
    var count = 0;
    var src1 = "slide-1.jpg";
    var src2 = "slide-2.jpg";
    angle_up.onclick = function() {
        count++;
        if(count%2 == 0) {
            img_slide.src = "slide-1.jpg";
        } else {
            img_slide.src = "slide-2.jpg";
        }
    }
    angle_down.onclick = function() {
        count--;
        if(count%2 == 0) {
            img_slide.src = "slide-1.jpg";
        } else {
            img_slide.src = "slide-2.jpg";
        }
    }
},false)