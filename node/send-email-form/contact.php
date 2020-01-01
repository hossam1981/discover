<?php

  if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['subject']) && isset($_POST['message'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = nl2br($_POST['message']);
    $to = "spiderdash4u@gmail.com";
    $from = $email;
    $message_format = '<b>Name:</b> '.$name.' <br><b>Email:</b> '.$email.' <p>'.$message.'</p>';
    $headers = "From: $from\n";
    $headers .= "MIME-Version: 1.0\n";
    $headers .= "content-type: text/html; charset=iso-8859-1\n";
    if(mail($to, $subject, $message_format, $headers)){
      echo "success";
    }else{
      echo "The server failed to send teh message. Please try again later.";
    }
  }
?>
