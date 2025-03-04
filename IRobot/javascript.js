// // כרטיסיות של מוצרים
// document.addEventListener('DOMContentLoaded', function() {
//     // מערך שמכיל את פרטי המוצרים
//     const cards = [
//         // פרטי כל מוצר במערך
//         {
//             src: "../IRobotפרוייקט  Java Script/Downloaded images/all the page/Photos/Roomba_Combo_Essential_White_Photo_Studio_AngledRight_ChargingDock_Phone_Overlay_FilledWaterBin_4000x4000.jpg",
//             name: " irobot roomba kombo essential שואב שוטף רובוטי",
//             price: "1290 שח",
//             detailsPage: './product-details.html',
//             p: "תיאור מוצר 1"
//         },
//         {
//             src: "../IRobotפרוייקט  Java Script/Downloaded images/store/combined/- iRobot_files/RoombaCombo_j7_j7_Graphite_Photo_Studio_Base_LeftFacing_PadLifting_Phone_Overlay_4000x4000.png",
//             name: "irobot roomba kombo j7 שוטף רובוטי", 
//             price: " 2290 שח",
//             detailsPage: './product-details.html',
//             p: "תיאור מוצר 2"
//         },
//         {
//             src: "./Downloaded images/all the page/Photos/Roomba_j9-_RubyBronze_Photo_Studio_CleanBase_LeftFacing_Robot_Icons_Poop_iRobotOS_Overlay_4000x4000.jpg",
//             name: " irobot roomba j9+שואב שוטף רובוטי",
//             price: " 3990 שח",
//             detailsPage: './product-details.html',
//             p: "תיאור מוצר 3"
//         },
//         {
//             src: "./Downloaded images/all the page/Photos/RoombaCombo_j7_j7_Graphite_Photo_Studio_Base_LeftFacing_PadLifting_Phone_Overlay_4000x4000.png",
//             name: " irobot roomba kombo j7+ שוטף רובוטי",
//             price: "3900 שח",
//             detailsPage: './product-details.html',
//             p: "תיאור מוצר 4"
//         },
//         {
//             src: "./Downloaded images/store/combined/- iRobot_files/RoombaCombo_j9-_CleanBase_Photo_InSitu_AutoFill_Overlay_Refill30Days_1500x1500.jpg",
//             name: " irobot roomba kombo j9+ שוטף רובוטי",
//             price: " 5600 שח ",
//             detailsPage: './product-details.html',
//             p: "תיאור מוצר 5"
//         },
//         {
//             src: "./Downloaded images/store/combined/- iRobot_files/RoombaCombo_j9-_Web_PDP_Carousel_Vacuum-Wars_4000x4000.jpg.jpg",
//             name: " irobot roomba kombo i5+ שוטף רובוטי",
//             price: "2700 שח",
//             detailsPage: './product-details.html',
//             p: "תיאור מוצר 6"
//         },
//         {
//             src: "./Downloaded images/all the page/Photos/RoombaCombo_i8-_Photo_Studio_MopBin_LeftFacing_MediumSilver.jpg",
//             name: " irobot roomba kombo i8 שוטף רובוטי",
//             price: " 2290 שח",
//             detailsPage: './product-details.html',
//             p: "תיאור מוצר 7"
//         }
//     ];

//     // שליפת עגלת הקניות מה-sessionStorage או יצירת עגלה ריקה אם אין נתונים שמורים
//     const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
//     const productGrid = document.getElementById('productGrid');

//     // פונקציה להוספת מוצרים לעגלת הקניות
//     function addToCart(card) {
//         // בדיקה אם המוצר כבר קיים בעגלה
//         const existingItem = cart.find(item => item.name === card.name);
//         // המרת המחיר למספר
//         const priceNumber = parseFloat(card.price.replace(/[^0-9.-]+/g, ""));
//         if (existingItem) {
//             existingItem.quantity += 1;
//         } else {
//             cart.push({ ...card, quantity: 1, price: priceNumber });
//         }
//         sessionStorage.setItem('cart', JSON.stringify(cart));
//         console.log("מוצר נוסף לעגלה:", card);
//         console.log("העגלה הנוכחית:", cart);
//     }

//     // יצירת אלמנטים של כרטיסי מוצרים והוספתם לעמוד
//     for (let i = 0; i < cards.length; i++) {
//         const card = cards[i];
//         const cardElement = document.createElement('div');
//         cardElement.classList.add('product-item');

//         cardElement.innerHTML = `
//             <img src="${card.src}" alt="${card.name}">
//             <h3>${card.name}</h3>
//             <p> ${card.price}</p>
//             <button class="add-thinks" onclick="location.href='${card.detailsPage}'">עוד פרטים</button>
//             <button class="add-to-cart">הוסף לעגלה</button>
//         `;
//         productGrid.appendChild(cardElement);

//         // האזנה לאירוע לחיצה על כפתור "עוד פרטים" ושמירת פרטי המוצר ב-sessionStorage
//         const detailsButton = cardElement.querySelector('.add-thinks');
//         detailsButton.addEventListener('click', function() {
//             sessionStorage.setItem('productDetails', JSON.stringify(card));
//         });

//         // האזנה לאירוע לחיצה על כפתור "הוסף לעגלה" והוספת המוצר לעגלה
//         const addToCartButton = cardElement.querySelector('.add-to-cart');
//         addToCartButton.addEventListener('click', function() {
//             addToCart(card);
//         });
//     }
// });

// פונקציה למיון המוצרים
function sortCards(criteria) {
    let sortedCards;
    if (criteria === 'name') {
        // מיון לפי שם
        sortedCards = cards.sort((a, b) => a.name.localeCompare(b.name));
    } else if (criteria === 'price') {
        // מיון לפי מחיר
        sortedCards = cards.sort((a, b) => a.price - b.price);
    }
    // הצגת המוצרים המסודרים
    displayCards(sortedCards);
}

// האזנה לאירוע DOMContentLoaded כדי להבטיח שכל ה-DOM נטען לפני שהקוד רץ
document.addEventListener('DOMContentLoaded', function() {
    // השגת הטופס והרכיב של הודעת ההצלחה
    const registerForm = document.getElementById('registerForm');
    const successMessage = document.getElementById('successMessage');

    // האזנה לאירוע שליחת הטופס
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // קבלת הנתונים מהטופס
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const phone = document.getElementById('phone').value;

        // שמירת הנתונים ב-sessionStorage
        sessionStorage.setItem('name', name);
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('password', password);
        sessionStorage.setItem('phone', phone);

        // הצגת הודעת הצלחה
        successMessage.style.display = 'block';
        alert(name + " נרשמת בהצלחה!");
    });
});

// האזנה לאירוע DOMContentLoaded כדי להבטיח שכל ה-DOM נטען לפני שהקוד רץ
document.addEventListener('DOMContentLoaded', function() {
    // התחברות
    const loginForm = document.getElementById('loginForm');
    const loginSuccessMessage = document.getElementById('loginSuccessMessage');

    if (loginForm) {
        // האזנה לאירוע שליחת הטופס
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // קבלת נתוני התחברות מהטופס
            const name = document.getElementById('loginName').value;
            const password = document.getElementById('loginPassword').value;

            // קבלת הנתונים השמורים ב-sessionStorage
            let my_name = sessionStorage.getItem('name');
            let my_pas = sessionStorage.getItem('password');
            
            // בדיקת נתוני ההתחברות
            if (my_name == name && my_pas == password) {
                // שמירת הנתונים ב-sessionStorage
                sessionStorage.setItem('name', name);
                sessionStorage.setItem('password', password);

                // הצגת הודעת התחברות מוצלחת
                loginSuccessMessage.style.display = 'block';
                loginSuccessMessage.textContent = "התחברת בהצלחה!";
            } else {
                alert("אחד מהנתונים שגוי הכנס שוב");
            }
        });
    }
});

// הצגת שם המשתמש והסיסמה אם הם קיימים ב-sessionStorage
const name_s = sessionStorage.getItem('name');
const password_s = sessionStorage.getItem('password');
if (name_s && password_s) {
    const id_name = document.getElementById('use_name');
    if (id_name) {
        id_name.innerHTML = name_s + " " + password_s;
    }
}

// הצגת שם המשתמש והסיסמה אם הם קיימים ב-sessionStorage
let nameId = document.getElementById('use_name');
let passwordId = document.getElementById('passwordId');
let nameget = sessionStorage.getItem('name');
let passwordget = sessionStorage.getItem('password');
nameId.innerHTML = nameget;
passwordId.innerHTML = passwordget;
