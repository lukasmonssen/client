/**
 * Created by Lukas on 30-11-2016.
 */

function createAd()
{
    var userId = $("#textCreateAdUserId").val();
    var isbn = $("#textCreateAdIsbn").val();
    var rating = $("#textCreateAdRating").val();
    var comment = $("#textCreateAdComment").val();
    var price = $("#textCreateAdPrice").val();

    $.ajax(
        {
            url:"https://localhost:8000/createAd",
            method:"POST",
            dataType:"json",
            xhrFields:{withCredentials: true},
            data: JSON.stringify(
            {
                "userId": userId,
                "isbn": isbn,
                "rating": rating,
                "comment": comment,
                "price": price
            }),

            success: function(data)
            {
                alert("Ad has been created");
                alert(JSON.stringify(data));
                window.location.href = "ads.html"
            },

            error: function (data)
            {
                alert ("Error");
                alert (JSON.stringify(data)
            )}
        })
}