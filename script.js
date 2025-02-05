//    function playVid(){
//       $('hero-video-wrapper').get(0).play();
//     setTimeout(playVid, 3000);

// let section = document.querySelectorAll('section');
// let navLink = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//   sections.forEach(sec => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop - 150;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute('id');

//     if (top >= offset && top < offset + height){
//       navLink.forEach(links => {
//         links.classList.remove('active');
//         document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
//       });
//     };
//   });
// };
// const menuOpenButton = document.querySelector("#menu-open-button");
// const menuCloseButton = document.querySelector("#menu-close-button");

// menuOpenButton.addEventListener("click", function () {
//   // Toggle mobile menu visibility
//   document.body.classList.toggle("show-mobile-menu");
// });

// menuCloseButton.addEventListener("click", function () {
//   menuOpenButton.click();
// });

(function (w, d) {
  //funkcja kompilacji js
  w.addEventListener("load", function () {
    config.main.call(config);
  });
  var menuOpenButton, menuCloseButton; 
  const config = {
    main: function () {
      //wszystkie funckcje
      // alert("Dasds");
      const self = this;
      menuOpenButton = d.querySelector("#menu-open-button");
      menuCloseButton = d.querySelector("#menu-close-button");

      self.events.call(self);
      self.oldCode.call(self);
    },

    oldCode: function () {

      menuOpenButton.addEventListener("click", function () {
        // Toggle mobile menu visibility
        document.body.classList.toggle("show-mobile-menu");
      });

      menuCloseButton.addEventListener("click", function () {
        menuOpenButton.click();
      });
    },

    events: function () {
      const _links = d.querySelectorAll("a.navlink");
      if ("undefined" !== typeof _links)
        for (let i = 0; i < _links.length; i++)
          _links[i].addEventListener("click", function (e) {
            // e.preventDefault();
            // e.stopPropagation();
            menuCloseButton.click();
          });
    },
  };
})(window, document);
