AOS.init();

//--------- modal toggle
let modalRoot = document.getElementById('modal-root');
let modalForm = document.getElementById('modal-form');
let closeModal = document.getElementById('close-modal');
let openModal = document.getElementById('open-modal-button');

modalRoot.addEventListener('click', toggleModal);
modalForm.addEventListener('click', preventAction);
closeModal.addEventListener('click', toggleModal);
openModal.addEventListener('click', toggleModal);

function toggleModal() {
  modalRoot.classList.toggle("hidden");
  modalRoot.classList.toggle("flex");
}

function preventAction(e) {
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
  return false;
}

//---------- buton scroll to top
mybutton = document.getElementById("up-button");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

//-----------------parallax effect
let heroSection = document.getElementById('start');
heroSection.addEventListener("mousemove", parallax);

//parallax function
function parallax(event) {
  this.querySelectorAll(".mouse").forEach((shift) => {
    const position = shift.getAttribute("value");
    const x = (window.innerWidth - event.pageX * position) / 90;
    const y = (window.innerHeight - event.pageY * position) / 90;

    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
};

function setActiveTab(tabID) {
  document.getElementById("tabs-with-card-item-" + tabID).classList.add('active');
}

///autoheight textarea in modal form
(function () {
  function textareaAutoHeight(el, offsetTop = 0) {
    el.style.height = 'auto';
    el.style.height = `${el.scrollHeight + offsetTop}px`;
  }

  (function () {
    const textareas = [
      '#hs-autoheight-textarea'
    ];

    textareas.forEach((el) => {
      const textarea = document.querySelector(el);
      const overlay = textarea.closest('.hs-overlay');

      if (overlay) {
        const { element } = HSOverlay.getInstance(overlay, true);

        element.on('open', () => textareaAutoHeight(textarea, 3));
      } else textareaAutoHeight(textarea, 3);

      textarea.addEventListener('input', () => {
        textareaAutoHeight(textarea, 3);
      });
    });
  })();
})()

//Swipers settings
var sliderFDM = new Swiper(".swiper-modal-1", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: '.modal-1-next',
    prevEl: '.modal-1-prev',
  },
  breakpoints: {
    500: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    }
  }
});

var sliderSLA = new Swiper(".swiper-modal-2", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: '.modal-2-next',
    prevEl: '.modal-2-prev',
  },
  breakpoints: {
    500: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    }
  }
});

var sliderSLA = new Swiper(".swiper-modal-3", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: '.modal-3-next',
    prevEl: '.modal-3-prev',
  },
  breakpoints: {
    500: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    }
  }
});

var sliderSLM = new Swiper(".swiper-modal-4", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: '.modal-4-next',
    prevEl: '.modal-4-prev',
  },
  breakpoints: {
    500: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    }
  }
});

var sliderMold = new Swiper(".swiper-modal-mold", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: '.modal-mold-next',
    prevEl: '.modal-mold-prev',
  },
  breakpoints: {
    500: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    }
  }
});

var sliderMach = new Swiper(".swiper-modal-mach", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: '.modal-mach-next',
    prevEl: '.modal-mach-prev',
  },
  breakpoints: {
    500: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    }
  }
});

var sliderRE = new Swiper(".swiper-modal-RE", {
  slidesPerView: 1,
  spaceBetween: 20,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination-RE',
    type: 'bullets',
  },
  breakpoints: {
    500: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    }
  }
});

var gallery1 = new Swiper(".swiper-gallery-1", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: '.gallery-1-next',
    prevEl: '.gallery-1-prev',
  },
});

var gallery2 = new Swiper(".swiper-gallery-2", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: '.gallery-2-next',
    prevEl: '.gallery-2-prev',
  },
});

var gallery3 = new Swiper(".swiper-gallery-3", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: '.gallery-3-next',
    prevEl: '.gallery-3-prev',
  },
});
