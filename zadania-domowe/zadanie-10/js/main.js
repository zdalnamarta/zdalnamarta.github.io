
$(document).ready(function() {
    getData();
});
 function getData() {
     $('button').click( function() {
    $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function(data) {
        
        $('button').after($('<div id="dane-programisty"></div>'));
        $('#dane-programisty').append($('<p>').text(data.imie));
        $('#dane-programisty').append($('<p>').text(data.nazwisko));
        $('#dane-programisty').append($('<p>').text(data.zawod));
        $('#dane-programisty').append($('<p>').text(data.firma));
        console.log(data);
    });
});
 }