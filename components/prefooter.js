    class Prefooter extends HTMLElement {
    constructor(){
        super();
    }   

    connectedCallback() {
        this.innerHTML =
        
        `
        <div class="banner" style="border-style:solid; padding-top: 5px; margin-bottom: 2px;">
            <div style="text-align: center;">    
                <!--<a href="https://trello.com/b/ZL716rS6/branching-path" target="_blank" >
                    <img src="/images/branchingPathTracker.png" style="max-width: 320px; width:100%;">
                </a>-->
            </div>
        </div>
        `;
    }
 }

 customElements.define('prefooter-component', Prefooter);