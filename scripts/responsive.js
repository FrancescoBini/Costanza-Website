// Responsive handler for screen size adjustments
function adjustForScreenSize() {
  const referenceWidth = 1512; // MacBook Pro M3 14" width
  const mobileReferenceWidth = 375;
  const mobileMaxWidth = 440;
  const currentWidth = window.innerWidth;
  
  // Mobile scaling (smartphones)
  if (currentWidth <= mobileMaxWidth) {
    // Calculate mobile scaling factor
    const mobileScaleFactor = Math.min(1.2, currentWidth / mobileReferenceWidth);
    
    // Apply mobile scaling factor
    document.documentElement.style.setProperty('--mobile-scale-factor', mobileScaleFactor.toString());
    
    // Scale font sizes proportionally for mobile
    const titleSize = Math.min(2 * mobileScaleFactor, 2.5);
    const textSize = Math.min(1 * mobileScaleFactor, 1.2);
    
    document.documentElement.style.setProperty('--mobile-title-size', `${titleSize}rem`);
    document.documentElement.style.setProperty('--mobile-text-size', `${textSize}rem`);
  } 
  // Desktop scaling for screens larger than MacBook Pro M3 14"
  else if (currentWidth > referenceWidth) {
    // Calculate scaling factor (capped to prevent excessive scaling)
    const scaleFactor = Math.min(1.5, currentWidth / referenceWidth);
    
    // Apply scaling factor
    document.documentElement.style.setProperty('--scale-factor', scaleFactor.toString());
    
    // Calculate and set the container width based on the viewport
    const containerWidth = Math.min(1400 * scaleFactor * 1.2, currentWidth * 0.9);
    document.documentElement.style.setProperty('--base-container-width', `${containerWidth}px`);
  } 
  else {
    // Reset to default values for standard desktop screens
    document.documentElement.style.setProperty('--scale-factor', '1');
    document.documentElement.style.setProperty('--base-container-width', '1400px');
  }
}

// Add resize listener with debouncing
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(adjustForScreenSize, 100);
});

// Handle orientation changes
window.addEventListener('orientationchange', () => {
  setTimeout(adjustForScreenSize, 100);
});

// Run once on load
document.addEventListener('DOMContentLoaded', adjustForScreenSize); 