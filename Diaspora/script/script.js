        // Устанавливаем дату, до которой идет отсчет
        const targetDate = new Date("May 3, 2025 00:00:00").getTime();

        // Обновляем таймер каждую секунду
        const timer = setInterval(function() {
            // Текущая дата и время
            const now = new Date().getTime();

            // Разница между целевой датой и текущим временем
            const timeLeft = targetDate - now;

            // Расчет дней, часов, минут и секунд
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

            // Выводим результат в элемент с id="countdown"
            document.getElementById("countdown").innerHTML =
                `${days} days ${hours} hours ${minutes} minutes <br> left before the start`; 

            // Если время истекло
            if (timeLeft < 0) {
                clearInterval(timer);
                document.getElementById("countdown").innerHTML = "Время истекло!";
            }
            if (timeLeft < 0) {
                clearInterval(timer);
                document.getElementById("countdown").innerHTML = "Время истекло!";
            }
            }, 1000); // Обновление каждую секунду