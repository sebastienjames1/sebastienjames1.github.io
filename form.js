function sendMail() {
    var link = 'mailto:' + document.getElementById("email").value + '?subject=Message from ' + document.getElementById('name').value + '&body=' + document.getElementById("message").value
    window.open(link);
}
