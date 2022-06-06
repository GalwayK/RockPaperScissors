console.log("Working.\n");
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

    let playGame = () => 
    {
        let playerHand = getPlayerHand();
        let computerHand = makeComputerHand();
        console.log(`Your opponent has chosen ${computerHand}`);
        
        if (playerHand === "scissors")
        {
            if (computerHand === "rock")
            {
                console.log("You lose!");
            }
            else if (computerHand === "paper")
            {
                console.log("You win!");
            }
            else if (computerHand === "scissors")
            {
                console.log("Draw!");
            }
        }
        else if (playerHand === "paper")
        {
            if (computerHand === "rock")
            {
                console.log("You win!");
            }
            else if (computerHand === "paper")
            {
                console.log("Draw!");
            }
            else if (computerHand === "scissors")
            {
                console.log("You lose!");
            }
        }
        else if (playerHand === "rock")
        {
            if (computerHand === "rock")
            {
                console.log("Draw!");
            }
            else if (computerHand === "paper")
            {
                console.log("You lose!");
            }
            else if (computerHand === "scissors");
            {
                console.log("You win!");
            }
        }

    };

    playGame();
}