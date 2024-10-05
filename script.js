let intervalId;

function startBlinking() {
    const intervalInput = document.getElementById("intervalInput").value;
    const blinkingCard = document.getElementById("blinkingCard");

 
    clearInterval(intervalId);

    if (intervalInput && intervalInput > 0) {
        blinkingCard.style.display = 'block';

        intervalId = setInterval(() => {
           
            const randomX = Math.random() * (window.innerWidth - 200);  
            const randomY = Math.random() * (window.innerHeight - 100); 

            blinkingCard.style.left = randomX + 'px';
            blinkingCard.style.top = randomY + 'px';

         
            blinkingCard.classList.add('blink');

          
            setTimeout(() => {
                blinkingCard.classList.remove('blink');
            }, 1000); 
        }, intervalInput * 1000);  
    } else {
        alert("Please enter a valid interval.");
    }
}
