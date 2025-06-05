    function loadContent() {
   loadBlog();
 }

function loadBlog() {
    loadTitle();
    loadSubtitle();
    loadDate();
    loadBody();
}

function loadPageTitle() {
    var page_title = `Kiss My Apocalypse`;                          //ALTER THIS<~ 1
    document.getElementById('title').innerHTML = 
    page_title;
}

function loadTitle() {
    var category = `Kiss My Apocalypse`;                          //ALTER THIS<~ 2
    document.getElementById('blog-title').innerHTML = 
    category;
}

function loadSubtitle() {
    var title = `Marley Pond`;
    document.getElementById('blog-subtitle').innerHTML = 
    title;                                  //ALTER THIS<~ 3
}

function loadDate() {
    document.getElementById('blog-date').innerHTML = 
    `2025-06-05`;                                       //ALTER THIS<~ 4
}

function loadBody() {
    document.getElementById('blog-content').innerHTML =                 //ALTER THIS<~ 5
    `
    <p> 
    If we are ships passing in the night,</br>
    It seems that we are all sinking,</br>
    And I don’t want to be alone,</br>
    I can hear the hand is ticking,</br>
    So would you hold me close,</br>
    I’m not averse to taking risks,</br>
    And when the clock strikes midnight,</br>
    Kiss my apocalypse</br></br>

    The problems multifarious,</br>
    We engage in niche areas,</br>
    ‘Cause the way out is through,</br>
    A cluttered demon-lousy room,</br>
    But as the story has been read,</br>
    You make it through, step by step,</br>
    Avert your gaze as you must,</br>
    Tranquility to best the tempestuous</br></br>

    So would you hold me close,</br>
    As agony begets bliss,</br>
    And when the clock strikes midnight,</br>
    Kiss my apocalypse</br></br>

    So would you hold me close,</br>
    As agony begets bliss,</br>
    And when the clock strikes midnight,</br>
    Kiss my apocalypse,</br>
    Yeah I’ll hold you close,</br>
    Not all talk and no tick,</br>
    Promise me when it strikes midnight,</br>
    Kiss me on the apocalypse


    </p>
    `;
}