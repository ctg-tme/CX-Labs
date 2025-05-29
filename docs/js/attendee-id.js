// Function to update the attendee ID display
function updateAttendeeIdDisplay(attendeeId) {
    // Update the main attendee ID display (if it exists)
    const attendeeElement = document.getElementById('attendee-id');
    if (attendeeElement) {
        attendeeElement.textContent = attendeeId;
    }

    // Update all references to the attendee ID in the document
    const idReferences = document.querySelectorAll('.id-reference');
    idReferences.forEach((element) => {
        element.textContent = attendeeId;
    });
}

// Function to check and update the attendee ID on page load or navigation
function checkAndUpdateAttendeeId() {
    // Retrieve the attendee ID from localStorage
    const savedId = localStorage.getItem('attendeeId');

    // If an ID exists in localStorage, update the display
    if (savedId) {
        updateAttendeeIdDisplay(savedId);
    }
}

// Function to generate a new attendee ID
function generateAttendeeId() {
    // Generate a random number between 100 and 999
    const attendeeId = Math.floor(100 + Math.random() * 900);

    // Save the ID to localStorage
    localStorage.setItem('attendeeId', attendeeId);

    // Update the attendee ID display everywhere
    updateAttendeeIdDisplay(attendeeId);
}

// Initial load: Check and update the attendee ID
document.addEventListener('DOMContentLoaded', () => {
    checkAndUpdateAttendeeId();
});

// Handle soft navigation in Material for MkDocs
document.addEventListener('navigation:resolve', () => {
    // Check and update the attendee ID after a soft navigation
    console.log('Soft navigation detected!');
    checkAndUpdateAttendeeId();
});