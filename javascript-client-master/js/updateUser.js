/**
 * Created by Lukas on 05-12-2016.
 */
/**
 * Created by Lukas on 29-11-2016.
 */

$(document).on("click","#ButtonUpdateUser", function ()
{
    currentUser()
})

var user = JSON.parse(localStorage.getItem("user"));
function currentUser()
{
    var username = $("#textCurrentUserUsername").val();
    var password = $("#textCurrentUserPassword").val();
    var email = $("#textCurrentUserEmail").val();
    var phonenumber = +$("#textCurrentUserPhonenumber").val();
    var address = $("#textCurrentUserAddress").val();
    var mobilepay = +$("#checkboxCurrentUserMobilepay").prop("checked");
    var transfer = +$("#checkboxCurrentUserTransfer").prop("checked");
    var cash = +$("#checkboxCurrentUserCash").prop("checked");




    document.getElementById("#textCurrentUserUsername").value = user.username;
    document.getElementById("#textCurrentUserPassword").value = user.password;
    document.getElementById("#textCurrentUserEmail").value = user.email;
    document.getElementById("#textCurrentUserPhonenumber").value = user.phonenumber;
    document.getElementById("#textCurrentUserAddress").value = user.address;
    document.getElementById("#textCurrentUserMobilepay").value = user.mobilepay;
    document.getElementById("#textCurrentUserTransfer").value = user.transfer;
    document.getElementById("#textCurrentUserCash").value = user.cash;


    $.ajax(
        {
            url:"https://localhost:8000/getuser",
            method:"GET",
            dataType:"json",
            xhrFields: {withCredentials: true},

            success: function(data)
            {
                localStorage.getItem("user");
                localStorage.getItem("");
                alert("User has been updatet");
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