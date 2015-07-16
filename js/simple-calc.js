$(function(){

  // write your solution here.

    function numberButtons(element){

        var counter = 0;

        element.on('click', 'button', function() {
            var type = $(this).attr('class');

            if (type === 'incr') {
                counter = counter + 1;
            } else if (type === 'decr') {
                counter = counter - 1;
            };

            element.find('.number').html(counter);
        })

        return {
            getCounter: function(){
                return counter;
            }
        }

    }

    var number_1_button = numberButtons($('#number1'));
    var number_2_button = numberButtons($('#number2'));
    var operation;

    $( "div:eq( 1 ) button").click(function() {
        operation = $(this).html();
        $('#operation').html(operation);
    });

    $('#equals').click(function() {
        var number_1 = number_1_button.getCounter();
        var number_2 = number_2_button.getCounter();

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