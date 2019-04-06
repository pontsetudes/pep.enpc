function postToGoogleForm(form) {
    formdata = new FormData(form);
    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": "https://docs.google.com/forms/d/e/1FAIpQLSc1iQId4DG4Rejv8JVG2tmcXYpfztcGHAvuFwQryTbG5WZPzQ/formResponse",
        "method": "POST",
        "processData": false,
        "contentType": false,
        "mimeType": "multipart/form-data",
        "data": formdata
    });
}

function clearForm(form) {
    form.elements["entry.569483692"].value = "";
    form.elements["entry.683583938"].value = "";
    form.elements["entry.1746294369"].value = "";
    form.elements["entry.945021883"].value = "";
    form.elements["entry.226339160"].value = "";

}

function validateForm(form) {
    if (form.elements["entry.569483692"].value == "") {
       return false;
    }
    if (form.elements["entry.683583938"].value == "") {
       return false;
    }
    if (form.elements["entry.1746294369"].value == "") {
       return false;
    }
    if (form.elements["entry.226339160"].value == "") {
        return false;
    }
    return true;
 }

function handleSubmitForm(form) {
    document.activeElement.blur();
    var isFormValid = validateForm(form);
    if (!isFormValid) {
        document.getElementById("form-error").style.display = 'block';
    } else {
        postToGoogleForm(form);
        document.getElementById("form-error").style.display = 'none';
        document.getElementById("form-success").style.display = 'block';
        clearForm(form);
    }
}