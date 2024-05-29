function myFunction(id) {
    var copyText = document.getElementById(`${id}`);
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}