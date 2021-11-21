function addUser(){
    var name1 = document.getElementById("player1").value
    var name2 = document.getElementById("player2").value
    localStorage.setItem("player1", name1)
    localStorage.setItem("player2", name2)
   

}

question_turn = "player1"
answer_turn = "player2"

function check() {
    get_answer = document.getElementById("answer").value
    if (get_answer == actual_answer) {
        if (answer_turn == "player1") {
            score1 = player1_score + 1;
            document.getElementById("player1_score").innerHTML = score1;
        }
        else {
            score2 = player2_score + 1;
            document.getElementById("player2_score").innerHTML = score2;
        }
    }
    if (questionTurn == "player1") {
        questionTurn = "player2"
        document.getElementById("player_question").innerHTML = "Question Turn" + player2
    }
    else {
        questionTurn = "player1"
        document.getElementById("player_question").innerHTML = "Question Turn" + player1
    }
    if (answerTurn == "player1") {
        answerTurn = "player2"
        document.getElementById("player_answer").innerHTML = "Answer Turn" + player2
    }
    else {
        answerTurn = "player1"
        document.getElementById("player_answer").innerHTML = "Answer Turn" + player1
    }

}
