
function loadContent() {
    window['now'] = getNow();
    window['json'] = prepareJSON();
    window['current'] = 0;
    window['final'] = json['all'].length-1;
    window['filterData'] = [];
    window['galleryDisplayAmount'] = 9;
    loadBlogs(json, "none");
    //updateFilterCounts(); 
 }


function getNow() {  
    var today = new Date();
    return today.getFullYear() * 10000 + (today.getMonth()+1) * 100 + today.getDate();
}

function updateFilterCounts() {
    let tempFilterArgs; 
    let tempFilterData;

    tempFilterArgs = d => now - d.releaseDate >= 0;
    tempFilterData = json.all.filter(tempFilterArgs);
    document.getElementById("c_all").innerHTML += "all" + " [" + tempFilterData.length +"]";

    tempFilterArgs = d => now - d.releaseDate >= 0 && d.imageCategoryName.includes("sqyt");
    tempFilterData = json.all.filter(tempFilterArgs);
    document.getElementById("cbranchingpathcast").innerHTML += " [" + tempFilterData.length +"]";

    tempFilterArgs = d => now - d.releaseDate >= 0 && d.imageCategoryName == "sqblog";
    tempFilterData = json.all.filter(tempFilterArgs);
    document.getElementById("cblog").innerHTML += " [" + tempFilterData.length +"]";

    tempFilterArgs = d => now - d.releaseDate >= 0 && d.imageCategoryName.match("cmisc");
    tempFilterData = json.all.filter(tempFilterArgs);
    document.getElementById("cmisc").innerHTML += " [" + tempFilterData.length +"]";
}

function filterUpdate(v){
    current = "1";
    final = json['all'].length-1;
    loadBlogs(json, v);
}

function tryLeft() {
    current = Math.max(current-galleryDisplayAmount, 0);
    loadBlogs(null);
}

function tryRight() {
    current = Math.min(current + galleryDisplayAmount, final);
    loadBlogs(null);
}

/* 
HowTo: Prep for releasing without early release 
if(isReleased(now, 20240111)){blogStack += decorateTitle(`Attention To Derail`, `attentionToDerail`)};
//yyyymmdd
*/ 
function isReleased(now, releaseDate){
    //console.log(now + " " + releaseDate);
    if(now - releaseDate >= 0){return true};
    return false;
}

function loadBlogs(data, filter) {
    var blogStack = ``;
    
    if(data === null){  //bypass
        if(current >= final) return;
        for(var i = current; i < Math.min(current + galleryDisplayAmount, final); i++){
            blogStack += decorateTitle(filterData[i].title, filterData[i].fileName, filterData[i].imageCategoryName);
        };
        //blogStack = addEmptyFigures(blogStack, 2); //buffer, leave for max columns-1
        document.getElementById("blog-content").innerHTML = blogStack;
        return;
    }

    var allData = data.all;
    
    var filterArgs = d => now - d.releaseDate >= 0 && (filter == 'none' || filter.includes(d.imageCategoryName) || filter == 'none' || d.imageCategoryName.includes(filter));
    filterData = allData.filter(filterArgs);
    final = filterData.length;
    current = 0;
    /*load new blogs to top of list*/

    for(var i = 0; i < Math.min(galleryDisplayAmount, final); i++){
        blogStack += decorateTitle(filterData[i].title, filterData[i].fileName, filterData[i].author);
    };

    document.getElementById("blog-content").innerHTML = blogStack;
}

function addEmptyFigures(n, i) {
    while (i != 0){
        n = n + `
        <figure class="textover"></figure>`;
        i--;
    }
    return n;
}

function wrapInGrid(n) {
    return `<div class="grid">`+ n + `</div>`;
}

//keep as drop example
function loadPoems(now) {
    var blogStack = ``;
    var i = ``;
    var t = ``;
    /*load new poems to top of the list*/
    //blogStack += decoratePoem(`Time Traveler`, `timeTraveler`);

    blogStack += decoratePoem(`Canary in the Swole Mind`, 'poem-canaryInTheSwoleMind');

    i += `<hr/>`;
    i += decoratePoem('Memories Of The Future', 'saccadicMaskMemoriesOfTheFuture');
    i += decoratePoem('Savoir Faire', 'saccadicMaskSavoirFaire');
    i += decoratePoem('Ground Down', 'saccadicMaskGroundDown');
    i += decoratePoem('Hearing In Tongues', 'saccadicMaskHearingInTongues');
    i += decoratePoem('Parasocialite', 'saccadicMaskParasocialite');
    i += decoratePoem('Doppelgangbusters', 'saccadicMaskDoppelgangbusters');
    i += decoratePoem('Hex Decibel System', 'saccadicMaskHexDecibelSystem');
    i += decoratePoem('Saccadic Mask', 'saccadicMaskSaccadicMask');
    i += decoratePoem('Violence Nashi', 'saccadicMaskViolenceNashi');
    i += decoratePoem('Sunglasses Half Full', 'saccadicMaskSunglassesHalfFull');
    i += `<hr/>`;
    t += `<div class="sleeve"><button id="smButton">Saccadic Mask &#x1F4A7</button><div id="smClass" style="display: none; margin-left: 40px;">` + i + `</div></div>`;
    blogStack += t;

    /*Load list into html, thus making them searchable */
    document.getElementById("poetry-content").innerHTML = blogStack;

    /*Now can add event listeners, tweak, ext.*/
    document.getElementById('smButton').addEventListener("click", toggleSM);
}

function decorateTitle(lyric_title, link, author) {  
    var a = `<a class="not_stylish" href=/lyrics/"`+link+`.html">`;
    if(link.includes(":"))
        a = `<a class="not_stylish" href="`+link+`">`;
    return a + `
            <div class="banner pop" style="padding: 10px 0;">
                <div>
                    <span>` + lyric_title + `</span>
                    <span style="float:right;">`+author+`</span>
                </div>
                <!--
                <div>
                    <span>This is the lyric title </span>
                    <span style="float:right;">Auther, McAuthorlady</span>
                </div>
                -->
            </div>
            </a>`;
}

function OLD_decorateTitle(s, l, c) {
    if(l.includes(":"))
        return `<figure class="textover">
                <a href="`+l+`" target="_blank">
                <img src="/images/`+c+`.png" alt="alt">
                <figcaption>`+s+`</figcaption>
                </a>
            </figure>`;
    return `<figure class="textover">
                <a href="/blog/`+l+`.html">
                <img src="/images/`+c+`.png" alt="alt">
                <figcaption>`+s+`</figcaption>
                </a>
            </figure>`;
}

function emptyTile(c) {
    return  `<figure class="textover">
                <a href="#">
                <img src="/images/`+c+`.png" alt="alt">
                <figcaption>`+`test title`+`</figcaption>
                </a>
            </figure>`
}

function decorateOldTitle(s, l, c) {
    return `<p>
            <a href="/blog/html/`+l+`.html">
                `+s+`
            </a>
        </p>`;
}

function toggleSM() {   //for drop class above
    var v = document.getElementById('smClass');
    if(v.style.display == "none"){
        v.style.display = "block";
    }else{
        v.style.display = "none";
    }
}

function prepareJSON() {    //top-down based on release!!  
    return {
        "all": 
        [   
            {
                "title": "Active Listening and Reactive Narrative Design", 
                "releaseDate": 20240601,
                "fileName": "template", 
                "author": "Marley Pond",
            },
            {
                "title": "Active Listening and Reactive Narrative Design", 
                "releaseDate": 20240601,
                "fileName": "template", 
                "author": "Marley Pond",
            },
            {
                "title": "Active Listening and Reactive Narrative Design", 
                "releaseDate": 20240601,
                "fileName": "template", 
                "author": "Marley Pond",
            },
            {
                "title": "Active Listening and Reactive Narrative Design", 
                "releaseDate": 20240601,
                "fileName": "template", 
                "author": "Marley Pond",
            },
            {
                "title": "Active Listening and Reactive Narrative Design", 
                "releaseDate": 20240601,
                "fileName": "template", 
                "author": "Marley Pond",
            },
            {
                "title": "Active Listening and Reactive Narrative Design", 
                "releaseDate": 20240601,
                "fileName": "template", 
                "author": "Marley Pond",
            },
            {
                "title": "Active Listening and Reactive Narrative Design", 
                "releaseDate": 20240601,
                "fileName": "template", 
                "author": "Marley Pond",
            },
            {
                "title": "Active Listening and Reactive Narrative Design", 
                "releaseDate": 20240601,
                "fileName": "template", 
                "author": "Marley Pond",
            },
        ]
    };
}