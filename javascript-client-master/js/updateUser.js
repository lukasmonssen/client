/**
 * Created by Lukas on 29-11-2016.
 */

/**
 *Opretter en funktion med metoden updateUser, der anvendes i en knap og der er defineret på serversiden.
 */
$(document).on("click","#ButtonUpdateUser", function ()
{
    updateUser()
});

/**
 * Anvender updateUser funktionen jeg lige har oprettet
 */
function updateUser()
{
    /**
     * Laver variabler med de forskellige. Det er værdier brugeren skal kunne taste ind, også skal min klient kunne anvende de oplysninger og ændre dem.
     */
    var username = $("#textUpdateUsername").val();
    var phonenumber = +$("#textUpdatePhonenumber").val();
    var address = $("#textUpdateAddress").val();
    var email = $("#textUpdateEmail").val();
    var mobilepay = +$("#checkboxUpdateMobilepay").prop("checked");
    var cash = +$("#checkboxUpdateCash").prop("checked");
    var transfer = +$("#checkboxUpdateTransfer").prop("checked");

    /**
     *Laver et AJAX kald til serveren. Med metoden af POST, typen som JSON. Samt withCredentials hvilket gør at AJAX request sender Cookien med til serveren.
     */
    $.ajax(
        {
            url:"https://localhost:8000/updateuser",
            method:"POST",
            dataType:"json",
            xhrFields: {withCredentials: true},
            data: JSON.stringify(
                {
                    "username": username,
                    "phonenumber": phonenumber,
                    "address": address,
                    "email": email,
                    "mobilepay": mobilepay,
                    "cash": cash,
                    "transfer": transfer
                }),


            /**
             * Hvis funktonen lykkedes opdateres Brugeren, hvor du så bliver viderestillet til startsiden, hvor du så har muglighed for at logge ind igen med dine opdaterede brugeroplysninger.
             */
            success: function(data)
            {
                alert("User has been updated");
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