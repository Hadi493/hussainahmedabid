var tl = gsap.timeline();

tl.from(".page-1 .nav h1", {
    y: 10,
    duration: 1,
    opacity: 0,
    delay: 0.3,
});

tl.from(".page-1 .text h1", {
    y: 10,
    duration: 1,
    opacity: 0,
});

tl.from(".page-1 .text h3", {
    y: 10,
    duration: 1,
    opacity: 0,
});