
// var firstCard = Math.floor(Math.random() * 11) + 2;//
//var secondCard = Math.floor(Math.random() * 11) + 2;//
//var sum = firstCard + secondCard //

// 2. Create the player object. Give it two keys, name and chips, and set their values
let player = {
    name: "Feezy",
    chips: 145
}

// 2. Use getRandomCard() to set the values of firstCard and secondCard

let cards = [] // array - ordered list of items
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

// 2. Store message in a variable called messageEL
let messageEl = document.getElementById("message-el")
// 2. Store the sum paragraph in a variable called sumEl
let sumEl = document.getElementById("sum-el")
//let sumEl = document.querySelector("#sum-el")
// 2. Store the cards paragraph in a variable called cardsEl
let cardsEl = document.getElementById("cards-el")


// 3. Grab ahold of the player-el paragraph and store it in a variable called playerEl
let playerEl = document.getElementById("player-el")
// 4. Render the player's name and chips in playerEl
playerEl.textContent = player.name + ": $" + player.chips

// Make this function return a random number between 1 and 13
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}



// Create a new function called startGame() that calls renderGame()
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    // Generate two random numbes
    // Re-assign the cards and sum variables so that the game can start
    renderGame()
}

function renderGame() {
    // 3. Render the cards on the page using this format -> "Cards: 10 4"
    cardsEl.textContent = "Cards: "

    // Create a for loop that renders out all the cards instead of just two
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    // 3. Render the sum on the page using this format -> "Sum: 14"
    sumEl.textContent = "Sum: " + sum   //So we have the text sum on the web
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You are out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}



function newCard() {
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if (isAlive === true && hasBlackJack === false) {
         // 3. Use the getRandomCard() to set the value of card
        let card = getRandomCard()
        sum += card
        // Push the card to the cards array
        cards.push(card)
        renderGame()
    }
}



    

