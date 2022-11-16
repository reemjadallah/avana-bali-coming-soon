//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 200;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

function sendMail() {
    var email_address= document.body.querySelector('#email');
    var is_valid = ValidateEmail(email_address);
    if(is_valid) {
        var error = document.querySelector('#error-message');
        if(!!error) {
            error.style.display = "none";
            email_address.classList.remove("error");
        }
        email_address.value = "";
        var templateParams = {
            email_address: document.body.querySelector('#email'),
        };
        var success = document.querySelector('#success-message');
        success.style.display = "block";
    
        setTimeout(() => {success.style.display = "none";}, 5000);
         
        // emailjs.send('service_1yqcmgl', 'template_qfej1a7', templateParams)
        //     .then(function(response) {
        //        console.log('SUCCESS!', response.status, response.text);
        //     }, function(error) {
        //        console.log('FAILED...', error);
        //     });

    }
}

function ValidateEmail(inputText)
{
    var error = document.querySelector('#error-message');
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat)){
        return true;
    }
    else{
        var email_address = document.body.querySelector('#email');
        email_address.classList.add("error");
        error.style.display = "block";
        document.body.querySelector('#email').focus();
        return false;
    }
}