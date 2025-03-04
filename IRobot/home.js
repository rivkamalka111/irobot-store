document.addEventListener('DOMContentLoaded', function() {
    const cards = [
        {
            src: "../IRobotפרוייקט  Java Script/Downloaded images/all the page/Photos/Roomba_Combo_Essential_White_Photo_Studio_AngledRight_ChargingDock_Phone_Overlay_FilledWaterBin_4000x4000.jpg",
            name: " irobot roomba kombo essential שואב שוטף רובוטי",
            price: "1290 שח",
            detailsPage: './product-details.html',
            p: "תיאור מוצר 1"
        },
        {
            src: "../IRobotפרוייקט  Java Script/Downloaded images/store/combined/- iRobot_files/RoombaCombo_j7_j7_Graphite_Photo_Studio_Base_LeftFacing_PadLifting_Phone_Overlay_4000x4000.png",
            name: "irobot roomba kombo j7 שוטף רובוטי", 
            price: " 2290 שח",
            detailsPage: './product-details.html',
            p: "תיאור מוצר 2"
        },
        {
            src: "./Downloaded images/all the page/Photos/Roomba_j9-_RubyBronze_Photo_Studio_CleanBase_LeftFacing_Robot_Icons_Poop_iRobotOS_Overlay_4000x4000.jpg",
            name: " irobot roomba j9+שואב שוטף רובוטי",
            price: " 3990 שח",
            detailsPage: './product-details.html',
            p: "תיאור מוצר 3"
        },
        {
            src: "./Downloaded images/all the page/Photos/RoombaCombo_j7_j7_Graphite_Photo_Studio_Base_LeftFacing_PadLifting_Phone_Overlay_4000x4000.png",
            name: " irobot roomba kombo j7+ שוטף רובוטי",
            price: "3900 שח",
            detailsPage: './product-details.html',
            p: "תיאור מוצר 4"
        },
        {
            src: "./Downloaded images/store/combined/- iRobot_files/RoombaCombo_j9-_CleanBase_Photo_InSitu_AutoFill_Overlay_Refill30Days_1500x1500.jpg",
            name: " irobot roomba kombo j9+ שוטף רובוטי",
            price: " 5600 שח ",
            detailsPage: './product-details.html',
            p: "תיאור מוצר 5"
        },
        {
            src: "./Downloaded images/store/combined/- iRobot_files/RoombaCombo_j9-_Web_PDP_Carousel_Vacuum-Wars_4000x4000.jpg.jpg",
            name: " irobot roomba kombo i5+ שוטף רובוטי",
            price: "2700 שח",
            detailsPage: './product-details.html',
            p: "תיאור מוצר 6"
        },
        {
            src: "./Downloaded images/all the page/Photos/RoombaCombo_i8-_Photo_Studio_MopBin_LeftFacing_MediumSilver.jpg",
            name: " irobot roomba kombo i8 שוטף רובוטי",
            price: " 2290 שח",
            detailsPage: './product-details.html',
            p: "תיאור מוצר 7"
        }
    ];

    const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    const productGrid = document.getElementById('productGrid');

    function displayCards(cards) {
        productGrid.innerHTML = ''; // ריקון התוכן הקיים לפני הצגת המוצרים החדשים
        for (let i = 0; i < cards.length; i++) {
            const card = cards[i];
            const cardElement = document.createElement('div');
            cardElement.classList.add('product-item');

            cardElement.innerHTML = `
                <img src="${card.src}" alt="${card.name}">
                <h3>${card.name}</h3>
                <p> ${card.price}</p>
                <button class="add-thinks" onclick="location.href='${card.detailsPage}'">עוד פרטים</button>
                <button class="add-to-cart">הוסף לעגלה</button>
            `;
            productGrid.appendChild(cardElement);

            const detailsButton = cardElement.querySelector('.add-thinks');
            detailsButton.addEventListener('click', function() {
                sessionStorage.setItem('productDetails', JSON.stringify(card));
            });

            const addToCartButton = cardElement.querySelector('.add-to-cart');
            addToCartButton.addEventListener('click', function() {
                addToCart(card);
            });
        }
    }

    function addToCart(card) {
        const existingItem = cart.find(item => item.name === card.name);
        const priceNumber = parseFloat(card.price.replace(/[^0-9.-]+/g,"")); // Convert price to numeric
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...card, quantity: 1, price: priceNumber });
        }
        sessionStorage.setItem('cart', JSON.stringify(cart));
        console.log("מוצר נוסף לעגלה:", card);
        console.log("העגלה הנוכחית:", cart);
    }

    // פונקציה למיון המוצרים
    function sortCards(criteria) {
        let sortedCards;
        if (criteria === 'name') {
            sortedCards = [...cards].sort((a, b) => a.name.localeCompare(b.name));
        } else if (criteria === 'price') {
            sortedCards = [...cards].sort((a, b) => parseFloat(a.price.replace(/[^0-9.-]+/g, "")) - parseFloat(b.price.replace(/[^0-9.-]+/g, "")));
        }
        displayCards(sortedCards);
    }

    // הצגת המוצרים בתחילת הטעינה
    displayCards(cards);

    // האזנה ללחיצות על כפתורי המיון
    document.getElementById('sortByName').addEventListener('click', function() {
        sortCards('name');
    });

    document.getElementById('sortByPrice').addEventListener('click', function() {
        sortCards('price');
    });
});