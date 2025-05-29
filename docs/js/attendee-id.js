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

// Set to track previously generated IDs
const usedIds = new Set();

// Function to generate a new unique attendee ID
function generateAttendeeId() {
    // Generate a unique ID
    let attendeeId;

    // Keep generating until we find a unique ID
    do {
        attendeeId = Math.floor(100 + Math.random() * 900);
    } while (usedIds.has(attendeeId));

    // Add the generated ID to the set
    usedIds.add(attendeeId);

    // If more than 300 IDs are generated, reset the set to allow repeats
    if (usedIds.size > 300) {
        usedIds.clear(); // Clear the set to allow duplicates after 50 IDs
    }

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