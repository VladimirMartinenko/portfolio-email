let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.show_link');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop -150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    
    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('activ');
        document.querySelector('.show_link[href*='+ id +']').classList.add('activ')
      })
    }
  })
}
export default onscroll;