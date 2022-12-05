const startingMinutes = 1;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');

setInterval(updateCountdown, 1000);

function updateCountdown(next_soal) {
    const minutes = Math.floor(time / 60);
    let seconds =  time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;

    if (time == 0) {
        location.href = 'next_soal'
        document.getElementById('next-soal')
        window.location.href = 'next_soal'
        next_soal = document.getElementById('next-soal')
    }
}
 
setScore()

function jawab(correct_answer, next_soal) {
    let answer = document.getElementsByClassName('input-soal')[0].value
    
    document.getElementsByClassName('wrong-answer-notice')[0].style.display = 'none'

    if (correct_answer == answer.toLowerCase()) {
       
        window.location.href = next_soal
    } else {
        setTimeout(function() {
            document.getElementsByClassName('wrong-answer-notice')[0].style.display = 'block'
            document.getElementsByClassName('wrong-answer-notice')[0].innerHTML = 'CUPU GITU DOANG GABISA'
        }, 0);
    }
}

