document.addEventListener('DOMContentLoaded', () =>
{
    const gameCards = document.querySelectorAll('.game-card')
    
    gameCards.forEach((gameCard) =>
        {
            let row = gameCard.getAttribute("class").substr(0,4)
            previewCard = document.querySelector('.' + row + ' > .preview-card')
            previewCardImage = document.querySelector('.' + row + ' > .preview-card img')
            let lastBoxHovered

            gameCard.addEventListener('mouseenter', () =>
            {
                previewCard.setAttribute("class", gameCard.id + " card border-primary mb-3 preview-card")
                
                previewCardImage.setAttribute("src", "../resources/" + gameCard.id + "-preview.PNG")
            })

            gameCard.addEventListener('click', () =>
            {
                if (gameCard.id === 'tic-tac-toe')
                {
                    location.assign("../ticTacToePage/tic-tac-toe.html")
                }
            })

            previewCard.addEventListener('click', () =>
            {
                const previewClasses = previewCard.getAttribute("class").split(" ")
                location.assign("../ticTacToePage/" + previewClasses[0] + ".html")
            })

        })
})