function scrollBooking(){
    document.getElementById("booking").scrollIntoView({
        behavior:"smooth"
    });
}

let pricePerKm = 12;

// Fare Calculator Configuration
const fareConfig = {
    sedan: {
        ratePerKm: 12,
        minFare: 500,
        tollTax: 200,  // Fixed toll tax
        boardTax: 0.20  // 20% extra for night (10 PM - 6 AM)
    },
    ertiga: {
        ratePerKm: 15,
        minFare: 700,
        tollTax: 250,
        boardTax: 0.20
    },
    crysta: {
        ratePerKm: 18,
        minFare: 900,
        tollTax: 300,
        boardTax: 0.20
    }
};

// Calculate Fare Function
function calculateFare() {
    let car = document.getElementById("cartype").value;
    let distance = document.getElementById("distance").value;
    let travelDate = document.getElementById("date").value;
    
    // Get current time for board tax
    let currentTime = new Date();
    let hour = currentTime.getHours();
    let isNightTime = (hour >= 22 || hour < 6); // 10 PM to 6 AM
    
    // Validate inputs
    if (!distance || isNaN(distance) || distance <= 0) {
        alert("Please enter valid distance in km");
        return;
    }
    
    let config = fareConfig[car];
    let baseFare = distance * config.ratePerKm;
    let tollTax = config.tollTax;
    let boardTax = isNightTime ? baseFare * config.boardTax : 0;
    let totalFare = baseFare + tollTax + boardTax;
    
    // Apply minimum fare
    if (totalFare < config.minFare) {
        totalFare = config.minFare;
    }
    
    // Display fare breakdown
    let fareBreakdown = `
        <div class="fare-breakdown">
            <p>🚗 Car Type: ${car.toUpperCase()}</p>
            <p>📏 Distance: ${distance} km</p>
            <p>💰 Base Fare: ₹${Math.round(baseFare)}</p>
            <p>🛣️ Toll Tax: ₹${tollTax}</p>
            <p>🌙 Board Tax: ${isNightTime ? '₹' + Math.round(boardTax) + ' (Night Charges)' : '₹0'}</p>
            <hr>
            <p><strong>🎯 Total Fare: ₹${Math.round(totalFare)}</strong></p>
        </div>
    `;
    
    document.getElementById("fare").innerHTML = fareBreakdown;
    document.getElementById("fare").style.display = "block";
}

// Send WhatsApp Function
function sendWhatsApp() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let pickup = document.getElementById("pickup").value;
    let drop = document.getElementById("drop").value;
    let date = document.getElementById("date").value;
    let car = document.getElementById("cartype").value;
    let distance = document.getElementById("distance").value;
    
    // Validate all fields
    if (!name || !phone || !pickup || !drop || !date || !distance) {
        alert("Please fill all details");
        return;
    }
    
    // Calculate fare for WhatsApp message
    let config = fareConfig[car];
    let baseFare = distance * config.ratePerKm;
    let tollTax = config.tollTax;
    let boardTax = 0;
    let totalFare = baseFare + tollTax + boardTax;
    
    let msg = `🚖 *Taxi Booking Request*%0A%0A` +
              `👤 *Name:* ${name}%0A` +
              `📞 *Phone:* ${phone}%0A` +
              `📍 *Pickup:* ${pickup}%0A` +
              `🏁 *Drop:* ${drop}%0A` +
              `📅 *Date:* ${date}%0A` +
              `🚗 *Car Type:* ${car.toUpperCase()}%0A` +
              `📏 *Distance:* ${distance} km%0A` +
              `💰 *Base Fare:* ₹${Math.round(baseFare)}%0A` +
              `🛣️ *Toll Tax:* ₹${tollTax}%0A` +
              `🌙 *Board Tax:* ₹${boardTax}%0A` +
              `🎯 *Total Fare:* ₹${Math.round(totalFare)}%0A%0A` +
              `*Please confirm booking!*`;
    
    let url = `https://wa.me/919785125935?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
}

// Set Route Function (for navigation from other pages)
function setRoute(pickup, drop) {
    sessionStorage.setItem('pickup', pickup);
    sessionStorage.setItem('drop', drop);
    window.location.href = 'booking.html';
}

// Auto-fill pickup/drop from session storage
document.addEventListener('DOMContentLoaded', function() {
    let savedPickup = sessionStorage.getItem('pickup');
    let savedDrop = sessionStorage.getItem('drop');
    
    if (savedPickup) {
        document.getElementById('pickup').value = savedPickup;
    }
    if (savedDrop) {
        document.getElementById('drop').value = savedDrop;
    }
});

// Contact Form Function
function sendContactMessage() {
    let name = document.getElementById('contactName').value;
    let phone = document.getElementById('contactPhone').value;
    let message = document.getElementById('contactMessage').value;
    
    if (!name || !phone || !message) {
        alert("Please fill all contact details");
        return;
    }
    
    let msg = `📧 *Contact Message*%0A%0A` +
              `👤 *Name:* ${name}%0A` +
              `📞 *Phone:* ${phone}%0A` +
              `💬 *Message:* ${message}`;
    
    let url = `https://wa.me/919785125935?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
}
function sendWhatsApp(){
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let pickup = document.getElementById("pickup").value;
    let drop = document.getElementById("drop").value;
    let date = document.getElementById("date").value;
    let car = document.getElementById("cartype").value;

    if (!name || !phone || !pickup || !drop || !date) {
        alert("Please fill all details");
        return;
    }

    let msg = `Taxi Booking%0A%0AName: ${name}%0APhone: ${phone}%0APickup: ${pickup}%0ADrop: ${drop}%0ADate: ${date}%0ACar: ${car}`;

    let url = `https://wa.me/919785125935?text=${encodeURIComponent(msg)}`;

    window.open(url, "_blank");
}
