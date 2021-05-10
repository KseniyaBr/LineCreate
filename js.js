/*Slider*/

const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      slides = document.querySelectorAll('.carousel__item'),
      dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('carousel__item--visible');
    }
    slides[n].classList.add('carousel__item--visible');
}

const activeDot = n => {
    for(dot of dots) {
        dot.classList.remove('carousel__item--visible');
         dot.classList.remove('current__dot');
    }
    dots[n].classList.add('carousel__item--visible');
    dots[n].classList.add('current__dot');
}

const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
} 

const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0;
       prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
}

const prevSlide = () => {
    if(index == 0) {
        index = slides.length - 1
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
    })
})


next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
      

/*Accordion*/

const accordions = document.querySelectorAll('.accordion__item');

for(item of accordions) {
    item.addEventListener('click', function() {
        if(this.classList.contains('active')) {
            this.classList.remove('active');
        } else {
            for(line of accordions) {
                line.classList.remove('active');
            }
            this.classList.add('active');
        }
    })
}