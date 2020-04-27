const $ = document
const $progressBar = $.getElementById(`progress-bar`)

const $navSummaryList = $.getElementById(`nav-summary-list`)
const $nextArticleTimer = $.querySelector(`.next-article-timer`)
const $articleTitle = $.getElementById(`article-title`)
const $nextArticleTitle = $.getElementById(`next-article-title`)
const $cancelButton = $.getElementById(`cancel-button`)
const $summaryLine = $.getElementById(`summary-line`)

let nextArticle;
let nextArticleIntervalReference; 
let cancelNextArticleTimer = false;

let nextArticleTimer = 10; // Assign the value of 10 to the Timer variable
let isNextArticleTimerActive = false; // Assing boolean value false for the next article

const summaryList = [] // Create an array for the Summary List 

const articleDataBase = [ // Creates a database of articles available
    {
        title: "Binary Search Tree", 
        url: "./article-2.html"
    },
    {
        title: "Boids: An artificial life program", 
        url: "./article-3.html"
    },
    {
    title: "Javascript and the UI", 
    url: "index.html"
    }
]


function  pickAnArticle () { // Generates a randomic ID for the articles within the Array
    const ramdomArticleIndex = Math.floor(Math.random () * 3); //Randomizing the ID
    // console.log(ramdomArticleIndex);
    if (articleDataBase[ramdomArticleIndex].title === $articleTitle.innerText ) { // Comparing the random ID with the current Article
        return pickAnArticle () // If the ID generared is equal to the current Article, generates another random ID
    }else {
        nextArticle = articleDataBase[ramdomArticleIndex] //If the ID is not equal to the Current Article, assign the ID
    }
}

function nextArticleTimerHandler() { // Creates the function to handle the Stopwatch
    if (nextArticleTimer  > 0 ) { //Comparing if value is greater than 0 
        nextArticleTimer --; // If so, decrease the value (-1)
        console.log(nextArticleTimer)
        $nextArticleTimer.textContent = nextArticleTimer; // Assign the timer "second" value to the span element on HMTL
        
    } else {
        loadArticle(nextArticle); 
    }
}

function stopNextArticleTimer () {
    isNextArticleTimerActive = false;
    nextArticleTimer = 10;
    window.clearInterval(nextArticleIntervalReference)
}

$cancelButton.addEventListener(`click`, () => {
    stopNextArticleTimer();
    cancelNextArticleTimer = true;
    // $cancelButton.style.opacity = 0;



