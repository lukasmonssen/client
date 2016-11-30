function getUsers ()
{
    $.ajax(
        {
            url:"https://localhost:8000/getads",
            method: "GET",
            dataType:"json",
            xhrFields: {withCredentials: true},

            success: function(data)
            {
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
                })

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
            error: function (data)
            {
                alert(JSON.stringify(data));
                alert("Hov! Der opstod en fejl!");
            }
        })
}