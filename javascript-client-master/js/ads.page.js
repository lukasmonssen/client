/**
 * Created by Lukas on 29-11-2016.
 */

//Opretter en funktion med metoden getAds, der er defineret på serversiden

$(document).ready(function()
{
    getAds();
});

//Anvender getAdsfunktionen
function getAds()
{
//Laver et AJAX kald til serveren. Med metoden af Get, typen som JSON. Samt withCredentials hvilket gør at AJAX request sender Cookien med til serveren.
    $.ajax
    ({
        url:"https://localhost:8000/getads",
        method:"GET",
        dataType:"json",
        xhrFields: {withCredentials: true},
// Hvis funktionen lykkedes, skal den tage udgangspunkt i usersTablebody. Så tager den alle oplysningerne omkring annoncer
            success: function(data)
            {
// Laver en variable med ads
                var $adsTableBody = $("#adsTableBody");
                //Den skal tage udgangspunkt i adID
                var adId = $("#adId");
                data.forEach(function (ad)
                {
                    $adsTableBody.append
                    (
                        "<tr>"  +
                        "<td>"  +  ad.adId  +  "</td>" + "<br>" +
                        "<td>"  +  ad.userId  +  "</td>" + "<br>" +
                        "<td>"  +  ad.isbn  +  "</td>" + "<br>" +
                        "<td>"  +  ad.price  +  "</td>" + "<br>" +
                        "<td>"  +  ad.rating  +  "</td>" + "<br>" +
                        "<td>"  +  ad.comment  +  "</td>" + "<br>" +
                        "<td>"  +  ad.deleted  +  "</td>" + "<br>" +
                        "<td>"  +  ad.locked  +  "</td>" + "<br>" +
                        "<td><a role='button' class ='btn btn-success btn-sm ReserveAdButton' data-adId='" + adId + "'>Reserver </a> </td>" +
                        "<tr>"
                    )
                });

                $("#tblAds").dataTable(
                    {
                        data: data,
                        processing: true,
                        bDestroy: true,
                        columns: [
                            { data: "adId" },
                            { data: "userId" },
                            { data: "isbn" },
                            { data: "price" },
                            { data: "rating" },
                            { data: "comment" },
                            { data: "deleted" },
                            { data: "locked" },
                            { data: "ReserveAdButton"}
                        ]
                    });



                $(".ReserveAdButton").on("click", function()
                {
                    var adId = +$("adId");
                    var confirmation = confirm("Do you want to reserve this book?");
                    if (confirmation == true)
                    {
                        $.ajax
                        ({
                            url: "https://localhost:8000/reservead",
                            type: 'POST',
                            dataType: "json",
                            xhrFields: {withCredentials: true},
                            data: JSON.stringify
                            ({
                                "id": adId
                            })
                        });


                        reserveAd();
                    }else
                        {window.close();}

                });

            }
    });
}

function reserveAd ()
{

    var adId = +$("#reserveAd");
    $.ajax
    ({
        url: "https://localhost:8000/reservead",
        type: 'POST',
        dataType: "json",
        xhrFields: {withCredentials: true},
        data: JSON.stringify
        ({
            "id" : adId
        }),

        success: function (data)
        {
            alert(JSON.stringify(data));
            window.location.href = "myAds.html";
        },

        error: function(data) {
            alert(JSON.stringify(data));
        }
    })

}