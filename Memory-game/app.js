document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name : 'fries',
            img : 'images/fries.png'
        },
        {
            name : 'cheeseburger',
            img : 'images/cheeseburger.png'
        },
        {
            name : 'hotdog',
            img : 'images/hotdog.png'
        },
        {
            name : 'ice-cream',
            img : 'images/ice-cream.png'
        },
        {
            name : 'milkshake',
            img : 'images/milkshake.png'
        },
        {
            name : 'pizza',
            img : 'images/pizza.png'
        },
        {
            name : 'fries',
            img : 'images/fries.png'
        },
        {
            name : 'cheeseburger',
            img : 'images/cheeseburger.png'
        },
        {
            name : 'hotdog',
            img : 'images/hotdog.png'
        },
        {
            name : 'ice-cream',
            img : 'images/ice-cream.png'
        },
        {
            name : 'milkshake',
            img : 'images/milkshake.png'
        },
        {
            name : 'pizza',
            img : 'images/pizza.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const gridDisplay = document.querySelector('#grid') //search in index.html for the id 'grid'
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardChoosenIds = []
    const cardWon = []

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            gridDisplay.appendChild(card)
        }
    }



    function checkMatch() {
        const cards = document.querySelectorAll('img')
        console.log('check for match')
        if(cardsChosenIds[0] === cardsChosenIds[1]) {
            cards[cardChoosenIds[0].setAttribute('src', 'images/blank.png')]
            cards[cardChoosenIds[1].setAttribute('src', 'images/blank.png')]
            alert('you found a match!')
        }
        if(cardsChosen[0] === cardsChosen[1]) {
            cards[cardChoosenIds[0].setAttribute('src', 'images/white.png')]
            cards[cardChoosenIds[1].setAttribute('src', 'images/white.png')]
            cards[cardChoosenIds[0].removeEventListener('click', flipCard)]
            cards[cardChoosenIds[1].removeEventListener('click', flipCard)]
            cardWon.push(cardsChosen)
        } else {
            cards[cardChoosenIds[0].setAttribute('src', 'images/blank.png')]
            cards[cardChoosenIds[1].setAttribute('src', 'images/blank.png')]
            alert('Sorry! Try again!')
        }

        resultDisplay.textContent = cardWon.length

        cardsChosen = []
        cardChoosenIds = []

        if(cardWon.length === (cardsChosen.length/2)) {
            resultDisplay.textContent = 'Congratulation! You found them all!'
        }
    }

    function flipCard() {
        const cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardChoosenIds.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)

        if (cardsChosen.length === 2) {
            setTimeout(checkMatch, 500)
        }
    }

    createBoard()
})