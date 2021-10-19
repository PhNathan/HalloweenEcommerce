let searchForm = document.querySelector('.search');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('actived');
  navbar.classList.remove('actived');
}


let navbar = document.querySelector('.navigate');

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('actived');
  searchForm.classList.remove('actived');
}

// scroll spy 
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.head .navigate a');

window.onscroll = () =>{
  searchForm.classList.remove('actived');
  navbar.classList.remove('actived');

  if(window.scrollY > 0){
    document.querySelector('.head').classList.add('actived');
  }else{
    document.querySelector('.head').classList.remove('actived');
  }

  section.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop - 200;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(link =>{
        link.classList.remove('actived');
        document.querySelector('.head .navigate a[href*='+id+']').classList.add('actived');
      });
    };

  });

};

window.onload = () =>{
    if(window.scrollY > 0){
      document.querySelector('.head').classList.add('actived');
    }else{
      document.querySelector('.head').classList.remove('actived');
    }
  }


var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    centeredSlides: true,
    autoplay: {
      delay: 9000,
      disableOnInteraction: false,
    },
  });



  var swiper = new Swiper(".products-slider", {
    spaceBetween: 20,
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 9000,
      disableOnInteraction: false,
    },
    grabCursor: true,
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      },
  });