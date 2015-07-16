$(function(){

  // write your solution here.
    var $number_1 = $('#number1 .number');
    var $number_2 = $('#number2 .number');

    var number_1 = 0;
    var number_2 = 0;

    var operation;


    $('#number1 button').click(function() {

        var type = $(this).attr('class');

        if (type === 'incr') {
            number_1 = number_1 + 1;
        } else if (type === 'decr') {
            number_1 = number_1 - 1;
        };

        $number_1.html(number_1);
    });


    $('#number2 button').click(function() {

        var type = $(this).attr('class');

        if (type === 'incr') {
            number_2 = number_2 + 1;
        } else if (type === 'decr') {
            number_2 = number_2 - 1;
        };

        $number_2.html(number_2);
    });

    $( "div:eq( 1 ) button").click(function() {
        operation = $(this).html();
        $('#operation').html(operation);
    });

    $('#equals').click(function() {
        var result;

        switch(operation) {
            case '+':
                result = number_1 + number_2;
                break;
            case '-':
                result = number_1 - number_2;
                break;
            case '/':
                result = number_1 / number_2;
                break;
            case '*':
                result = number_1 * number_2;
                break;
            default:
                result = number_1 + number_2;
        }

        $('#result').html(result);

    })

});