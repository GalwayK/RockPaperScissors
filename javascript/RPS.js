window.onload = () =>
{
    let playerScore = 0;
    let computerScore = 0;

    const rockButton = document.querySelector(".rockButton");
    const paperButton = document.querySelector(".paperButton");
    const scissorsButton = document.querySelector(".scissorButton");
    const resetButton = document.querySelector(".reset");
    const playerScoreOutput = document.querySelector(".playerScore");
    const computerScoreOutput = document.querySelector(".computerScore");
    const winnerOutput = document.querySelector(".winner");
    const buttons = document.querySelector(".playButtons");

    let updateScore = (playerVictory) =>
    {
        if (playerVictory)
        {
            playerScore++;
        }
        else if (playerVictory === false)
        {
            computerScore++;
        }

        console.log(`Your score is ${playerScore}`);
        playerScoreOutput.textContent = `Your score is ${playerScore}`;
        console.log(`The computer's score is ${computerScore}`);
        computerScoreOutput.textContent = `The computer's score is ${computerScore}`;
        
        if (playerScore >= 5 || computerScore >= 5)
        {
            buttons.classList.add("hidden");
            if (playerScore > computerScore)
            {
                console.log(`You have won the game ${playerScore} to ${computerScore}!`);
                winnerOutput.textContent = `You have won the game ${playerScore} to ${computerScore}!`;
            }
            else if (computerScore > playerScore)
            {
                console.log(`The computer has won the game ${playerScore} to ${computerScore}!`);
                winnerOutput.textContent = `The computer has won the game ${playerScore} to ${computerScore}!`;
            }
            else 
            {
                console.log(`The game was a draw ${playerScore} to ${computerScore}!`);
                winnerOutput.textContent = `The game was a draw ${playerScore} to ${computerScore}!`;
            }
        }
    };

    let makeComputerHand = () =>
    {
        let handNumber = Math.floor(Math.random() * 3);
        let computerHand = "rock";
        
        switch (handNumber)
        {
            case 0:
                computerHand = "scissors";
                break;
            case 1: 
                computerHand = "paper";
                break;
        }   
        return computerHand;
    };

    let playRound = (hand) => 
    {
        let playerHand = hand;
        let computerHand = makeComputerHand();
        winnerOutput.textContent = `Your opponent has chosen ${computerHand}. `;
        
        if (playerHand === "scissors")
        {
            if (computerHand === "rock")
            {
                winnerOutput.textContent += "You lose!";
                updateScore(false);
                return;
            }
            else if (computerHand === "paper")
            {
                winnerOutput.textContent += "You win!";
                updateScore(true);
                return;
            }
            else if (computerHand === "scissors")
            {
                winnerOutput.textContent += "Draw!";
                updateScore();
                return;
            }
        }
        else if (playerHand === "paper")
        {
            if (computerHand === "rock")
            {
                winnerOutput.textContent += "You win!";
                updateScore(true);
                return;
            }
            else if (computerHand === "paper")
            {
                winnerOutput.textContent += "Draw!";
                updateScore();
                return;
            }
            else if (computerHand === "scissors")
            {
                winnerOutput.textContent += "You lose!";
                updateScore(false);
                return;
            }
        }
        else if (playerHand === "rock")
        {
            if (computerHand === "rock")
            {
                winnerOutput.textContent += "Draw!";
                updateScore();
                return;
            }
            else if (computerHand === "paper")
            {
                winnerOutput.textContent += "You lose!";
                updateScore(false);
                return;
            }
            else if (computerHand === "scissors");
            {
                winnerOutput.textContent += "You win!";
                updateScore(true);
                return;
            }
        }
    };

    const resetGame = () =>
    {
        playerScore = 0;
        computerScore = 0;
        buttons.classList.remove("hidden");
        playerScoreOutput.innerHTML = "<br>";
        computerScoreOutput.innerHTML = "<br>";
        winnerOutput.innerHTML = "<br>"

    };

    const rockPlay = () =>
    {
        playRound("rock");
    };

    const paperPlay = () =>
    {
        playRound("paper");
    };

    const scissorsPlay = () =>
    {
        playRound("scissors");
    };

    rockButton.addEventListener("click", rockPlay);
    paperButton.addEventListener("click", paperPlay);
    scissorsButton.addEventListener("click", scissorsPlay);
    resetButton.addEventListener("click", resetGame);

}