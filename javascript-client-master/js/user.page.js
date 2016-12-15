/**
 * Created by Lukas on 29-11-2016.
 */

/**
 *Opretter en funktion med metoden getUsers, der er defineret på serversiden
 */
$(document).ready(function(){
    getUsers();
});

/**
 * Anvender getUsers funktionen
 */
function getUsers ()
{
    /**
     *Laver et AJAX kald til serveren. Med metoden af Get, typen som JSON. Samt withCredentials hvilket gør at AJAX request sender Cookien med til serveren.
     */
    $.ajax(
        {
            url:"https://localhost:8000/getads",
            method: "GET",
            dataType:"json",
            xhrFields: {withCredentials: true},
            /**
             *Hvis funktionen lykkedes, skal den tage udgangspunkt i usersTablebody. Så tager den alle oplysningerne omkring brugerne
             */
            success: function(data)
            {
                /**
                 *Laver en variabel users
                 */
                var $booksTableBody = $("#adsTableBody")
                data.forEach(function (ads) {
                    $booksTableBody.append(
                        "<tr>" +
                        "<td>"  +  ads.adId  +  "</td>" + "<br>" +
                        "<td>"  +  ads.userId  +  "</td>" + "<br>" +
                        "<td>"  +  ads.isbn  +  "</td>" + "<br>" +
                        "<td>"  +  ads.price  +  "</td>" + "<br>" +
                        "<td>"  +  ads.rating  +  "</td>" + "<br>" +
                        "<td>"  +  ads.comment  +  "</td>" + "<br>" +
                        "<td>"  +  ads.deleted  +  "</td>" + "<br>" +
                        "<td>"  +  ads.locked  +  "</td>" + "<br>" +
                        "<tr>" )
                });

                /**
                 * Tildeler data til de forskellige data navne
                 */
                $("#tblUsers").dataTable(
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
                        ]
                    });
            },
            /**
             * Hvis programmet ikke kan hente annoncerne, så kaster den fejlmeddelse hvor JSON.stringify finder hvilken fejl det er. Igen er det defineret på serversiden
             */
            error: function (data)
            {
                alert(JSON.stringify(data));
                alert("Hov! Der opstod en fejl!");
            }
        })
}