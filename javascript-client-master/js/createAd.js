/**
 * Created by Lukas on 30-11-2016.
 */

/**
 *Opretter en funktion med metoden createAd, der anvendes i en knap og der er defineret på serversiden.
 */
$(document).on("click","#ButtonCreateAd", function ()
    {
        createAd()
    });

/**
 * Anvender createAd funktionen jeg lige har oprettet
 */
function createAd()
{
    /**
     * Laver variabler med de forskellige. Det er værdier brugeren skal kunne taste ind, også skal min klient kunne anvende de oplysninger.
     */
    var isbn = +$("#textCreateAdIsbn").val();
    var rating = +$("#textCreateAdRating").val();
    var comment = $("#textCreateAdComment").val();
    var price = +$("#textCreateAdPrice").val();

    /**
     *Laver et AJAX kald til serveren. Med metoden af POST, typen som JSON. Samt withCredentials hvilket gør at AJAX request sender Cookien med til serveren.
     */
    $.ajax(
        {
            url:"https://localhost:8000/createad",
            method:"POST",
            dataType:"json",
            xhrFields:{withCredentials: true},
            data: JSON.stringify(
            {
                "isbn": isbn,
                "rating": rating,
                "comment": comment,
                "price": price
            }),

            /**
             * Hvis funktonen lykkedes oprettes annoncen, hvor du så bliver viderestillet til annoncesiden, og du kan se din netop oprettede annonce til programmet.
             */
            success: function(data)
            {
                alert("Ad has been created successfully");
                alert(JSON.stringify(data));
                window.location.href = "ads.html"
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