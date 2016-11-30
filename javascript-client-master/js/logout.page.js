/**
 * Created by Lukas on 29-11-2016.
 */
function logOut ()
{
    $.ajax(
        {
            url: "https://localhost:8000/logout",
            method: "POST",
            dataType: "json",
            xhrFields: {withCredentials: true},

            success: function (data) {
                alert("Success");
                alert(JSON.stringify(data));
                Cookies.remove("username");
            },

            error: function (data) {
                alert("Failure");
                alert(JSON.stringify(data));
                Cookies.remove("username", {path: "/brugtbog"});
            }
})
}


