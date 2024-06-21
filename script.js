const displaySeconds = document.getElementById('displaySeconds');
        const displayMinutes = document.getElementById('displayMinutes');
        const displayHours = document.getElementById('displayHours');

        function updateTime() {
            const now = new Date();
            const seconds = now.getSeconds().toString().padStart(2, '0'); // Add leading zero
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const hours = now.getHours().toString().padStart(2, '0');
            displaySeconds.textContent = seconds;
            displayMinutes.textContent = minutes;
            displayHours.textContent = hours;
        }

        setInterval(updateTime, 1000); // Update every second