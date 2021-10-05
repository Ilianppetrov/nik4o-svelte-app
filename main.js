$(document).ready(function(){
    $('.carousel ').slick({
        autoplay: true,
        arrows: false,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear',
    });

    const body = document.querySelector('body')

    body.addEventListener('click', (ev) => {
        // ev.preventDefault()
        if (!navigation.contains(ev.target)) {
            close()
        }
    })

    const hamburgerContainer = document.querySelector('.hamburger-container')
    const mobNav = document.querySelector('.mobile-navigation-container')
    const navigation = document.querySelector('.mobile-navigation')

    const close = () => {
        hamburgerContainer.classList.remove('opened')
        mobNav.classList.remove('opened')
    }
    
    const open = () => {
        hamburgerContainer.classList.add('opened')
        mobNav.classList.add('opened')  
    }
    

    const toggleMenu = () => {
        if (mobNav.classList.contains('opened')) {
            close()
        } else {
            open()
        }
    }

    hamburgerContainer.addEventListener('click', toggleMenu)

    const dropdownItems = document.querySelectorAll('.mobile-dropdown-header')
    console.log(dropdownItems)

    for (i = 0; i < dropdownItems.length; i++) {
        dropdownItems[i].addEventListener('click', (ev) => {
            ev.stopPropagation()
            const elClassList = dropdownItems[i - 1].parentNode.children[1].classList
            const arrowClassList = dropdownItems[i -1].children[1].classList
            if (!elClassList.contains('opened')) {
                elClassList.add('opened')
                arrowClassList.add('opened')
            } else {
                elClassList.remove('opened')
                arrowClassList.remove('opened')
            }
        })
      }


      /* Accordion */

      const accordions = Array.from(document.querySelectorAll('.accordion'))

      if (accordions.length) {

          const accordionContainer = document.querySelector('.accordion-container')
          accordionContainer.addEventListener('click', (ev) => {
              const parent = ev.target.parentNode;
        for (let index = 0; index < accordions.length; index++) {
            let accordion = accordions[index]
            const accordionHeaderContainer = accordion.querySelector('.accordion-header-container')
            const header = accordion.children[0]
            const panel = accordion.children[1]
            if (accordionHeaderContainer == ev.target || accordionHeaderContainer.contains(ev.target)) {
                    if (panel.classList.contains('active')) {
                        panel.classList.remove('active')
                        header.children[1].classList.remove('active')
                    } else {
                        panel.classList.add('active')
                        header.children[1].classList.add('active')

                    }

                } else {
                    accordion.children[1].classList.remove('active')
                    header.children[1].classList.remove('active')

                }
                
            }
            // let selected = document.querySelectorAll(ev.target)
            // console.log(selected)
        })
    }
      /* Accordion */
  });