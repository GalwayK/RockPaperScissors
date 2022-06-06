window.onload = () =>
{
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

    let getPlayerHand = () =>
    {
        let playerHand = prompt("Rock, Paper, or Scissors?").toLowerCase();
        console.log(`You have chosen ${playerHand}`);

        while (playerHand !== "rock" && playerHand !== "scissors" && playerHand !== "paper")
        {
            console.log("Please enter rock, paper, or scissors.");
            playerHand = prompt("Rock, Paper, or Scissors?").toLowerCase();
            console.log(`You have chosen ${playerHand}`);
        }
        return playerHand;
    };

    let playRound = () => 
    {
        let playerHand = getPlayerHand();
        let computerHand = makeComputerHand();
        console.log(`Your opponent has chosen ${computerHand}`);
        
        if (playerHand === "scissors")
        {
            if (computerHand === "rock")
            {
                console.log("You lose!");
                return false;
            }
            else if (computerHand === "paper")
            {
                console.log("You win!");
                return true;
            }
            else if (computerHand === "scissors")
            {
                console.log("Draw!");
                return;
            }
        }
        else if (playerHand === "paper")
        {
            if (computerHand === "rock")
            {
                console.log("You win!");
                return true;
            }
            else if (computerHand === "paper")
            {
                console.log("Draw!");
                return;
            }
            else if (computerHand === "scissors")
            {
                console.log("You lose!");
                return false;
            }
        }
        else if (playerHand === "rock")
        {
            if (computerHand === "rock")
            {
                console.log("Draw!");
                return;
            }
            else if (computerHand === "paper")
            {
                console.log("You lose!");
                return false;
            }
            else if (computerHand === "scissors");
            {
                console.log("You win!");
                return true;
            }
        }

    };

    let playGame = () =>
    {
        let playerScore = 0;
        let computerScore = 0;

        for (let r = 0; r < 5; r++)
        {
            let playerVictory = playRound();
            if (playerVictory === true)
            {
                playerScore++;
            }
            else if (playerVictory === false)
            {
                computerScore++;
            }
        }

        if (playerScore > computerScore)
        {
            console.log(`You have won the game ${playerScore} to ${computerScore}!`);
        }
        else if (computerScore > playerScore)
        {
            console.log(`The computer has won the game ${playerScore} to ${computerScore}!`);
        }
        else 
        {
            console.log(`The game was a draw ${playerScore} to ${computerScore}!`);
        }
    };

    playGame();
}