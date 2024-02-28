let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll(
  'header nav ul.navigation__links li a'
);

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove('link--active');
        document
          .querySelector(
            'header nav ul.navigation__links li a[href*=' + id + ']'
          )
          .classList.add('link--active');
      });
    }
  });
};
