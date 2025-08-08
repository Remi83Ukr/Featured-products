import '../../styles/sections/custom-main-product.scss';
import Swiper from 'swiper/bundle';


const swiper = () => {
    const slider = document.getElementById('product-slider');
    const ispagination = slider.dataset.pagination;
    const isnavigation = slider.dataset.navigation;
    const space = slider.dataset.sliderSpace;
    const qty = slider.dataset.qty;

    console.log(ispagination);
    

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
    })
}

swiper();