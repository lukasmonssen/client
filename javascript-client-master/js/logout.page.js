/**
 * Created by Lukas on 29-11-2016.
 */

/**
 *Opretter en funktion med metoden logud, der anvendes i en knap og der er defineret på serversiden.
 */
$(document).ready(function()
{
    $("#logout").click(function ()
    {
       logout();
    });

});

/**
 * Anvender logud funktionen jeg lige har oprettet
 */
function logout ()
{
    $.ajax(
        {
            /**
             *Laver et AJAX kald til serveren. Med metoden af POST, typen som JSON. Samt withCredentials hvilket gør at AJAX request sender Cookien med til serveren.
             */
            url: "https://localhost:8000/logout",
            method: "POST",
            dataType: "json",
            xhrFields: {withCredentials: true},

            /**
             * Hvis funktionen lykkedes skal den logge ud, og fjerne det sessionID (cookie) den har tildelt mig.
             */
            success: function (data) {
                alert("Success");
                alert(JSON.stringify(data));
                Cookies.remove("username");
            },
            /**
             * Hvis den fejler, skal den kaste en boks med fejlmeddelsen fra serveren.
             */
            error: function (data) {
                alert("Failure");
                alert(JSON.stringify(data));
                Cookies.remove("username", {path: "/brugtbog"});
            }
})
}


