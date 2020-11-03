$(document).ready(function()
{
    $("#f1").submit(greet);
    function greet(e){
        e.preventDefault();
        var rank = $("input:checked").attr('value');
        var name = $("#fname").val() + " " + $("#lname").val();
        var greeting = `Hello ${rank} ${name}!`;
        var textColor = "";
        switch(rank) {
            case "Private" : textColor="grey";break;
            case "PFC" : textColor="pink";break;
            case "Specialist" : textColor="blue";break;
            case "Sgt." : textColor="red";break;
        }
        $("#greeting").text(greeting);
        $("#greeting").css('color',textColor);
    }

    $("#qty1").change(updateTotal);
    $("#qty2").change(updateTotal);
    function updateTotal(){
        var row1subTotal = parseFloat($("#qty1").val()) * $("#price1").data('price');
        var row2subTotal = parseFloat($("#qty2").val()) * $("#price2").data('price');

        $("#subtotal1").text(row1subTotal);
        $("#subtotal2").text(row2subTotal);

        $("#total").text(row1subTotal+row2subTotal);

    }

});