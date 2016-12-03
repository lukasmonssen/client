/**
 * Created by Lukas on 30-11-2016.
 */

$(document).on("click","#ButtonCreateAd", function ()
    {
        createAd()
    })

function createAd()
{
    var isbn = $("#isbn").val();
    var rating = $("#rating").val();
    var comment = $("#comment").val();
    var price = $("#price").val();

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

            success: function(data)
            {
                alert("Ad has been created successfully");
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