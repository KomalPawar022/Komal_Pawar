
$(document).ready(function () { 
    $("#image1").hide(); 
    $("#hide1").attr('disabled', true); 
    $("#hide1").click(function () { 
        $("#image1").hide(); 
        $("#hide1").attr('disabled', true); 
        $("#show1").attr('disabled', false); 

    }); 
    $("#show1").click(function () { 
        $("#image1").show(); 
        $("#hide1").attr('disabled', false); 
        $("#show1").attr('disabled', true); 
    }); 
}); 


$(document).ready(function () { 
    $("#image2").hide(); 
    $("#hide2").attr('disabled', true); 
    $("#hide2").click(function () { 
        $("#image2").hide(); 
        $("#hide2").attr('disabled', true); 
        $("#show2").attr('disabled', false); 

    }); 
    $("#show2").click(function () { 
        $("#image2").show(); 
        $("#hide2").attr('disabled', false); 
        $("#show2").attr('disabled', true); 
        // $('body').scrollRight($(document).outerWidth()); 
       

    }); 
}); 

$(document).ready(function () { 
    $("#image3").hide(); 
    $("#hide3").attr('disabled', true); 
    $("#hide3").click(function () { 
        $("#image3").hide(); 
        $("#hide3").attr('disabled', true); 
        $("#show3").attr('disabled', false); 

    }); 
    $("#show3").click(function () { 
        $("#image3").show(); 
        $("#hide3").attr('disabled', false); 
        $("#show3").attr('disabled', true); 
    }); 
}); 




var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

const intersectionCallback = (items) => {
    console.log(items);
    for (const item of items) {
      if (item.isIntersecting) {
        if (item.target.id == "skills") {
          item.target.classList.add("techskills");
        }
        if (item.target.id == "about") {
          item.target.classList.add("about-animate");
        }
        if (item.target.id == "contact") {
          item.target.classList.add("contact-animate");
        }
        if (item.target.id == "projects") {
          item.target.classList.add("projects-animate");
        }
      }
    }
  };
  
  const observer = new IntersectionObserver(intersectionCallback);
  
  const items = document.getElementsByClassName("animate");
  for (const item of items) {
    observer.observe(item);
  }
  
//   document.getElementById("body").addEventListener("scroll", fun);  
//   function fun() {  
    
    
//   } 


$(window).resize(function(){
  
  if(window.innerWidth < 750) {
    let col = document.getElementsByClassName("col-1");
    for(let i=0;i<col.length;i++)
    col[i].parentElement.removeChild(col[i]);

    col = document.getElementsByClassName("col-1")
    for(let i=0;i<col.length;i++)
    col[i].parentElement.removeChild(col[i]);
    col = document.getElementsByClassName("col-1")
    for(let i=0;i<col.length;i++)
    col[i].parentElement.removeChild(col[i]);
  }
  if(window.innerWidth > 750){
    // $(window).load(true);
    location.reload(true);
  }
});



