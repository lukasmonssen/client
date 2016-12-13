/**
 * Created by Lukas on 29-11-2016.
 */

$(document).ready(function(){
        getBooks();
    });

function getBooks()
{
    $.ajax
    ({
            url:"https://localhost:8000/getbooks",
            method: "GET",
            dataType:"json",
            xhrFields: {withCredentials: true},

            success: function(data)
            {
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
                error: function (data)
                {
                    alert(JSON.stringify(data));
                    alert("Hov! Der opstod en fejl!");
                }
    });
}