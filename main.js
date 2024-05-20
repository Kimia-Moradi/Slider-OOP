function Image (_src, _index, _number_of_images) {
    this.index = _index;
    this.left = _index  * 700;
    this.src = _src;
    this.number_of_images = _number_of_images;
    this.element = null;
    this.shown = false;
    this.addHtml()
    this.moveLeft(0)
}
Image.prototype.addHtml = function () {
    const img = document.createElement("img");
    img.setAttribute("src" , this.src);
    img.setAttribute("width" ,700);
    img.setAttribute("height" , 400);
    img.setAttribute("alt" , 'image ' + this.index);
    document.getElementById("slider").appendChild(img);
    this.element = img;
}
Image.prototype.moveRight = function () {
    if (this.left <= -700) {
        this.shown = false;
        this.left = (this.number_of_images - 1) * 700;
    }
}
Image.prototype.moveLeft = function () {
    let is_stopped = false;
    this.left -= 1;
    // this checks if the image is being shown right now
    if (!this.shown && this.left <= 0) {
        this.left = 0;
        this.shown = true;
        is_stopped = true;
    }
    this.element.style.left = this.left + "px";
    this.moveRight()
    return is_stopped;
}
const number_of_images = 3;
const images = [
    new Image("images/basement-spa-pool-in-london-guncast-img~0bc14fa70b866acf_14-5919-1-0eab745.jpg", 0, number_of_images),
    new Image("images/Black-and-white-bathroom-decor-1.jpg", 1, number_of_images),
    new Image("images/transitional-home-office-the-design-co-inc-img~a581080202ab5d5c_14-2658-1-d39915a.jpg", 2, number_of_images)
]
function moveAll() {
    let is_stopped = false;

    for (let i = 0; i < images.length; i ++) {
        const img = images[i]
        const img_is_stopped = img.moveLeft()
        if (img_is_stopped) {
            is_stopped = true;
        }
    }
    const next_timeout = is_stopped ? 2000 : 10;

    setTimeout(moveAll, next_timeout);
}

moveAll()
