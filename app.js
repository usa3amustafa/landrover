// highlight the nav link when scrolled to the relevant section

const sections = document.querySelectorAll('section')
const navLinks = document.querySelectorAll('.nav-link')
const menuIcon = document.querySelector('.menu-icon')
const closeIcon = document.querySelector('.close-icon')
const navbar = document.querySelector('.nav-links')

window.addEventListener('scroll', () => {
  let current = ''

  sections.forEach(section => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight

    if (scrollY > sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id')
    }
  })

  console.log(current)

  navLinks.forEach(link => {
    link.classList.remove('active')

    if (link.classList.contains(current)) {
      link.classList.add('active')
    }
  })
})

closeIcon.addEventListener('click', () => {
  navbar.classList.remove('show-nav')
})

menuIcon.addEventListener('click', () => {
  navbar.classList.add('show-nav')
})

navLinks.forEach(navLink => {
  navLink.addEventListener('click', () => {
    navbar.classList.remove('show-nav')
  })
})
