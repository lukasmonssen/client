function getBooks ()
{
    $.ajax(
        {
            url:"https://localhost:8000/getbooks",
            method: "GET",
            dataType:"json",

            success: function(data)
                {
                    $("#tblBooks").dataTable(
                        {
                            data: data,
                            processing: true,
                            bDestroy: true,
                            columns: [
                                { data: "title" },
                                { data: "edition" },
                                { data: "author" },
                                { data: "isbn" },
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