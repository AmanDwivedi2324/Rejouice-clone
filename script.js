function locoScroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

locoScroll();

function cursorEffect(){
    var page1Content = document.querySelector("#page1-content");
    var cursor = document.querySelector("#cursor");

page1Content.addEventListener("mousemove",function(dets){
    // cursor.style.left = dets.x+"px";
    // cursor.style.top = dets.y+"px";

    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
    })
})

page1Content.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:1,
        opacity : 1
    })
})

page1Content.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0,
        opacity : 0
    })
})
}

cursorEffect();

function page2Animation(){
    gsap.from("#bottom-div h1",{
        y:120,
        stagger:0.2,
        duration:2,
        scrollTrigger:{
            trigger: "#page2",
            scroller: "#main",
            start: "top 65%",
            end: "top 64%",
            // markers: true,
            scrub: 4
        }
    })
    
    gsap.from("#top-div h4",{
        y:120,
        stagger:0.2,
        duration:2,
        scrollTrigger:{
            trigger: "#page2",
            scroller: "#main",
            start: "top 90%",
            end: "top 89%",
            // markers: true,
            scrub: 4
        }
    })
}

page2Animation();

function page4Animation(){
    gsap.from("#page4-bottom h1",{
        y:120,
        stagger:0.2,
        duration:2,
        scrollTrigger:{
            trigger: "#page4",
            scroller: "#main",
            start: "top 65%",
            end: "top 64%",
            // markers: true,
            scrub: 4
        }
    })
    
    gsap.from("#page4-top h4",{
        y:120,
        stagger:0.2,
        duration:2,
        scrollTrigger:{
            trigger: "#page4",
            scroller: "#main",
            start: "top 90%",
            end: "top 89%",
            // markers: true,
            scrub: 4
        }
    })
}

page4Animation();

// var svgTxt = document.querySelector("#page5 h1");
// var svg = document.querySelector("#page5 video");

// svg.addEventListener("mousemove",function(){
//     svgTxt.style.transition = "all ease 0.5s";
//     svgTxt.style.opacity = "1";
//     svgTxt.style.transform = "scale(1)";
    
// })

// svg.addEventListener("mouseleave",function(){
//     svgTxt.style.transition = "all ease 0.5s";
//     svgTxt.style.opacity = "0";
//     svgTxt.style.transform = "scale(0)";
    
// })

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });