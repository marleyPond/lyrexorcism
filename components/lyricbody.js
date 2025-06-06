    class LyricBody extends HTMLElement {
    constructor(){
        super();
    }   

    connectedCallback() {
        this.innerHTML =
        
        
        `
        <hr>
        <div class="container-div">
            <h2 id='blog-title' class="title"></h2>           
            <h3 id='blog-subtitle' style="font-weight:normal;"></h3>
            <p id='blog-date' style="display:none;"></p>
            <div id="blog-content" style="margin: 0 20%;"></div>
        </div>
        `;
    }
 }

 customElements.define('lyric-body-component', LyricBody);