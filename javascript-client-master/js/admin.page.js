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
 * Anvender getUsersfunktionen
 */
function getUsers ()
{
    /**
     *Laver et AJAX kald til serveren. Med metoden af Get, typen som JSON. Samt withCredentials hvilket gør at AJAX request sender Cookien med til serveren.
     */
  $.ajax(
  {
     url:"https://localhost:8000/getusers",
     method: "GET",
     dataType:"json",
     xhrFields: {withCredentials: true},
          /**
           *Hvis funktionen lykkedes, skal den tage udgangspunkt i usersTablebody. Så tager den alle oplysningerne omkring brugerne
           */
        success: function(data)
        {
              /**
               *Laver en veriabel users
               */
          var $usersTableBody = $("#usersTableBody")
          data.forEach(function (user) {
            $usersTableBody.append(
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

            /**
             * Sætter daterne til de forskellige data navne
             */
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
                  { data: "type" }

                ]
              });
        },

      /**
       * Hvis programmet ikke kan hente brugerne, så kaster den fejlmeddelse hvor JSON.stringify finder hvilken fejl det er. Igen er det defineret på serversiden
       */

        error: function (data)
        {
          alert(JSON.stringify(data));
          alert("There was a fault");
        }
      })
}