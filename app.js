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

// modal header

const overlay1 = document.querySelector('.overlay-1')
const overlay2 = document.querySelector('.overlay-2')

const bodyHeight = document.body.getBoundingClientRect().height

// overlay.style.height = `${bodyHeight + 500}px`

const btnCloseModal1 = document.querySelector('.close-modal-1')
const btnsOpenModal1 = document.querySelectorAll('.header-text-btn')
const modal1 = document.querySelector('.modal-1')

const openModal1 = function () {
  modal1.classList.remove('hidden')
  overlay1.classList.remove('hidden')
}

const closeModal1 = function () {
  modal1.classList.add('hidden')
  overlay1.classList.add('hidden')
}

for (let i = 0; i < btnsOpenModal1.length; i++)
  btnsOpenModal1[i].addEventListener('click', openModal1)

btnCloseModal1.addEventListener('click', closeModal1)

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal1.classList.contains('hidden')) {
    closeModal1()
  }
})

overlay1.addEventListener('click', e => {
  if (e.target.classList.contains('overlay-1')) {
    closeModal1()
  } else {
    return
  }
})

// modal download

const btnCloseModal2 = document.querySelector('.close-modal-2')
const btnsOpenModal2 = document.querySelectorAll('.download-btn-btn')
const modal2 = document.querySelector('.modal-2')

const openModal2 = function () {
  modal2.classList.remove('hidden')
  overlay2.classList.remove('hidden')
}

const closeModal2 = function () {
  modal2.classList.add('hidden')
  overlay2.classList.add('hidden')
}

for (let i = 0; i < btnsOpenModal2.length; i++)
  btnsOpenModal2[i].addEventListener('click', openModal2)

btnCloseModal2.addEventListener('click', closeModal2)

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal2.classList.contains('hidden')) {
    closeModal2()
  }
})

overlay2.addEventListener('click', e => {
  if (e.target.classList.contains('overlay-2')) {
    closeModal2()
  } else {
    return
  }
})
