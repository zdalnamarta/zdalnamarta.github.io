$(document).ready(function() { 
   getSum();
});

function getSum() {
    $('#count-sum').click(function() {
       var salaries = $(document).find('.salary');
    var sum = 0;
    salaries.each(function( index ) {
        sum += parseFloat($(this).text());
    });
    $('#sum').text(sum);
            });
}