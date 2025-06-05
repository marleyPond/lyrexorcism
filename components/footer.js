   class Footer extends HTMLElement {
    constructor(){
        super();
    }   

    connectedCallback() {
        this.innerHTML =
        
        `
        <!--
        <div>
            <div style="text-align: center;">    
                <a href="http://www.amazon.ca/dp/B0DNTHFW8H" target="_blank" >
                    <img src="/images/banner_book.png" class="banner shimmer">
                </a>
            </div>
        </div>
        -->
        <!--
        <div style="padding: 10px 0;">
            <div style="text-align: center;">    
                <a href="https://www.online-therapy.com/?ref=507163" target="_blank" >
                    <img src="/images/af_online-therapy.png" class="banner shimmer">
                </a>
            </div>
        </div>
        -->
        <footer>
        <ul>
            <li><a href="/about.html">about</a></li>
            <li><a href="/team.html">team</a></li>
            <li>
                <img src="/images/lyrexorcism_logo.png" style="max-width:40px; max-height:40px; border-radius:10px; margin-top: 5px;"></img>
            </li>
        </ul>

    </footer>
        `;
    }
 }

 customElements.define('footer-component', Footer);