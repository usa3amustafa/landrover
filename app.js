const sections = document.querySelectorAll('section')
const navLinks = document.querySelectorAll('.nav-link')
const menuIcon = document.querySelector('.menu-icon')
const closeIcon = document.querySelector('.close-icon')
const navbar = document.querySelector('.nav-links')

const faqItems = document.querySelectorAll('.faq-item')

// highlight the nav link when scrolled to the relevant section

window.addEventListener('scroll', () => {
  let current = ''

  sections.forEach(section => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight

    if (scrollY > sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id')
    }
  })

  navLinks.forEach(link => {
    link.classList.remove('active')

    if (link.classList.contains(current)) {
      link.classList.add('active')
    }
  })
})

// responsive navbar for tablet and mobile

menuIcon.addEventListener('click', () => {
  navbar.classList.add('show-nav')
})

closeIcon.addEventListener('click', () => {
  navbar.classList.remove('show-nav')
})

navLinks.forEach(navLink => {
  navLink.addEventListener('click', () => {
    navbar.classList.remove('show-nav')
  })
})

//  faq section

faqItems.forEach(faqItem => {
  const question = faqItem.querySelector('.question')
  const questionIcon = question.querySelector('.icon')
  const answer = faqItem.querySelector('.answer-text')

  console.log(question)

  question.addEventListener('click', () => {
    answer.classList.toggle('hide-answer')
    questionIcon.classList.toggle('rotate')
  })
})
