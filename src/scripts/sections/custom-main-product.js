import '../../styles/sections/custom-main-product.scss';
import Swiper from 'swiper/bundle';


const swiper = () => {
    const slider = document.getElementById('product-slider');
    const ispagination = slider.dataset.pagination;
    const isnavigation = slider.dataset.navigation;
    const space = slider.dataset.sliderSpace;
    const qty = slider.dataset.qty;

    const swiperGallery = new Swiper('#product-slider', {
        navigation: {
            nextEl: isnavigation === 'true' ? '#product-button-next' : '',
            prevEl: isnavigation === 'true' ? '#product-button-prev' : '',
        },
        pagination: {
            el: ispagination === 'true' ? '#product-swiper-pagination' : '',
            type: "bullets",
            clickable: true
        },
        direction: 'vertical',
        slidesPerView: qty,
        speed: 500,
        spaceBetween: space,
        observer: true,
        observeSlideChildren: true,
        observeParents: true,
    })

    const observer = new MutationObserver(mutations => {
        for (const mutation of mutations) {
            if (mutation.attributeName === 'class') {
                const slide = mutation.target;
                if (slide.classList.contains('activated')) {
                    const index = Array.from(swiperGallery.slides).indexOf(slide);
                    if (index >= 0) {
                    swiperGallery.slideTo(index);
                    swiperGallery.navigation.init();
                    }
                }
            }
        }
    });

    swiperGallery.slides.forEach(slide => {
        observer.observe(slide, { attributes: true, attributeFilter: ['class'] });
    });
}


swiper();