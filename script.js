const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");


menuOpenButton.addEventListener("click", () => {
// Toggle mobile menu visibility
	document.body.classList.toggle("show-mobile-menu");
	});

    menuCloseButton.addEventListener("click", () => menuOpenButton.click
        ());

   //    function playVid(){ 
     //       $('hero-video-wrapper').get(0).play();
      //     setTimeout(playVid, 3000); 

      let section = document.querySelectorAll('section');
      let navLink = document.querySelectorAll('header nav a');

      window.onscroll = () => {
        sections.forEach(sec => {
          let top = window.scrollY;
          let offset = sec.offsetTop - 150;
          let height = sec.offsetHeight;
          let id = sec.getAttribute('id');

          if (top >= offset && top < offset + height){
            navLink.forEach(links => {
              links.classList.remove('active');
              document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
            });
          };
        });
      };