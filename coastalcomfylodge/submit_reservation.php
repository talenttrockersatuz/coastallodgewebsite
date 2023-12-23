<?php
if($_SERVER["REQUEST_METHOD"]==="POST"){
    $data=json_decode(file_get_contents("php://input"),true);

    $name=$data['name'];
    $email=$data['email'];
    $room=$data['room'];
    $arrivalDate=$data['arrivalDate'];
    $departureDate=$data['departureDate'];
    $paymentMethod=$data['paymentMethod'];

    $to="nkarupeni@gmail.com";
    $subject="New Reservation";
    $message="Name:$name\n";
    $message.="Email:$email\n";
    $message="Room:$room\n";
    $message="Arrival Date:$arrivalDate\n";
    $message="Departure Date:$departureDate\n";
    $message="Payment Method:$paymentMethod\n";

    $headers="From:$email";
    if(mail($to,$subject,$message,$headers)){
        http_response_code(200);
        echo "Email sent successfully";
    }else{
        http_response_code(500);
        echo "Failed to send email";
    }
}else{
    http_response_code(403);
    echo "Invalid request";
}
?>