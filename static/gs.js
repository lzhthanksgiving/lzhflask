document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(MotionPathPlugin,MorphSVGPlugin,ScrollTrigger,SplitText);
    gsap.set(".sentence",{opacity:1});
    SplitText.create(".sentence",{
        type:"lines",
        mask:"lines",
        autoSplit:true,
        linesClass:"line",
        onSplit: (self) => {
            split1 = gsap.from(self.lines, {
                duration: 7,
                yPercent: 150,
                opacity: 0,
                stagger: 2.3,
                rotation: 5,
                scrollTrigger:{
                    trigger:'.sentence',
                    start:'bottom 85%',
                    end:'top 15%',
                    scrub:1
                },
                ease: "expo.out",
            });
        }
    });
    SplitText.create(".poem",{
        type:"chars",
        mask:"chars",
        autoSplit:true,
        onSplit:(self)=>{
            split2=gsap.from(self.chars,{
                duration:8,
                xPercent:0,
                opacity:0,
                stagger:0.5,
                scrollTrigger:{
                    trigger:'.poem',
                    start:'bottom 88%',
                    end:'top 43%',
                    scrub:2
                },
                ease:"power2.out",
            });
        }
    });
    SplitText.create(".goodbye",{
        type:"chars",
        mask:"chars",
        autoSplit:true,
        onSplit:(self)=>{
            split=gsap.from(self.chars,{
                duration:3,
                yPercent:-100,
                rotation:"random(-80,80)",
                opacity:0,
                stagger:0.4,
                scrollTrigger:{
                    trigger:'.goodbye',
                    start:'bottom 88%',
                    end:'top 43%',
                    scrub:5,
                },
                ease:"power2.out",
            });
        }
    });
    SplitText.create(".wenzi2",{
        type:"lines words",
        mask:"lines",
        autoSplit:true,
        onSplit:(self)=>{
            split3 = gsap.timeline({
                scrollTrigger:{
                    trigger:'.wenzi2',
                    start:'bottom 88%',
                    end:'top -50%', 
                    scrub:3
                }
            })
            .from(self.lines,{
                duration: 1,
                xPercent: 150,
                opacity: 0,
                stagger: 0.2,
                ease: "power2.out",
            })
            .to(self.lines, {
                duration: 1,
                xPercent: -150,
                opacity: 0,
                stagger: 0.2,
                ease: "power2.in"
            }, "+=0.5"); 
        }
    });
    const highlight=document.querySelectorAll('.highlight');
    highlight.forEach(zi=>{
        zi.style.color='#FFA726';
    });
    gsap.to(".ufo2",{
        duration:8,
        scrollTrigger:{
            trigger:'#svg',
            start:'top 99%',
            end:'top 15%',
            scrub:5
        },
        motionPath:{
            path:"#path",
            align:"#path",
            alignOrigin:[0.5,0.5]
        },
        ease:"power3.inOut",
    });
    gsap.to(".ufo3",{
        duration:7,
        opacity:1,
        scrollTrigger:{
            trigger:'#svg2',
            start:'top 90%',
            end:'bottom 99%',
            scrub:5
        },
        motionPath:{
            path:"#path2",
            align:"#path2",
            alignOrigin:[0.5,0.5],
        },
        ease:"power3.inOut",
    });
    gsap.to(".ufo4",{
        duration:7,
        opacity:1,
        scrollTrigger:{
            trigger:'#svg3',
            start:'top 90%',
            end:'bottom 99%',
            scrub:5
        },
        motionPath:{
            path:"#path3",
            align:"#path3",
            alignOrigin:[0.5,0.5],
        },
        ease:"power3.inOut",
    });

    gsap.fromTo(".horizon-1",
        {x: "0%" },
        {
            x: "-200%",
            duration:12,
            ease:"none",
            repeat:1,
        }
    );
    gsap.fromTo(".horizon-2",
        {x: "0%" },
        {
            x: "-200%",
            duration:12,
            ease:"none",
            repeat:1,
            delay:6
        }
    );
    const open=document.querySelector(".lamp");
    const light=document.querySelector(".light");
    console.log("second");
    open.addEventListener("click",()=>{
        const isopen=light.style.opacity==='1';
        light.style.opacity=isopen?'0':'1';

    });
});