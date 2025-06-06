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
    var page_title = `Event Horizon`;                          //ALTER THIS<~ 1
    document.getElementById('title').innerHTML = 
    page_title;
}

function loadTitle() {
    var category = `Event Horizon`;                          //ALTER THIS<~ 2
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
    There’s something thrumming in the atmosphere,</br>
    I fear I’ll blink and all will disappear,</br>
    I’ve waited so long, the anticipation cresting,</br>
    No time to rest, I’m gonna engage my engine</br></br>

    I’ve got to fuel up,</br>
    Upend the status quo,</br>
    Quixotic experience,</br>
    Expectations about to blow</br></br>

    I’m making my way through the crowd,</br>
    Rowdy characters abound,</br>
    I’m bound towards the rhythm carrier,</br>
    I’m gonna breach the sound barrier</br></br>

    I’m all fueled up,</br>
    And I feel her gaze,</br>
    Nystagmus nonchalant,</br>
    I’m right here, and I’m a million miles away</br></br>

    Floating above the ground, hypersonic sound, compounding these,</br>
    Inter-dimensional butterfly kaleidoscopic feelings,</br>
    Gotta stay grounded, time dilates as I’m where her eyes fall upon,</br>
    The night collapsing into an agonizing event horizon</br></br>

    My night is benighted by events wax romantic,</br>
    I’ve lent my heart to be catastrophically granted,</br>
    My mind mindlessly melting, malleable into the milieu,</br>
    My words and thoughts escaping me, nothing that I can do</br></br>

    I feel abducted, extraterrestrial experience,</br>
    Must be a dream, because life isn’t this perfect,</br>
    I’m lost in an event and I don’t want ever want it to end,</br>
    Only memories recorded in my body, can I return once again, I’m</br></br>

    Floating above the ground, hypersonic sound, compounding these,</br>
    Inter-dimensional butterfly kaleidoscopic feelings,</br>
    Gotta stay grounded, time dilates as I’m where her eyes fall upon,</br>
    The night collapsing into an agonizing event horizon

    </p>
    `;
}