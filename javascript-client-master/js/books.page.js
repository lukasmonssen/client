/**
 * Created by Lukas on 29-11-2016.
 */

/**
 *Opretter en funktion med metoden getBooks, der er defineret på serversiden
 */

$(document).ready(function(){
        getBooks();
    });

/**
 * Anvender getBooks funktionen
 */
function getBooks()
{
    /**
     *Laver et AJAX kald til serveren. Med metoden af Get, typen som JSON. Samt withCredentials hvilket gør at AJAX request sender Cookien med til serveren.
     */
    $.ajax
    ({
            url:"https://localhost:8000/getbooks",
            method: "GET",
            dataType:"json",
            xhrFields: {withCredentials: true},
        /**
         *Hvis funktionen lykkedes, skal den tage udgangspunkt i booksTablebody. Så tager den alle oplysningerne omkring bøgerne.
         */
            success: function(data)
            {
                /**
                 *Laver en variabel books
                 */
                var $booksTableBody = $("#booksTableBody")
                data.forEach(function (book) {
                    $booksTableBody.append
                    (
                        "<tr>" +
                        "<td>" + book.isbn + "</td>" + "<br>" +
                        "<td>" + book.title + "</td>" + "<br>" +
                        "<td>" + book.edition + "</td>" + "<br>" +
                        "<td>" + book.author + "</td>" + "<br>" +

                        "</tr>"
                    )
                });
                /**
                 * Tildeler data til de forskellige data navne
                 */
                $("#tblBooks").dataTable(
                    {
                        data: data,
                        processing: true,
                        bDestroy: true,
                        columns:
                            [
                            {data: "isbn"},
                            {data: "title"},
                            {data: "edition"},
                            {data: "author"},
                            ]
                    });
            },

        /**
         * Hvis programmet ikke kan hente brugerne, så kaster den fejlmeddelse hvor JSON.stringify finder hvilken fejl det er. Igen er det defineret på serversiden
         */
                error: function (data)
                {
                    alert(JSON.stringify(data));
                    alert("There was a fault");
                }
    });
}