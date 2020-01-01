function _(id){
  return document.getElementById(id);
}

function submitForm(){
  _("contact-submit").disabled = true;
  _("status").innerHTML = 'your message has been sent';
  var formdata = new FormData();
  formdata.append("name", _("name").value);
  formdata.append("email", _("email").value);
  formdata.append("subject", _("subject").value);
  formdata.append("message", _("message").value);
  var ajax = new XMLHttpRequest();
  ajax.open("POST", "contact.php");

  ajax.onreadystatechange = function(){
    if(ajax.readyState == 4 && ajax.status == 200){
      if(ajax.responseText == "success"){
        _("contact-form").innerHTML = '<h2>Thanks ' + _("name").value + ', your message has been sent.</h2>';
      }else{
        _("status").innerHTML = ajax.responseText;
        _("contact-submit").disabled = false;
      }
    }
  }

  ajax.send(formdata);

}
