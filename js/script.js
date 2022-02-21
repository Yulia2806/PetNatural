document.addEventListener('DOMContentLoaded', function () {
    const deadline = new Date();
    deadline.setHours(deadline.getHours() + 2);
    let timerId = null;
       

    function countdownTimer() {
    let now = new Date().getTime();
      const diff = deadline - now;
      if (diff <= 0) {
        clearInterval(timerId);
      }
      
      const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
     
      $hours.textContent = hours < 10 ? '0' + hours : hours;
      $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
      $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
     
    }
    
    const $hours = document.querySelector('.timer__hours');
    const $minutes = document.querySelector('.timer__minutes');
    const $seconds = document.querySelector('.timer__seconds');
    
    countdownTimer();
    
    timerId = setInterval(countdownTimer, 1000);
  });
  // 
  let d = new Date();
  let day = d.getDate();
  let month=d.getMonth() + 1;
  let year=d.getFullYear();

  let today = 'Order date: ' + day + "." + month + "." + year;
 
  let data = document.querySelector('.data__text');

  data.textContent = today;
