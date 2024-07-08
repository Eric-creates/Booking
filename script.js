document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const origin = document.getElementById('origin').value;
    const destination = document.getElementById('destination').value;
    const departureDate = document.getElementById('departure-date').value;
    const returnDate = document.getElementById('return-date').value;
    const passengers = document.getElementById('passengers').value;

    // Function to generate random price
    function getRandomPrice() {
        return `$${(Math.random() * (400) + 100).toFixed(2)}`;
    }

    // Function to generate random time
    function getRandomTime() {
        const hour = Math.floor(Math.random() * 12) + 1;
        const minute = Math.floor(Math.random() * 60);
        const period = Math.random() > 0.5 ? "AM" : "PM";
        return `${hour}:${minute < 10 ? '0' + minute : minute} ${period}`;
    }

    // Function to generate random date within a month
    function getRandomDate() {
        const today = new Date();
        const randomDays = Math.floor(Math.random() * 30) + 1;
        const randomDate = new Date(today);
        randomDate.setDate(today.getDate() + randomDays);
        return randomDate.toLocaleDateString();
    }

    // Function to generate random flight duration
    function getRandomDuration() {
        const hours = Math.floor(Math.random() * 5) + 1; // Between 1 to 5 hours
        const minutes = Math.floor(Math.random() * 60);
        return `${hours}h ${minutes}m`;
    }

    // Simulated flight search results
    const flights = [
        {
            airline: "Emirates Air",
            flightNumber: "EA123",
            departureTime: getRandomTime(),
            arrivalTime: getRandomTime(),
            duration: getRandomDuration(),
            price: getRandomPrice(),
            date: getRandomDate()
        },
        {
            airline: "Dana Airlines",
            flightNumber: "DA456",
            departureTime: getRandomTime(),
            arrivalTime: getRandomTime(),
            duration: getRandomDuration(),
            price: getRandomPrice(),
            date: getRandomDate()
        },
        {
            airline: "Qatar Airways",
            flightNumber: "QA789",
            departureTime: getRandomTime(),
            arrivalTime: getRandomTime(),
            duration: getRandomDuration(),
            price: getRandomPrice(),
            date: getRandomDate()
        },
        {
            airline: "Turkish Airlines",
            flightNumber: "TA101",
            departureTime: getRandomTime(),
            arrivalTime: getRandomTime(),
            duration: getRandomDuration(),
            price: getRandomPrice(),
            date: getRandomDate()
        }
    ];

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '<h2>Flight Search Results</h2>';

    flights.forEach(flight => {
        resultsDiv.innerHTML += `
            <div class="flight">
                <p><strong>Airline:</strong> ${flight.airline}</p>
                <p><strong>Flight Number:</strong> ${flight.flightNumber}</p>
                <p><strong>Departure Time:</strong> ${flight.departureTime}</p>
                <p><strong>Arrival Time:</strong> ${flight.arrivalTime}</p>
                <p><strong>Duration:</strong> ${flight.duration}</p>
                <p><strong>Price:</strong> ${flight.price}</p>
                <p><strong>Date:</strong> ${flight.date}</p>
            </div>
        `;
    });
});
