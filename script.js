
function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"), //main is the parent of all div s
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
        };
    }

    });
   
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

function navAnimation(){
    var nav = document.querySelector("nav")

    nav.addEventListener("mouseenter",function(){
        let tl = gsap.timeline()

        tl.to("#nav-bottom",{ //height increses
            height : "21vh",
            duration:0.5
        })
        tl.to(".nav-part2 h5",{ //shows h5's
            display:"block",
            duration:0.1
        })
        tl.to(".nav-part2 h5 span",{
            y:0,
            // duration:0.3,
            stagger : {
                amount : 0.5
            }
        })
    })   

    nav.addEventListener("mouseleave",function(){
        let tl = gsap.timeline()

    
        tl.to(".nav-part2 h5 span",{
            y:25,
            // duration:0.3,
            stagger : {
                amount : 0.2
            }
        })
        tl.to(".nav-part2 h5",{
            display:"none",
            duration : 0.1
        })
        tl.to("#nav-bottom",{
            height:0,
            duration:0.2
        })
    })

}

function page2Animation(){
    var rightElems = document.querySelectorAll(".right-elem")
    // console.log(rightElems) // all data present in rightElems are in the form of NodeList -> slightly similar to array
    rightElems.forEach(function(elem){ //we have 4 elements in ".right-elem"
        elem.addEventListener("mouseenter",function(){ //elem represents each element in ".right-elem"
            //console.log(elem.childNodes);
            gsap.to(elem.childNodes[3],{
                opacity:1,
                scale:1
            }) // 3rd childnode is img
        })
        elem.addEventListener("mouseleave",function(){
            // console.log("not hello");
            gsap.to(elem.childNodes[3],{
                opacity:0,
                scale:0
            })
        })
        elem.addEventListener("mousemove",function(dets){
            // console.log(elem.getBoundingClientRect().y);
            gsap.to(elem.childNodes[3],{
                x:dets.x - elem.getBoundingClientRect().x - 90,
                y:dets.y - elem.getBoundingClientRect().y - 215
            })
        
        })
    })


}


function page3VideoAnimation()
{
    var page3Center = document.querySelector(".page3-center")
    var video = document.querySelector("#page3 video")

    page3Center.addEventListener("click", function(){
        video.play()
        gsap.to(video,{
            transform: "scaleX(1) scaleY(1)",
            opacity:1,
            borderRadius:0
            
        })
    })

    video.addEventListener("click",function(){
        video.pause()
        gsap.to(video,{
            transform: "scaleX(0.7) scaleY(0)",
            opacity:0,
            borderRadius:"30px"
        })
    })

    //----------------->

    var sections = document.querySelectorAll(".sec-right")

    sections.forEach(function(elem){ //value of elem are two sections
        // console.log(elem.childNodes[3]);
        
        elem.addEventListener("mouseenter",function(){
            elem.childNodes[3].style.opacity = 1;
            elem.childNodes[3].play()
        })
        elem.addEventListener("mouseleave",function(){
            elem.childNodes[3].style.opacity = 0
            elem.childNodes[3].load() // load restarts the video
        })
    })



}

function page6Animations()
{
    gsap.from("#btm6-part2 h4",{
        x:0,
        duration:1,
        scrollTrigger:{
            trigger:"#btm6-part2",
            scrollerr:"#main",
            markers:true,
            strt:"top 80%",
            end: "top 10%",
            scrub:true
        }
    })
}

locomotiveAnimation()
navAnimation() 
page2Animation()
page3VideoAnimation()
page6Animations()

