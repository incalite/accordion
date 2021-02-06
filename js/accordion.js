$(() => {
    $('.dropdown-menu').hide();

    $('a').click((e) => {
        var idn = $(e.target); // get the element from the click event
        var cName = idn[0]['classList'][1]; // get the class name
        $('.'+cName+'m').slideToggle(500); // construct the new class to open the dropdown menu
    });

    $('.sandwitch-btn').click(() => {
        $('.accordion ul').slideToggle(500); // handle sandwitch transition 
        $('.dropdown-menu').slideToggle(500); // reset dropdown menus
    });

});