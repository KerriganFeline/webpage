// Function to toggle the toolbar visibility
function toggleToolbar() {
    const toolbarItems = document.querySelector('.toolbar-items');
    toolbarItems.classList.toggle('active');
}

// Function to detect if it's in mobile mode
function isMobile() {
    return window.matchMedia("(max-width: 600px)").matches;
}

// Event listener for the toolbar toggle button
document.querySelector('.toolbar-toggle').addEventListener('click', function() {
    if (isMobile()) {
        // If it's mobile mode, call the mobile-specific function
        toggleToolbar();
    } else {
        // Otherwise, you can add desktop-specific logic if needed
        const toolbarItems = document.querySelector('.toolbar-items');
        toolbarItems.classList.toggle('active');
    }
});
