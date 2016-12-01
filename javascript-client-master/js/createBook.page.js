/**
 * Created by Lukas on 29-11-2016.
 */

$(document).on("click","#ButtonCreateBook", function ()
    {
        createBook()
    })

function createBook()
{
    var isbn = +$("#textCreateBookIsbn").val();
    var title = $("#textCreateBookTitle").val();
    var edition = $("#textCreateBookEdition").val();
    var author = $("#textCreateBookAuthor").val();

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

    success: function(data)
    {
        alert("Book has been created");
        alert(JSON.stringify(data));
        window.location.href = "books.html"
    },

        error: function (data) {alert ("Error");
        alert (JSON.stringify(data)
    )}
    })

}
