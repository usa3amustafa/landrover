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

  question.addEventListener('click', () => {
    answer.classList.toggle('hide-answer')
    questionIcon.classList.toggle('rotate')
  })
})

// modal

const btnCloseModal = document.querySelector('.close-modal')
const btnsOpenModal = document.querySelectorAll('.show-modal')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')

const openModal = function () {
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}

const closeModal = function () {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal)

btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal()
  }
})
