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
    var page_title = `Hit Maker`;                          //ALTER THIS<~ 1
    document.getElementById('title').innerHTML = 
    page_title;
}

function loadTitle() {
    var category = `Hit Maker`;                          //ALTER THIS<~ 2
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
    Everyone must play within the same key,</br>
    Everyone must abide the same melody,</br>
    When there is dissonance and cacophony,</br>
    When there is discordance, </br>
    That’s when they’ll call me</br></br>

    I’m the Hit Maker,</br>
    Enter without a key,</br>
    My refrain,</br>
    Is one of ivory</br></br>

    My genre, is sweet chin music,</br>
    My leitmotif is ever-elusive,</br>
    Ensure you play your part,</br>
    Lest rend in cleft your heart</br></br>

    ‘Cause I’m the Hit Maker,</br>
    Enter without a key,</br>
    My refrain,</br>
    Is one of ivory,</br>
    My sustain,</br>
    Of penumbras oeuvre,</br>
    My wine’s got legs,</br>
    With high heels,</br>
    Yeah, My hi hat plays,</br>
    While the bass conceals</br>

    Hit Maker,</br>
    Melodious affect,</br>
    I compose the end,</br>
    In accordance with the rest,</br>
    You play it flat,</br>
    And I’m gonna play it sharp,</br>
    When you are out of tune,</br>
    Then I’m gonna play it sharp

    </p>
    `;
}