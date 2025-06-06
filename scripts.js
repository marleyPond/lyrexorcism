
function loadContent() {
    window['now'] = getNow();
    window['json'] = prepareJSON();
    window['current'] = 0;
    window['final'] = json['all'].length-1;
    window['filterData'] = [];
    window['galleryDisplayAmount'] = 10;
    window['currently_expanded'] = -1;
    loadBlogs(json, "none");
    updateFilterCounts(); 
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

    tempFilterArgs = d => now - d.releaseDate >= 0 && d.author.match("Marley Pond");
    tempFilterData = json.all.filter(tempFilterArgs);
    document.getElementById("c_a_marley").innerHTML += " [" + tempFilterData.length +"]";

    tempFilterArgs = d => now - d.releaseDate >= 0 && d.genre.match("Club Anthem");
    tempFilterData = json.all.filter(tempFilterArgs);
    document.getElementById("c_g_club-anthem").innerHTML += " [" + tempFilterData.length +"]";

    tempFilterArgs = d => now - d.releaseDate >= 0 && d.genre.match("Folk");
    tempFilterData = json.all.filter(tempFilterArgs);
    document.getElementById("c_g_folk").innerHTML += " [" + tempFilterData.length +"]";

    tempFilterArgs = d => now - d.releaseDate >= 0 && d.genre.match("Pop");
    tempFilterData = json.all.filter(tempFilterArgs);
    document.getElementById("c_g_pop").innerHTML += " [" + tempFilterData.length +"]";
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
            blogStack += decorateTitle(filterData[i], i);
        };
        document.getElementById("blog-content").innerHTML = blogStack;
        return;
    }

    var allData = data.all;
    // console.log(filter);

    var filterArgs = d => now - d.releaseDate >= 0 && (d.genre.match(filter));
    if (filter.includes("Marley")){
        filterArgs = d => now - d.releaseDate >= 0 && (d.author.match(filter));
        // console.log("_auth");
    }
    else if (filter == "none") {
        filterArgs = d => now - d.releaseDate >= 0;
        // console.log("_null");
    }
    filterData = allData.filter(filterArgs);
    final = filterData.length;
    current = 0;
    /*load new blogs to top of list*/

    for(var i = 0; i < Math.min(galleryDisplayAmount, final); i++){
        blogStack += decorateTitle(filterData[i], i);
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

function decorateTitle(data, id) {
    var release_date = data.releaseDate.toString()
    var date = new Date(release_date)
    date.setFullYear(
        release_date.substring(0,4),
        release_date.substring(4,6),
        release_date.substring(6,8)
    )
    var options = {year: 'numeric', month: 'long', day: 'numeric'};
    var pretty_date = `${date.toLocaleString('en-US', options)}`;

    var count = data.title.length
    
    var lyric_title = data.title

    if (count > 2) {
        lyric_title = 
            data.title.substring(0,1) + 
            `<u>` + data.title.substring(1, count-1) + `</u>` +
            data.title.substring(count-1, count)
    }

    var a = "/lyrics/"+data.fileName+".html".toString();
    if(data.fileName.includes(":"))
        a = data.fileName;
    return `
            <div class="banner pop" onClick="expand(`+id+`)" style="padding: 10px 0 0 0;">
                <div>
                    <table style="width: 100%; color:white;">
                        <tr style="font-weight: bolder;">
                            <td style="text-align: center; width: 65%;">` + lyric_title + `</td>
                            <td style="text-align: center;">` + data.author + `</td>
                        </tr>
                        <tr style="color: #dddddd">
                            <td style="text-align: center;">` + data.genre + `</td>
                            <td style="text-align: center;">` + pretty_date + `</td>
                        </tr>
                    </table>
                </div>
                <div id="` + id + `" class="expandable" style="background-color: grey;">
                    <table style="width: 100%;">
                        <tr style="font-weight: bolder;">
                            <td style="text-align: center; width: 80%;">` + data.abstract + `</td>
                            <td style="text-align: center;">
                                <button class="lyric_button" onclick="preview_button('` + a + `')"><div class="lyric_icon">👻</div></button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            `;
}

function expand(id) {
    if (Number(window[`currently_expanded`]) == id){
        document.getElementById(id).classList.remove("expand");
        window[`currently_expanded`] = "-1";
        window['current_preview_page'] = null;
        return
    }
    if (Number(window[`currently_expanded`]) >= 0) {
        document.getElementById(Number(window[`currently_expanded`])).classList.remove("expand");
    }
    document.getElementById(id).classList.add("expand");
    window[`currently_expanded`] = id;

}

function preview_button(link) {
    window.location.replace(link);
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

function prepareJSON() {    //yearMonthDay, where 00 => January and 01->1st
    return {
        "all": 
        [   {
                "title": "The Smallest Pangolin", 
                "releaseDate": 20250606,
                "fileName": "mp-the-smallest-pangolin", 
                "author": "Marley Pond",
                "genre": "Metal",
                "abstract": "A pangolin reflects on her more formative experiences, and how it shaped her lifestyle .",
            },
            {
                "title": "Shadenfreudian Slip", 
                "releaseDate": 20250606,
                "fileName": "mp-shadenfreudian-slip", 
                "author": "Marley Pond",
                "genre": "Club Anthem",
                "abstract": "The frozen moment, amongst the settling dust, amidst the pursuit of clout.",
            },
            {
                "title": "Event Horizon", 
                "releaseDate": 20250605,
                "fileName": "mp-event-horizon", 
                "author": "Marley Pond",
                "genre": "Club Anthem",
                "abstract": "A boisterous, love-sick club anthem that gives voice to the feeling of intoxicating limerence.",
            },
            {
                "title": "Hit Maker", 
                "releaseDate": 20250605,
                "fileName": "mp-hit-maker", 
                "author": "Marley Pond",
                "genre": "Pop",
                "abstract": "A brooding playfulness cloaks this sassy pop hit.",
            },
            {
                "title": "Hot Takeover", 
                "releaseDate": 20250605,
                "fileName": "mp-hot-takeover", 
                "author": "Marley Pond",
                "genre": "Pop",
                "abstract": "A colorful critique of anti-social media, wrapped in rhymes and pun-ishment.",
            },
             {
                "title": "Kiss My Apocalypse", 
                "releaseDate": 20250605,
                "fileName": "mp-kiss-my-apocalypse", 
                "author": "Marley Pond",
                "genre": "Pop",
                "abstract": "A pop anthem that expresses the chaotic youthful experience of overwhelm at finding oneself, belonging, and love.",
            },
            {
                "title": "Mare's Nest", 
                "releaseDate": 20250605,
                "fileName": "mp-mares-nest", 
                "author": "Marley Pond",
                "genre": "Folk",
                "abstract": "A quirky folk journey playing with meaning, perspective, and acceptance.",
            },

        ]
    };
}