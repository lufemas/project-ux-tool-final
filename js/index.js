
const $ = document
const $progressBar = $.getElementById(`progress-bar`)



window.addEventListener(`scroll`, () => { // Event listener Scrolling page 
    const progressBarPercentage = ( window.scrollY/ // Calculates the percentage representation of the scrolled page  
        ($.documentElement.scrollHeight - $.documentElement.clientHeight) ) * 100 
     $progressBar.style.width = `${progressBarPercentage}%` // Assign the value to the width property of the element with id "progress-bar"
   

  

});