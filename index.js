// Define the breakpoint values
const breakpoints = {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  };
  
  // Function to toggle classes based on viewport size
  function toggleClasses() {
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    
    if (viewportWidth < breakpoints.sm) {
      // Mobile
      document.documentElement.classList.add('mobile');
      document.documentElement.classList.remove('tablet', 'desktop');
    } else if (viewportWidth < breakpoints.md) {
      // Tablet
      document.documentElement.classList.add('tablet');
      document.documentElement.classList.remove('mobile', 'desktop');
    } else if (viewportWidth < breakpoints.lg) {
      // Desktop
      document.documentElement.classList.add('desktop');
      document.documentElement.classList.remove('mobile', 'tablet', 'large-desktop');
    } else {
      // Large desktop
      document.documentElement.classList.add('large-desktop');
      document.documentElement.classList.remove('mobile', 'tablet', 'desktop');
    }
  }
  
  // Call the function on page load and window resize
  window.addEventListener('load', toggleClasses);
  window.addEventListener('resize', toggleClasses);
  const debounce = (func, delay) => {
    let timerId;
  
    return (...args) => {
      if (timerId) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        func(...args);
        timerId = null;
      }, delay);
    };
  };
  
  const adjustHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };
  
  // Run the adjustHeight function initially
  adjustHeight();
  
  // Debounce the adjustHeight function on window resize
  window.addEventListener('resize', debounce(adjustHeight, 100));
  