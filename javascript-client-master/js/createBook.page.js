/**
 * Created by Lukas on 29-11-2016.
 */

/**
 *Opretter en funktion med metoden createBook,  der anvendes i en knap og der er defineret på serversiden.
 */
$(document).on("click","#ButtonCreateBook", function ()
    {
        createBook()
    });

/**
 * Anvender createBook funktionen jeg lige har oprettet
 */
function createBook()
{
    /**
     * Laver variabler med de forskellige. Det er værdier brugeren skal kunne taste ind, også skal min klient kunne anvende de oplysninger.
     */
    var isbn = +$("#textCreateBookIsbn").val();
    var title = $("#textCreateBookTitle").val();
    var edition = $("#textCreateBookEdition").val();
    var author = $("#textCreateBookAuthor").val();

    /**
     *Laver et AJAX kald til serveren. Med metoden af POST, typen som JSON. Samt withCredentials hvilket gør at AJAX request sender Cookien med til serveren.
     */
    $.ajax(
    {
    url:"https://localhost:8000/createbook",
    method:"POST",
    dataType:"json",
    xhrFields:{withCredentials: true},
    data: JSON.stringify(
    {
        "isbn": isbn,
        "title": title,
        "edition": edition,
        "author": author
    }),
        /**
         * Hvis funktonen lykkedes oprettes Bogen, hvor du så bliver viderestillet til annoncesiden, og du kan se din netop oprettede annonce til programmet.
         */

    success: function(data)
    {
        alert("Book has been created");
        alert(JSON.stringify(data));
        window.location.href = "books.html"
    },
        /**
         * Hvis funktionen mislykkedes kaster den er Error alert med de data fra serveren den melder fejl på.
         */

        error: function (data) {alert ("Error");
        alert (JSON.stringify(data)
    )}
    })

}
