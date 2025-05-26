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
            <!--
            <li><a href="/portfolio/main.html">portfolio</a></li>
            <li><a href="/creations.html">creations</a></li>
            <li><a href="/about.html">about</a></li>
            -->
        </ul>

    </footer>
        `;
    }
 }

 customElements.define('footer-component', Footer);