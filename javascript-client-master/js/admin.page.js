function getUsers ()
{
  $.ajax(
  {
     url:"https://localhost:8000/getusers",
     method: "GET",
     dataType:"json",
     xhrFields: {withCredentials: true},

        success: function(data)
        {
          var $booksTableBody = $("#usersTableBody")
          data.forEach(function (user) {
            $booksTableBody.append(
                "<tr>" +
                "<td>" + user.userId + "</td>" + "<br>" +
                "<td>" + user.username + "</td>" +  "<br>" +
                "<td>" + user.phonenumber + "</td>" + "<br>" +
                "<td>" + user.address + "</td>" + "<br>" +
                "<td>" + user.email + "</td>" + "<br>" +
                "<td>" + user.mobilepay + "</td>" + "<br>" +
                "<td>" + user.cash + "</td>" + "<br>" +
                "<td>" + user.transfer+ "</td>" + "<br>" +
                "<td>" + user.type + "</td>" +
                "</tr>"  )
          })

          $("#tblUsers").dataTable(
              {
                data: data,
                processing: true,
                bDestroy: true,
                columns: [
                  { data: "userId" },
                  { data: "username" },
                  { data: "phonenumber" },
                  { data: "address" },
                  { data: "email" },
                  { data: "mobilepay" },
                  { data: "cash" },
                  { data: "transfer" },
                  { data: "type" },

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