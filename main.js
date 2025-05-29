// var typed=new typed(".text",{
//     Strings:["Frontend Developer", " Web Developer"],
//     typeSpeed:100,
//     backSpeed:100,
//     backDelay:1000,
//     loop:true
// }); 

window.onload = function() {
    var typed = new Typed('.text', {
      strings: ["Frontend Developer", "Web Developer"],
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

