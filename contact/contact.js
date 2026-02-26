$(document).ready(function () {
    $(".contact-form button").click(function () {
        var name = $("input[placeholder='Your Name']").val();
        var email = $("input[placeholder='Your Email']").val();
        var project = $("input[placeholder='Project']").val();
        var message = $("textarea[placeholder='Message']").val();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all required fields.");
            return false;
        }

        $.ajax({
            url: "contact.php",
            type: "POST",
            data: {
                name: name,
                email: email,
                project: project,
                message: message
            },
            success: function (response) {
                alert(response);
                $(".contact-form")[0].reset();
            },
            error: function () {
                alert("Something went wrong. Please try again later.");
            }
        });
    });
});