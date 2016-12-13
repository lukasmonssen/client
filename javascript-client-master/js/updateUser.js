/**
 * Created by Lukas on 29-11-2016.
 */

$(document).on("click","#ButtonUpdateUser", function ()
{
    updateUser()
})

function updateUser()
{
    var username = $("#textUpdateUsername").val();
    var phonenumber = +$("#textUpdatePhonenumber").val();
    var address = $("#textUpdateAddress").val();
    var email = $("#textUpdateEmail").val();
    var mobilepay = +$("#checkboxUpdateMobilepay").prop("checked");
    var cash = +$("#checkboxUpdateCash").prop("checked");
    var transfer = +$("#checkboxUpdateTransfer").prop("checked");

    $.ajax(
        {
            url:"https://localhost:8000/updateuser",
            method:"POST",
            dataType:"json",
            xhrFields: {withCredentials: true},
            data: JSON.stringify(
                {
                    "username": username,
                    "phonenumber": phonenumber,
                    "address": address,
                    "email": email,
                    "mobilepay": mobilepay,
                    "cash": cash,
                    "transfer": transfer
                }),

            success: function(data)
            {
                alert("User has been updated");
                alert(JSON.stringify(data));
                window.location.href = "index.html";
            },

            error: function (data)
            {
                alert ("Error");
                alert (JSON.stringify(data)
                )}
        })
}