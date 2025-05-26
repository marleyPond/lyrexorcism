  class Header extends HTMLElement {
    constructor(){
        super();
    }   

    connectedCallback() {
        this.innerHTML =
        
        `
        <a href="/">
          <img class="banner" src="/images/lyrexorcism_banner.png">
        </a>
        `;
    }
 }

 customElements.define('header-component', Header);