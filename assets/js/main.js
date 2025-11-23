// Importar EmailJS
const emailjs = window.emailjs

//  EmailJS
emailjs.init("YOUR_PUBLIC_KEY_HERE") // Replace with your EmailJS public key


document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Mobile menu toggle
const menuIcon = document.querySelector(".menu-icon")
const menu = document.getElementById("menu")
const closeIcon = document.querySelector(".close-icon")

if (menuIcon) {
  menuIcon.addEventListener("click", () => {
    menu.classList.add("open")
    document.body.style.overflow = "hidden"
  })
}

if (closeIcon) {
  closeIcon.addEventListener("click", () => {
    menu.classList.remove("open")
    document.body.style.overflow = "visible"
  })
}

// Close menu on link click
document.querySelectorAll(".lista-navegacao a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("open")
    document.body.style.overflow = "visible"
  })
})

// Back to top button
const backToTopBtn = document.getElementById("back-to-top")

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show")
  } else {
    backToTopBtn.classList.remove("show")
  }
})

if (backToTopBtn) {
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  })
}

const textElement = document.querySelector(".texto-animado")
const texts = ["Backend Developer", "Full Stack Developer", "API Developer", "Microsserviços", "Sistemas Escaláveis"]
let textIndex = 0
let charIndex = 0
let isDeleting = false

function typeWriter() {
  const currentText = texts[textIndex]

  if (isDeleting) {
    textElement.textContent = currentText.substring(0, charIndex - 1)
    charIndex--
  } else {
    textElement.textContent = currentText.substring(0, charIndex + 1)
    charIndex++
  }

  let typeSpeed = isDeleting ? 80 : 120

  if (!isDeleting && charIndex === currentText.length) {
    typeSpeed = 1500
    isDeleting = true
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false
    textIndex = (textIndex + 1) % texts.length
    typeSpeed = 300
  }

  setTimeout(typeWriter, typeSpeed)
}

if (textElement) {
  typeWriter()
}

// Skill bar animation
const animateSkillBars = () => {
  const skillBars = document.querySelectorAll(".skill-bar")
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const level = entry.target.getAttribute("data-level")
        entry.target.style.width = level + "%"
      }
    })
  })

  skillBars.forEach((bar) => observer.observe(bar))
}

animateSkillBars()


const contactForm = document.getElementById("contactForm")

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault()

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const subject = document.getElementById("subject").value
    const message = document.getElementById("message").value
    const successMessage = document.getElementById("successMessage")
    const errorMessage = document.getElementById("errorMessage")
    const submitButton = contactForm.querySelector('button[type="submit"]')

    const originalText = submitButton.innerHTML
    submitButton.disabled = true
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...'

    // esconder mensagens
    successMessage.style.display = "none"
    errorMessage.style.display = "none"

    try {
      // enviar email
      await emailjs.send(
        "YOUR_SERVICE_ID_HERE", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID_HERE", // Replace with your EmailJS template ID
        {
          from_name: name,
          from_email: email,
          subject: subject,
          message: message,
          to_email: "mtz.martinss03@gmail.com",
        },
      )

      // mensagem de sucesso
      successMessage.style.display = "block"

      // Reset formulario
      contactForm.reset()

 
      setTimeout(() => {
        successMessage.style.display = "none"
      }, 5000)
    } catch (error) {
      console.error("Erro ao enviar email:", error)
      errorMessage.style.display = "block"

     
      setTimeout(() => {
        errorMessage.style.display = "none"
      }, 5000)
    } finally {
     
      submitButton.innerHTML = originalText
      submitButton.disabled = false
    }
  })
}

// Importar Particles.js
const particlesJS = window.particlesJS

// Particles.js 
if (typeof particlesJS !== "undefined") {
  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#007bff" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: false },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#007bff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { particles_nb: 4 },
      },
    },
    retina_detect: true,
  })
}

// Import AOS
const AOS = window.AOS

// AOS initialization
AOS.init({
  duration: 1000,
  offset: 100,
  easing: "ease-in-out-cubic",
})

window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loading-screen")
  const loadingPercentage = document.getElementById("loading-percentage")

  if (loadingScreen) {
    let percentage = 0
    const interval = setInterval(() => {
      percentage += Math.random() * 15
      if (percentage >= 100) {
        percentage = 100
        clearInterval(interval)

        if (loadingPercentage) {
          loadingPercentage.textContent = "100%"
        }

        setTimeout(() => {
          loadingScreen.style.opacity = "0"
          loadingScreen.style.visibility = "hidden"
          loadingScreen.style.transition = "all 0.5s ease"
        }, 500)
      }

      if (loadingPercentage) {
        loadingPercentage.textContent = Math.floor(percentage) + "%"
      }
    }, 100)
  }
})

const sections = document.querySelectorAll("section[id]")
const navLinks = document.querySelectorAll(".nav-desktop a, .lista-navegacao a")

window.addEventListener("scroll", () => {
  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active")
    }
  })
})

 
const images = document.querySelectorAll("img[data-src]")
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target
      img.src = img.dataset.src
      img.classList.remove("lazy")
      imageObserver.unobserve(img)
    }
  })
})

images.forEach((img) => imageObserver.observe(img))


let formSubmitted = false
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    if (formSubmitted) {
      e.preventDefault()
      return false
    }
    formSubmitted = true
    setTimeout(() => {
      formSubmitted = false
    }, 5000)
  })
}


document.addEventListener("DOMContentLoaded", () => {
  const floatingElements = document.querySelectorAll(".skill-card img, .certificate-image img")
  floatingElements.forEach((element, index) => {
    element.style.animationDelay = `${index * 0.2}s`
    element.classList.add("floating")
  })

  const projectCards = document.querySelectorAll(".project-card")
  projectCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`
  })
})

console.log("Portfólio carregado com sucesso!")
console.log("Desenvolvido por Matheus Martins")
