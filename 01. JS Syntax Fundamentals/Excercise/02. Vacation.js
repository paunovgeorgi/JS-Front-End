function calculatePrice(number, type, date) {
    let price = 0;
    let totalPrice = 0;
    switch (type) {
        case 'Students':
            switch (date) {
                case 'Friday': price = 8.45; break;
                case 'Saturday': price = 9.80; break;
                case 'Sunday': price = 10.46; break;
            }
            totalPrice = number * price;
                if (number >= 30) {
                    totalPrice *= 0.85;
                }
            break;
            case 'Business':
                switch (date) {
                    case 'Friday': price = 10.90; break;
                    case 'Saturday': price = 15.60; break;
                    case 'Sunday': price = 16; break;
                }
                if (number >= 100) {
                    number -= 10;
                }
                totalPrice = number * price;
                break;
        default:
            switch (date) {
                case 'Friday': price = 15; break;
                case 'Saturday': price = 20; break;
                case 'Sunday': price = 22.50; break;
            }
            totalPrice = number * price;
                if (number >= 10 && number <= 20) {
                    totalPrice *= 0.95;
                }
            break;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

calculatePrice(30, 'Students', 'Sunday')