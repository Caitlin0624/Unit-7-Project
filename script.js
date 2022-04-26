$("button").click(function() {
    let name = $(".question1").val();
    let sleep = $(".question2").val();
    let year = $(".question3").val();
    $(".prediction").text(name + " you will have " + sleep * 365 + " hours of sleep in " + year);
});

$(".image").hide();

$(".submit").click(function() {
    $(".image").show();
    $(".submit").hide();
});