var Slider = function (params) {
    this.el = params.el;
    this.autoplay = params.autoplay;
    this.element = null;
    this.listItem = null;
    this.nextEl = 'button-next';
    this.prevEl = 'button-prev';

    this.init = function () {
        this.element = document.getElementById(this.el);
        this.listItem = this.element.getElementsByClassName('slider-item');
        this.show(0);
        var self = this;

        document.getElementById(this.nextEl).addEventListener('click',function(e){
            self.next();
        },false);
        
       
        document.getElementById(this.prevEl).addEventListener('click',function(e){
            self.prev();
        },false);

        if(this.autoplay){
            setInterval(function(){ self.next() }, self.autoplay);
        }

    }
    this.init();
}

Slider.prototype.next = function () {
    let current = this.current();
    let nextIndex = current + 1;
    if (current == this.listItem.length-1) nextIndex = 0;
    this.show(nextIndex);
}

Slider.prototype.prev = function () {
    let current = this.current();
    let nextIndex = current - 1;
    if (current == 0) nextIndex = this.listItem.length-1;
    this.show(nextIndex);
}

Slider.prototype.show = function (index) {
    for (let i = 0; i < this.listItem.length; i++) {
        if (index == i) {
            this.listItem[i].className = 'slider-item active';
        }
        else {
            this.listItem[i].className = 'slider-item hidden';
        }
    }
}

Slider.prototype.current = function(){
    for (let i = 0; i < this.listItem.length; i++) {
        let className = this.listItem[i].className;
        if(className.split(' ').indexOf('active') > 0){
            return i;
        }
    }
}
