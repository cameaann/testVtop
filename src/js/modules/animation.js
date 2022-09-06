var tl = gsap.timeline();
tl.from('.signup', {duration: .5, autoAlpha:0, stagger:0.5, y:30  });
// t1.from('.myPath', {
//     duration:.5,
//     autoAlpha:0,
//     stagger:0.5, });
tl.from('.signup__rightbox-header', {duration: .5, autoAlpha:0, stagger:0.5, y:30 } );
tl.from('.form-group', {duration: .5, autoAlpha:0, stagger:0.5, y:30 } );
tl.from('.sign-footer', {duration: .5, autoAlpha:0, stagger:0.5, y:30 } );