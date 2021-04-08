const pageUp = () => {
    /*
    
    $("a[href^=#]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    }); */

    document.addEventListener('scroll', () => {
        const pageUp = document.querySelector('.pageup');
       
        if (document.documentElement.scrollTop > 750) {
            pageUp.style.display = 'block';
        } else {
            pageUp.style.display = 'none';
        }
    });

    document.querySelectorAll('a[href^="#"').forEach(link => {

        link.addEventListener('click', function(e) {
            e.preventDefault();
    
            let href = this.getAttribute('href').substring(1);
    
            const scrollTarget = document.getElementById(href);
    
            // const topOffset = document.querySelector('.scrollto').offsetHeight;
            const topOffset = 0; // если не нужен отступ сверху 
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;
    
            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });

};

export default pageUp;