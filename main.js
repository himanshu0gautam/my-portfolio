// var typed=new typed(".text",{
//     Strings:["Frontend Developer", " Web Developer"],
//     typeSpeed:100,
//     backSpeed:100,
//     backDelay:1000,
//     loop:true
// }); 


// Initialize Lenis
const lenis = new Lenis({
  lerp: 0.1,
  duration: 2, // Duration of the scroll animation in seconds
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});


window.onload = function() {
    var typed = new Typed('.text', {
      strings: ["Full stack Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    });
  };


  const scriptURL = 'https://script.google.com/macros/s/AKfycbwT8tUgTrB0ZtDn9cbEgyeTTtziv40-zk_iLwOGMD4DdlIZQ2xLNHObacVPxtX01kc/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })

