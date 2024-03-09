// Function to show the selected tab and hide others
function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        if (tab.id === tabId) {
            tab.style.display = 'block';
        } else {
            tab.style.display = 'none';
        }
    });
}

// Initially show the home tab
showTab('home');

// Define functions as provided earlier

// Function to scroll to a specific section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Function to handle API errors
function handleApiError(error) {
    console.error('Error:', error);
    // Display an error message to the user
}

// Update event listeners for buttons
document.getElementById('workoutsButton').addEventListener('click', () => {
    exploreWorkouts().catch(handleApiError);
});

document.getElementById('mealsButton').addEventListener('click', () => {
    provideNutritionalGuidance().catch(handleApiError);
});

document.getElementById('newsButton').addEventListener('click', () => {
    displayNewsArticles().catch(handleApiError);
});

// Call the community interaction function
communityInteraction();
