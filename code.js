$(document).ready(function()
{
    $("#f1").submit(greet);
    function greet(e){
        e.preventDefault();
        var rank = $("input:checked").attr('value');
        var name = $("#fname").val() + " " + $("#lname").val();
        var greeting = `Hello ${rank} ${name}!`;
        $("#greeting").text(greeting);
    }

    $("#qty1").change(updateTotal);
    function updateTotal(){
        var subTotal = parseFloat($("#qty1").val()) * $("#price1").data('price');
        //alert(subTotal);
        $("#subtotal1").val(subTotal);

    }
    $(".nav-link").click(showTab);
    function showTab(e) {
        e.preventDefault();
        $(this).tab("show");
    }
});