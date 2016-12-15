/**
 *Opretter en funktion med metoden login, der anvendes i en knap og der er defineret på serversiden.
 */
$(document).ready(function() {
    $("#login").click(function() {
        login()});
});

/**
 * Anvender createAd funktionen jeg lige har oprettet
 */
function login()
{
    /**
     * Laver variabler med de forskellige. Det er værdier brugeren skal kunne taste ind, også skal min klient kunne anvende de oplysninger.
     */
    var username = $("#username").val();
    var password = $("#password").val();
    var type = $("#type").val();


    /**
     *Laver et AJAX kald til serveren. Med metoden af POST, typen som JSON. Samt withCredentials hvilket gør at AJAX request sender Cookien med til serveren.
     */
    $.ajax({
        url: "https://localhost:8000/login",
        type: "POST",
        dataType: "json",
        xhrFields: { withCredentials: true },
        data: JSON.stringify({
            "username" : username,
            "password" : password
        }),
        /**
         * Hvis funktonen lykkedes bliver du hermed logget ind på programmet. Hvis det lykkedes med typen 1, så får du adminview, alt andet der lykkedes får brugerview..
         */
        success: function(data) { alert(JSON.stringify(data));
           if(data.type == 1)
           {
               window.location.href = "admin.html";}
           else {
               window.location.href = "user.html";}
            },
        /**
         *Hvis den ikke kan logge ind, kaster den en alert boks op med fejlmeddelse fra den data vi har sat.
         */
        error: function(data) { alert(JSON.stringify(data)); }
    });
}