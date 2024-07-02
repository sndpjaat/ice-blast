// for navbar

let menuicon = document.querySelector(".menuicon");
let lg_view = document.querySelector(".max-lg-view");
let body = document.body;
let first_line = document.querySelector(".first_line")
let second_line = document.querySelector(".second_line")
let third_line = document.querySelector(".third_line")
let nav_link = document.querySelectorAll(".nav-link");

// we are going to use this function to make cross whenever the navmenu is clicked

function cross() {
    second_line.style.display = "none";
    first_line.style.transform = "rotate(45deg)";
    first_line.style.top = "15px";
    first_line.style.left = "1px";
    first_line.classList.add("position-relative");
    third_line.style.transform = "rotate(-45deg)";
    third_line.style.top = "-11px";
    third_line.classList.add("position-relative");
}

// we are going to use this function to remove the cross again when the menuicon is clicked

function remove_cross() {
    second_line.style.display = "block";
    first_line.style.transform = "rotate(0deg)";
    first_line.classList.remove("position-relative");
    third_line.style.transform = "rotate(0deg)";
    third_line.classList.remove("position-relative");
}

menuicon.addEventListener("click", () => {
    lg_view.classList.toggle("show");
    nav_link.forEach(other => {
        other.addEventListener("click", () => {
            lg_view.classList.remove("show");
            body.style.overflow = "auto";
            remove_cross();
        });
    });
    if (lg_view.classList.contains("show")) {
        body.style.overflow = "hidden";
        cross();
    } else {
        body.style.overflow = "auto";
        remove_cross();
    }
});

// car video play

let video = document.querySelectorAll(".video_play");
video.forEach(e => {
    e.addEventListener("click", () => {
        e.closest(".video_box").lastElementChild.classList.add("z-2");
    });
});

// accoridon

let accordion = document.querySelectorAll(".click-btn");

accordion.forEach(a => {
    a.addEventListener("click", () => {
        let b = document.querySelector(".accordion-items.active-accord");
        a.parentElement.classList.toggle("active-accord");
        b && b.classList.remove("active-accord");
    });
});


let svg_icon_2 = document.querySelectorAll(".svg_icon_2");
let svg_icon_3 = document.querySelectorAll(".svg_icon_3");

svg_icon_2.forEach(e => {
    e.addEventListener("click", () => {
        e.parentElement.classList.remove("active-accord");
    });
});
svg_icon_3.forEach(e => {
    e.addEventListener("click", () => {
        e.parentElement.classList.remove("active-accord");
    });
});

// radio btn

let radio_btn = document.querySelector(".radio-active");
let radio_box = document.querySelector(".radio-tick-img");
let radio_sq_box = document.querySelector(".radio-box");

radio_btn.addEventListener("click", () => {
    radio_box.classList.toggle("active-radio");
});

radio_sq_box.addEventListener("click", () => {
    radio_box.classList.toggle("active-radio");
});

// preloader

let preloader = document.querySelector(".preloader");
body.classList.add("overflow-hidden");

setTimeout(() => {
    preloader.classList.add("top-105");
    body.classList.remove("overflow-hidden");
}, 3000)

// scroll to top

let scroll_btn = document.querySelector(".scroll_top");
let scroll_pt = 200;

scroll_btn.classList.add("d-none");
window.addEventListener("scroll", () => {
    if (window.scrollY > scroll_pt) {
        scroll_btn.classList.remove("d-none");
    } else {
        scroll_btn.classList.add("d-none");
    }
    scroll_btn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});

AOS.init(
    {
        once: true,
    }
);

