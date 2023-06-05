// Calculate and update countdown timers
function updateCountdown() {
    // Get the current time
    const now = new Date().getTime();
  
    // Set the event times (example: May 20, 2023 00:00:00)
    const eventTime1 = new Date("2023-06-15T00:00:00").getTime();
    const eventTime2 = new Date("2023-06-15T11:25:00").getTime();
  
    // Calculate the remaining time for Event 1
    const remainingTime1 = eventTime1 - now;
  
    // Calculate days, hours, minutes, and seconds for Event 1
    const days1 = Math.floor(remainingTime1 / (1000 * 60 * 60 * 24));
    const hours1 = Math.floor((remainingTime1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes1 = Math.floor((remainingTime1 % (1000 * 60 * 60)) / (1000 * 60));
    const seconds1 = Math.floor((remainingTime1 % (1000 * 60)) / 1000);
  
  // Update the countdown for Event 1
  const countdownElement1 = document.getElementById("countdown1");
  countdownElement1.innerHTML = `
    <div class="countdown-wrapper">
      <div class="countdown-item">
        <span>${days1}</span>
        <span>Days</span>
      </div>
      <div class="countdown-item">
        <span>${hours1}</span>
        <span>Hours</span>
      </div>
      <div class="countdown-item">
        <span>${minutes1}</span>
        <span>Minutes</span>
      </div>
      <div class="countdown-item">
        <span>${seconds1}</span>
        <span>Seconds</span>
      </div>
    </div>
    <div class="img-container">
      <img class="img-large" src="Asset/foto/durian1.jpg" alt="Event 1">
    </div>
  `;
  
  
    // Calculate the remaining time for Event 2
    const remainingTime2 = eventTime2 - now;
  
    // Calculate days, hours, minutes, and seconds for Event 2
    const days2 = Math.floor(remainingTime2 / (1000 * 60 * 60 * 24));
    const hours2 = Math.floor((remainingTime2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes2 = Math.floor((remainingTime2 % (1000 * 60 * 60)) / (1000 * 60));
    const seconds2 = Math.floor((remainingTime2 % (1000 * 60)) / 1000);
  
    // Update the countdown for Event 2
    const countdownElement2 = document.getElementById("countdown2");
    countdownElement2.innerHTML = `
    <div class="countdown-wrapper">
      <div class="countdown-item">
        <span>${days2}</span>
        <span>Days</span>
      </div>
      <div class="countdown-item">
        <span>${hours2}</span>
        <span>Hours</span>
      </div>
      <div class="countdown-item">
        <span>${minutes2}</span>
        <span>Minutes</span>
      </div>
      <div class="countdown-item">
        <span>${seconds2}</span>
        <span>Seconds</span>
      </div>
    </div>
    <div class="img-container">
      <img class="img-large" src="Asset/foto/musik.jpg" alt="Event 2">
    </div>
  `;
  
    // Update the countdown every second
    setTimeout(updateCountdown, 1000);
  }
  
  // Call the updateCountdown function to start the countdown
  updateCountdown();
  