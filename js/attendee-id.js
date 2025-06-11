// Function to update the attendee ID display
function updateAttendeeIdDisplay(attendeeId) {
    // Update all elements with the ID "attendee-id" (if there are multiple)
    const attendeeElements = document.querySelectorAll('#attendee-id');
    attendeeElements.forEach((element) => {
        element.textContent = attendeeId;
    });

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
        attendeeId = Math.floor(1000 + Math.random() * 9000);
    } while (usedIds.has(attendeeId));

    // Add the generated ID to the set
    usedIds.add(attendeeId);

    // If more than 300 IDs are generated, reset the set to allow repeats
    if (usedIds.size > 2000) {
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


function createInitialSetup() {
        // Retrieve the attendeeId from localStorage
    const attendeeId = localStorage.getItem('attendeeId');

    // Check if attendeeId exists
    if (!attendeeId) {
        alert("Error: Attendee ID is missing. Please generate it first.");
        console.error("Error: Attendee ID is missing.");
        return;
    }
    // Define the webhook URL
    const webhookUrl = "https://hooks.us.webexconnect.io/events/BUUTVA1U9R";

    // Define the payload
    const payload = {
        attendee_id: attendeeId // Add your attendee_id here if needed
    };

    // Make the POST request using fetch
    fetch(webhookUrl, {
        method: "POST", // HTTP method
        headers: {
            "Content-Type": "application/json" // Specify JSON content type
        },
        body: JSON.stringify(payload) // Convert payload to JSON string
    })
    .then(response => {
        const messageElement = document.getElementById('setup-message');
        if (response.ok) {
            // If the request was successful
            console.log("Webhook triggered successfully");
            messageElement.style.color = 'green'; // Set message color to green for success
            messageElement.textContent = "Setup successfully created!";
        } else {
            // If the request failed
            console.error("Error triggering webhook:", response.statusText);
            alert("Error triggering webhook: " + response.statusText);
            messageElement.style.color = 'red'; // Set message color to red for errors
            messageElement.textContent = "Error: " + response.statusText;
        }
    })
    .catch(error => {
        // Handle any network or unexpected errors
        console.error("Request failed:", error);
        alert("Request failed: " + error.message);
    });
}