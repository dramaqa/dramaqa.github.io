window.onload = function() {

// Add active class to the current button (highlight it)
    let header = document.getElementById("navbar");
    console.log(header);
    var a_tags = header.getElementsByTagName("a");
    console.log(a_tags);
    let url_element = window.location.href;
    console.log(url_element);
    console.log(url_element.includes('Workshop'));

    for (let i = 0; i < a_tags.length; i++) {
        console.log(a_tags[i].text);
        if (url_element.includes(a_tags[i].text)) {
            console.log(a_tags[i].style);
//                console.log(a_tags[i].style);
            a_tags[i].style.setProperty('color', '#007bff');
            console.log(a_tags[i].style);
//                console.log('color:', a_tags[i].style.getPropertyValue('color') + '|');
            a_tags[i].className += 'active';
        }
    }


    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    if (isMobile()) {
        console.log('Mobile');
        $(document).ready(function () {
            $("#nav ul.dropdown-content").hide();
            $("#nav ul.navbar li").click(function () {
                // console.log($('ul', this));
                $('ul', this).slideToggle("fast");
            });
        });
    } else {
        console.log('Desktop');
        $(document).ready(function () {
            $("#nav ul.dropdown-content").hide();
            $("#nav ul.navbar li").hover(function () {
                console.log($('ul', this));
                $('ul', this).style.display = 'block';
                // $('ul', this).slideToggle("fast");
            });
        });
    }

};