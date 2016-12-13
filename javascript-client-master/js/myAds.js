/**
 * Created by Lukas on 08-12-2016.
 */

$(document).ready(function()
    {
        getMyAds();
    });

function getMyAds()
{
    $.ajax(
        {
            url:"https://localhost:8000/getmyads",
            method:"GET",
            dataType:"json",
            xhrFields: {withCredentials: true},

            success: function(data)
            {
                    var $myAdsTableBody = $("#myAdsTableBody")
                    data.forEach(function (myAds)
                    {
                        $myAdsTableBody.append
                        (
                            "<tr>"  +
                            "<td>"  +  myAds.adId  +  "</td>" + "<br>" +
                            "<td>"  +  myAds.userId  +  "</td>" + "<br>" +
                            "<td>"  +  myAds.isbn  +  "</td>" + "<br>" +
                            "<td>"  +  myAds.price  +  "</td>" + "<br>" +
                            "<td>"  +  myAds.rating  +  "</td>" + "<br>" +
                            "<td>"  +  myAds.comment  +  "</td>" + "<br>" +
                            "<td>"  +  myAds.deleted  +  "</td>" + "<br>" +
                            "<td>"  +  myAds.locked  +  "</td>" + "<br>" +
                            "<td><a role='button' class ='btn btn-success btn-sm UnlockAdButton' data-adid='" + ads.adId + "'>Unlock </a> </td>" +
                            "<tr>"
                        )
                }   )

                $("#tblMyAds").dataTable(
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
                            {defaultContent: "<button type ='button'>Unlock</button>"}
                        ]
                    });
            }
        })
}