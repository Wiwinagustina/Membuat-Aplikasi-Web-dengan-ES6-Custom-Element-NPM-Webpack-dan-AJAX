class HeaderFooter extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `<div class="container text-center mt-4">
                            <p class="footer">COVID-19 Apps Dicoding © 2022, Wiwin Agustina</p>
                        </div>`;
    }
}

customElements.define('header-footer',HeaderFooter);