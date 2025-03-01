<?php


session_start();

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'phpmailler/src/Exception.php';
require 'phpmailler/src/PHPMailer.php';
require 'phpmailler/src/SMTP.php';

if(isset($_POST)) {


if($_POST["email"]  && $_POST["name"] && $_POST["phone"] && $_POST["subject"] && $_POST["message"]) {


        
//Mail Gönderme İşlemini Gerçekleştir.

$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 0;                                           //Enable verbose debug output
    $mail->isSMTP();                                                //Send using SMTP
    $mail->Host       = 'smtp.yandex.com';                           //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                       //Enable SMTP authentication
    $mail->CharSet    = 'utf-8';
    $mail->Username   = 'ieeeytuiletisim@yandex.com';                     //SMTP username
    $mail->Password   = 'cquykyvrlvxaiyde';                               //SMTP password
    $mail->SMTPSecure = "tls";                                          //Enable implicit TLS encryption
    $mail->Port       = 587;                                        //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('ieeeytuiletisim@yandex.com', $_POST["name"] );
    $mail->addAddress("aytugotmar@ieeeytu.com", "Aytuğ");            //Add a recipient
    $mail->addAddress("abdulsametcetinkaya@ieeeytu.com", "Abdülsamet");               //Name is optional
    $mail->addReplyTo($_POST["email"]);
    $mail->addCC('csieeeytu@gmail.com');
    // $mail->addBCC('bcc@example.com');

    //Attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = $_POST["subject"];
    $mail->Body    = "<br>Telefon: ".$_POST["phone"] ."<br><br>Gönderen Email: ".$_POST["email"] ."<br><br>Mesaj: ".$_POST["message"];
    $mail->AltBody = "<br>Telefon: ".$_POST["phone"] ."<br><br>Gönderen Email: ".$_POST["email"] ."<br><br>Mesaj: ".$_POST["message"];

    if($mail->send()) {
        $alert = array(

            "message" => "Mesaj başarılı bir şekilde iletildi!",
            "type" => "success",
           );

    }
    else {
        $alert = array(

            "message" => "Mesaj gönderilirken bir hata oluştu!",
            "type" => "danger",
           );

           
    }

    
   

}
 catch (Exception $e) {
    $alert = array(

        "message" => $e->getMessage(),
        "type" => "danger",
       );
    


       
}

}

    else {
        
       $alert = array(

        "message" => "Lütfen tüm alanları doldurunuz!",
        "type" => "danger",
       );


       
    }
     
    $_SESSION["alert"] = $alert;
    
    
    header("location:../iletisim.php");

}

?>


