const $template = document.createElement('template');
$template.innerHTML = `
<div class="container-is">
<div class="image"></div>
<div class="info">
    <div class="info-name">John Doe</div>
    <div class="info-gender">Male</div>
    <div class="info-national">Vietnam</div>
    <div class="info-phone">+84 823 688 819</div>
</div>
<div class="favorite">
    <div class="favourite-music">Music</div>
    <div class="favourite-game">Game</div>
</div>
</div>

`;

export default class Container extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));

        this.$image = querySelector(".image");
        this.$name = querySelector(".info-name");
        this.$gender = querySelector(".info-gender");
        this.$national = querySelector(".info-national");
        this.$phone = querySelector(".info-phone");
        this.$music = querySelector(".info-music");
        this.$game = querySelector(".info-game");
    }

    static get obversedAtrributes() {
        return ['name', 'gender', 'national', 'phone', 'music', 'game','image'];
    }

    attributeChangedCallback(attName, oldValue, newValue) {
        if(attName == 'name') {
            this.$name.innerHTML = newValue;
        }
        else if(attName == 'gender') {
            this.$gender.innerHTML = newValue;
        }
        else if(attName == 'national') {
            this.$national.innerHTML = newValue;
        }
        else if(attName == 'music') {
            this.$music.innerHTML = newValue;
        }
        else if(attName == 'phone') {
            this.$phone.innerHTML = newValue;
        }
        else if(attName == 'game') {
            this.$game.innerHTML = newValue;
        }
        else if(attName == 'image') {
            this.$image.style.backgroundImage = `url('${newValue}')`;
        }
    }
}

window.customElements.define('container-is', Container);