$(document).ready(function () {
    //Deal with tabs Section

    //When click on li add class selected and remove from others
    $('.tab-switch li').click(function () {
        $(this).addClass('selected').siblings().removeClass('selected');
        //print whitch elemet I clicked on 
        window.console.log($(this).data('class'));

        window.console.log('هيييييييييييييييييييييه');
        //Hide All Divs
        $('.tab-content > div').hide();
        //show div selected 
        $('.' + $(this).data('class')).show();
    });

    //slider init
    $("#slides").responsiveSlides({
        speed: 700, //Speed of the transition
        timeout: 3500, //Time between slide transitions
        pager: true     //Show the pagination
    });




    //wow.js init
    wow = new WOW(
            {
                animateClass: 'animated',
                mobile: false,
                offset: 100
            }
    );
    wow.init();



});





