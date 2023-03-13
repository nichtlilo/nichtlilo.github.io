function updateProgressBar(){
    const {scrollTop, scrollHeight} = document.documentElement;
    const scrollPosition = scrollTop / (scrollHeight - window.innerHeight) * 100;
    const scrollPercent = scrollPosition + '%';
    document.querySelector('#progress-bar').style.setProperty('--progress', scrollPercent);
    //console.log (scrollPercent);
    if (scrollPosition >= 50 && scrollPosition <= 99) {
      document.querySelector('#progress-bar').style.setProperty('background-color', '#f8f8f5');
      //console.log('50%');
    }
    else {
      document.querySelector('#progress-bar').style.setProperty('background-color', '#1c1c1c');
    }
  }
  
document.addEventListener('scroll', updateProgressBar);


