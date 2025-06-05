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
    var page_title = `Hot Takeover`;                          //ALTER THIS<~ 1
    document.getElementById('title').innerHTML = 
    page_title;
}

function loadTitle() {
    var category = `Hot Takeover`;                          //ALTER THIS<~ 2
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
    It’s ‘all the rage’ that makes my blood boil,</br>
    Influence game has got me feelin’ turmoil,</br>
    It’s all the same, yeah, I can see where it’s heading,</br>
    The cycle spins too fast, it’s never-ending</br></br>

    In mock mortification, play to the nose-bleeds,</br>
    Awash with refuse as we languish in the high seas,</br>
    Gob-smacked and aghast visage as far as the eye sees,</br>
    Outrageous coverage that conveys shallow meaning</br></br>

    It’s time for a hot takeover,</br>
    I’ll be the wrench in your gears,</br>
    Yeah, it’s all kayfabe until,</br>
    You get canceled for being too cavalier,</br>
    We gotta slow down the cycle,</br>
    Because it’s truly off the chain,</br>
    And we’re going nowhere fast,</br>
    Peddling lies without the brakes</br></br>

    The hot take-away,</br>
    Must change the meta for the better,</br>
    Mug for the audience,</br>
    Stop chasing clout and making cheddar,</br>
    Happiness is the same,</br>
    Now as it was ever,</br>
    Mugging your audience,</br>
    Hot take it slow, be clever</br></br>

    It’s time for a hot takeover,</br>
    I’ll be the wrench in your gears,</br>
    Yeah, it’s all kayfabe until,</br>
    You get canceled for being too cavalier,</br>
    We gotta slow down the cycle,</br>
    Because it’s truly off the chain,</br>
    And we’re going nowhere fast,</br>
    Peddling lies without the brakes

    </p>
    `;
}