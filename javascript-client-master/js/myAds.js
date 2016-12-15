/**
 * Created by Lukas on 08-12-2016.
 */

/**
 * Opretter en funktion med metoden getMyads, der er defineret på serversiden
 */
$(document).ready(function()
    {
        getMyAds();
    });

/**
 * Anvender getMyAds funktionen
 */
function getMyAds()
{
    /**
     *Laver et AJAX kald til serveren. Med metoden af Get, typen som JSON. Samt withCredentials hvilket gør at AJAX request sender Cookien med til serveren.
     */
    $.ajax(
        {
            url:"https://localhost:8000/getmyads",
            method:"GET",
            dataType:"json",
            xhrFields: {withCredentials: true},
            /**
             *Hvis funktionen lykkedes, skal den tage udgangspunkt i adsTablebody. Så tager den alle oplysningerne omkring brugeren som er logget ind, og fanget de reservationer han har reserveret.
             */
            success: function(data)
            {
                /**
                 *Laver en variabel myAds
                 */
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
                }   );
                /**
                 * Tildeler data til de forskellige data navne
                 */
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
            },
            /**
             * Hvis programmet ikke kan hente mine annoncer, så kaster den fejlmeddelse hvor JSON.stringify finder hvilken fejl det er. Igen er det defineret på serversiden
             */
            error: function (data)
            {
                alert(JSON.stringify(data));
                alert("There was a fault");
            }
        })

}