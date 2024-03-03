gsap.from(".page1", {
    y :900,
    duration :5,
    opacity :0,
    delay :2
})
gsap.to("#loading", {
    rotate:360,
    repeat : -1,
    duration :6,
    delay:0.5,
    opacity:0

})
gsap.to(".page1base h1", {
    duration :6,
    delay:0.5,
    opacity:0
})

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});