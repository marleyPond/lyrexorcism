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
    var page_title = `The Smallest Pangolin`;                          //ALTER THIS<~ 1
    document.getElementById('title').innerHTML = 
    page_title;
}

function loadTitle() {
    var category = `The Smallest Pangolin`;                          //ALTER THIS<~ 2
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
    `2025-06-06`;                                       //ALTER THIS<~ 4
}

function loadBody() {
    document.getElementById('blog-content').innerHTML =                 //ALTER THIS<~ 5
    `
    <p> 
    I travel on, beset by endless winds,</br>
    The wilds, they bristle as I forage in their midst,</br>
    My solitary journey never quits,</br>
    With only what I need, I move along, my mark,</br>
    Carried off into the darkness, as if mist</br></br>

    In forbearance, I bolster my resolve,</br>
    Through sun-drenched days and frigid lunar calm,</br>
    Throughout discomfort and grief,</br>
    I remain throughout tumult, my patience besting every siege</br></br>

    I don’t remember much from my youth,</br>
    The days blending together in the cacophonous group,</br>
    The others far greater than I,</br>
    Who due to my hesitation remained relatively slight</br></br>

    What nature sought to teach,</br>
    My sibling gathered as readily as the grub within their cheeks,</br>
    My anxious wells, and grips me deep,</br>
    But never more-so than the night that brought us sleep</br></br>

    First we felt it in the ground,</br>
    I was one of the first who bound around myself my scaly cowl,</br>
    With ferocity, they howled,</br>
    But when I glanced, and they too scattered, </br>
    It was clear this was a different kind of loud</br></br>

    Carried off into the sky,</br>
    The others resolve dissolving, they all alight into the night,</br>
    The fell beasts have captured stars,</br>
    And imprison them like angels, they communicate in their celestial art</br></br>

    My days passing without note,</br>
    I think nary of the night that turned to day,</br>
    The lesson taught in wretched fashion, I abide,</br>
    I want for nothing, nor do I run, nor do I fight

    </p>
    `;
}