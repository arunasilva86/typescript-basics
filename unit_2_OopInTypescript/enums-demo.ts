enum DeliveryStatus {
    SENT, RECEIVED, PENDIGN
}

let deliveryStaus : DeliveryStatus;
deliveryStaus = DeliveryStatus.SENT;

if (deliveryStaus == DeliveryStatus.SENT) {
    console.log("delivery is sent ! ");

}
