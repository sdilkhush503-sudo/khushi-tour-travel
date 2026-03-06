// Show/Hide Sections
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show selected section
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
        window.scrollTo(0, 0);
    }
}

// Show Home section by default
document.addEventListener('DOMContentLoaded', function() {
    showSection('home');
});

// Send booking to WhatsApp
function sendToWhatsApp() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const pickup = document.getElementById('pickup').value;
    const drop = document.getElementById('drop').value;
    const date = document.getElementById('date').value;
    const cartype = document.getElementById('cartype').value;

    // Validate form
    if (!name || !phone || !pickup || !drop || !date || !cartype) {
        alert('Please fill all fields!');
        return;
    }

    // Create WhatsApp message
    const message = `Hello Khushi Tour and Travel! Shankar Lal ji  👋\n\n
📋 *Booking Details:*\n
👤 Name: ${name}\n
📱 Phone: ${phone}\n
🚩 Pickup: ${pickup}\n
🎯 Drop: ${drop}\n
📅 Date: ${date}\n
🚕 Car Type: ${cartype}\n\n
Please confirm my booking. Thank you!`;

    // Replace spaces with %20 and newlines with %0A for URL encoding
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp number (replace with actual owner's number)
   const whatsappNumber = '919785125935'; // Shankar Lal Saini's number
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, '_blank');

    // Reset form
    document.getElementById('bookingForm').reset();
}

// Add Enter key support for form
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('bookingForm');
    if (form) {
        form.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                sendToWhatsApp();
            }
        });
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href').substring(1);
        showSection(sectionId);
    });
});
