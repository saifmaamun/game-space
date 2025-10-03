// Add this near the top of your entry file
if (typeof window !== 'undefined') {
    window.addEventListener('error', (event) => {
      console.error('Global error:', {
        message: event.error?.message,
        stack: event.error?.stack,
        source: event.filename,
        line: event.lineno,
        column: event.colno
      });
    });
  }