$(function(){
    var mixer = mixitup('.directions__list');

    $('.directions__filter-btn').on('click', function name(){
        $('.directions__filter-btn').removeClass('directions__filter-btn--active');
        $(this).addClass('directions__filter-btn--active');
    })
})