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
    var page_title = `Shadenfreudian Slip`;                          //ALTER THIS<~ 1
    document.getElementById('title').innerHTML = 
    page_title;
}

function loadTitle() {
    var category = `Shadenfreudian Slip`;                          //ALTER THIS<~ 2
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
    Your eyes, I idolize,</br>
    Lie stricken, prostrate,</br>
    I speak in tongues,</br>
    Under my skin, undulates,</br>
    From the oldest region,</br>
    It rose  up, as innate,</br>
    My talking twisted,</br>
    Not what I meant to say</br></br>

    We’re complex creatures,</br>
    We crane and gaze and assign,</br>
    Take fragments that we witness,</br>
    Confabulate in our minds,</br>
    I’m not too keen on sharing,</br>
    My perspectives of that kind,</br>
    Surely, I forget myself,</br>
    To make you feel maligned</br></br>

    Grasping at the high life that you commit,</br>
    I best myself, my Shadenfreudian Slip,</br>
    It can’t be helped, myrmecomorphous mistake,</br>
    My true nature, They sniff me out all the same</br></br>

    In the land of the blind, the beetle-eyed is queen,</br>
    I writhe in protest as the colony seethes,</br>
    I can’t belong here, it’s I who can’t see,</br>
    Revolt in protestation and calumnies</br></br>

    Grasping at the high life that you commit,</br>
    I best myself, my Shadenfreudian Slip,</br>
    It can’t be helped, myrmecomorphous mistake,</br>
    My true nature, They sniff me out all the same</br></br>

    All my resentment and quixotic bent,</br>
    I find my mind is undermined the end,</br>
    What saccharine fervor, now stillness and rot,</br>
    The just conclusion, I was what I fought

    </p>
    `;
}