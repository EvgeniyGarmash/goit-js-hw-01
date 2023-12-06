function getShippingMessage(country, price, deliveryFee) {
    let resolt = `Shipping to ${country} will cost ${price + deliveryFee} credits`;
    return resolt;
}