/**
 * Created by Lukas on 29-11-2016.
 */

/**
 *Opretter en funktion med metoden createUser, der anvendes i en knap og der er defineret på serversiden.
 */
$(document).on("click","#ButtonCreateUser", function ()
    {
        createUser()
    });

/**
 * Anvender createUser funktionen jeg lige har oprettet
 */
function createUser()
{
    /**
     * Laver variabler med de forskellige. Det er værdier brugeren skal kunne taste ind, også skal min klient kunne anvende de oplysninger.
     */
    var username = $("#textCreateUserUsername").val();
    var password = $("#textCreateUserPassword").val();
    var email = $("#textCreateUserEmail").val();
    var phonenumber = +$("#textCreateUserPhonenumber").val();
    var address = $("#textCreateUserAddress").val();
    var mobilepay = +$("#checkboxCreateUserMobilepay").prop("checked");
    var transfer = +$("#checkboxCreateUserTransfer").prop("checked");
    var cash = +$("#checkboxCreateUserCash").prop("checked");

    /**
     *Laver et AJAX kald til serveren. Med metoden af POST, typen som JSON. Samt withCredentials hvilket gør at AJAX request sender Cookien med til serveren.
     */
    $.ajax(
     {
        url:"https://localhost:8000/createuser",
        method:"POST",
        dataType:"json",
        xhrFields: {withCredentials: true},
        data: JSON.stringify(
            {
                "username": username,
                "password": password,
                "email": email,
                "phonenumber": phonenumber,
                "address": address,
                "mobilepay": mobilepay,
                "transfer": transfer,
                "cash": cash
            }),

         /**
          * Hvis funktonen lykkedes oprettes Brugeren, hvor du så bliver viderestillet til loginsiden, hvor du så har muglighed for at logge ind med din nyoprettede bruger.
          */
        success: function(data)
        {
            alert("User has been created");
            alert(JSON.stringify(data));
            window.location.href = "index.html";
        },
         /**
          * Hvis funktionen mislykkedes kaster den er Error alert med de data fra serveren den melder fejl på.
          */

        error: function (data)
        {
            alert ("Error");
            alert (JSON.stringify(data)
        )}
    })
}