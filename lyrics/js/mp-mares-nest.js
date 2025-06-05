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
    var page_title = `Mare's Nest`;                          //ALTER THIS<~ 1
    document.getElementById('title').innerHTML = 
    page_title;
}

function loadTitle() {
    var category = `Mare's Nest`;                          //ALTER THIS<~ 2
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
    Am I to settle down into this life,</br>
    I’m sure to be fine if I try,</br>
    Yet why is there this aching in my chest,</br>
    This spark inside that begs me to defy</br></br>

    Something inside not quite right, yet I find,</br>
    Myself searching, all for naught, I still strive,</br>
    Yes, I won’t quite moving, as long as I’m striding,</br>
    Towards what I seek I’ll survive</br></br>

    I’m on a quest to find my Mare’s Nest,</br>
    I will not rest nor resign</br></br>

    The long nights and short days come and go with the waves,</br>
    The long days and short nights cycling still,</br>
    The seasons, they change, in a manner of ways,</br>
    And in more ways, they maintain the same chill</br></br>

    As hopelessness creeps, in cantankerous movements,</br>
    I ascend to batter it back, to allay,</br>
    Yet each sinking sun and waxing moon does portend,</br>
    The diminishing fortune on which I stake my claim</br></br>

    I’m on a quest to find my Mare’s Nest,</br>
    I will not rest nor resign,</br>
    That I might comply with an ordinary life,</br>
    Sets my stomach to alight to my brain,</br>
    I’ll not acclimatize to this pain</br>

    Now far along, with not but fever, beleaguered,</br>
    I come to accept, retrospect, and re-frame,</br>
    For what Mare’s Nest may I come across,</br>
    If I’m traveling the well-trodden terrain</br></br>

    Now baring the wilds, and mad from the lack,</br>
    I am sickened with a breeze-bitten face,</br>
    In my stupor, I fall, sallow, upon some nearby moss,</br>
    And, in torpor, contemplate my fate,</br>
    Has it been not a search, but attempted escape,</br>
    Has my Mare’s Nest never been far away</br></br>
    
    I’m on a quest to find my Mare’s Nest,</br>
    I will not rest nor resign,</br>
    I’ll endeavor to remain present throughout my days,</br>
    In the event I’m open to find,</br>
    My Mare’s Nest, a warm place in my mind

    </p>
    `;
}