// Utility to prevent horizontal scrolling
export const preventHorizontalScroll = () => {
  // Prevent horizontal scroll on window
  const preventScroll = (e: WheelEvent) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.preventDefault();
      window.scrollTo(window.scrollX, window.scrollY + e.deltaY);
    }
  };

  // Prevent horizontal scroll on touch devices
  const preventTouchScroll = (e: TouchEvent) => {
    const touch = e.touches[0];
    const scrollableParent = (e.target as HTMLElement).closest('[style*="overflow-x"]');
    
    // Only prevent if not in a scrollable container (like Process page progress bar)
    if (!scrollableParent || !scrollableParent.getAttribute('style')?.includes('overflow-x: auto')) {
      if (Math.abs(touch.clientX - (window.lastTouchX || touch.clientX)) > 50) {
        e.preventDefault();
      }
    }
    (window as any).lastTouchX = touch.clientX;
  };

  // Monitor and fix overflow without clipping visible content
  const checkAndFixOverflow = () => {
    // Force body and html to not scroll horizontally
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';
    
    // Check for elements that extend way beyond viewport (likely causing scroll)
    // But don't clip elements that are just slightly over (might be padding/margin issues)
    const viewportWidth = window.innerWidth;
    const overflowThreshold = 50; // Only fix if element extends 50px+ beyond viewport
    
    const allElements = document.querySelectorAll('*');
    allElements.forEach((el) => {
      const htmlEl = el as HTMLElement;
      
      // Skip elements that shouldn't be constrained
      if (
        htmlEl.tagName === 'NAV' || 
        htmlEl.tagName === 'HEADER' ||
        htmlEl.closest('nav') ||
        htmlEl.closest('[role="navigation"]') ||
        htmlEl.style.position === 'absolute' ||
        htmlEl.style.position === 'fixed' ||
        htmlEl.style.position === 'sticky'
      ) {
        return;
      }
      
      const rect = htmlEl.getBoundingClientRect();
      
      // Only constrain if element significantly extends beyond viewport
      if (rect.right > viewportWidth + overflowThreshold && 
          htmlEl.style.position !== 'absolute' && 
          htmlEl.style.position !== 'fixed') {
        // Don't apply maxWidth to containers, just ensure they have proper overflow
        if (!htmlEl.closest('.overflow-x-auto') && !htmlEl.closest('[style*="overflow-x"]')) {
          htmlEl.style.maxWidth = `${viewportWidth}px`;
        }
      }
    });
  };

  // Initial check
  checkAndFixOverflow();

  // Listen to events
  window.addEventListener('wheel', preventScroll, { passive: false });
  window.addEventListener('touchmove', preventTouchScroll, { passive: false });
  window.addEventListener('resize', checkAndFixOverflow);
  
  // Periodic check to catch dynamically added content
  const interval = setInterval(checkAndFixOverflow, 1000);

  // Cleanup function (return for component cleanup if needed)
  return () => {
    window.removeEventListener('wheel', preventScroll);
    window.removeEventListener('touchmove', preventTouchScroll);
    window.removeEventListener('resize', checkAndFixOverflow);
    clearInterval(interval);
  };
};

