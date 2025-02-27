const textElement = document.getElementById('text');
        const words = ["Desenvolvedor","Front-end","Back-end","Freelancer"];
        let wordIndex = 0;
        let letterIndex = 0;
        let isDeleting = false;

        const typingSpeed = 200;
        const erasingSpeed = 100;
        const delayBetweenWords = 1300;

        function type() {
            const currentWord = words[wordIndex]; //palavra
            const currentText = currentWord.substring(0, letterIndex); //letra
            
            textElement.textContent = currentText; //escrevendo letra no html

            if (!isDeleting && letterIndex < currentWord.length) {
                letterIndex++;
                setTimeout(type, typingSpeed);
            } else if (isDeleting && letterIndex > 0) {
                letterIndex--;
                setTimeout(type, erasingSpeed);
            } else {
                isDeleting = !isDeleting;
                if (!isDeleting) {
                    wordIndex = (wordIndex + 1) % words.length;
                    //wordIndex = wordIndex < words.length ? wordIndex++ : 0
                }
                setTimeout(type, delayBetweenWords);
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(type, typingSpeed);
        });