const input = require('sync-input');

let giftList = [
    {
        id: 1,
        name: 'Teddy Bear',
        price: 10
    },
    {
        id: 2,
        name: 'Big Red Ball',
        price: 5
    },
    {
        id: 3,
        name: 'Huge Bear',
        price: 50
    },
    {
        id: 4,
        name: 'Candy',
        price: 8
    },
    {
        id: 5,
        name: 'Stuffed Tiger',
        price: 15
    },
    {
        id: 6,
        name: 'Stuffed Dragon',
        price: 30
    },
    {
        id: 7,
        name: 'Skateboard',
        price: 100
    },
    {
        id: 8,
        name: 'Toy Car',
        price: 25
    },
    {
        id: 9,
        name: 'Basketball',
        price: 20
    },
    {
        id: 10,
        name: 'Scary Mask',
        price: 75
    }
];
let balance = 0;

let list = () => {
    console.log("Here's the list of gifts:\n");
    for (let i in giftList) {
        let gift = giftList[i];
        console.log(`${gift.id}- ${gift.name}, Cost: ${gift.price} tickets`);
    }
}

console.log("WELCOME TO THE CARNIVAL GIFT SHOP!");
console.log("Hello friend! Thank you for visiting the carnival!");

list();

let exit = false;
do {
    console.log(`\nWhat do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop`);

    let number = Number(input());
    switch (number) {
        case 1: {
            if (giftList.length === 0) {
                console.log("Wow! There are no gifts to buy.");
                break;
            }
            let giftId = Number(input("Enter the number of the gift you want to get: "));
            if (!Number.isInteger(giftId)) {
               console.log("Please enter a valid number!");
               break;
            }
            let giftIndex = giftList.findIndex(gift => gift.id === giftId);
            if (giftIndex === -1) {
                console.log("There is no gift with that number!");
                break;
            }
            let gift = giftList[giftIndex];
            if (balance < gift.price) {
                console.log("You don't have enough tickets to buy this gift.");
                break;
            }
            console.log(`Here you go, one ${gift.name}!`);
            giftList.splice(giftIndex ,1);
            balance = balance - gift.price;
            console.log(`Total tickets: ${balance}`);
            break;
        }
        case 2: {
            let amount = Number(input("Enter the ticket amount: ",));
            if (!(Number.isInteger(amount) && amount >= 0 && amount <= 1000)) {
                console.log("Please enter a valid number between 0 and 1000.");
                break;
            }
            balance = balance + amount;
            console.log(`Total tickets: ${balance}`);
            break;
        }
        case 3: {
            console.log(`Total tickets: ${balance}`);
            break;
        }
        case 4: {
            if (giftList.length === 0) {
                console.log("Wow! There are no gifts to buy.");
            } else {
                list();
            }
            break;
        }
        case 5: {
            exit = true;
            console.log("Have a nice day!");
            break;
        }
        default: {
            console.log("Please enter a valid number!");
            break;
        }
    }
} while (!exit);

