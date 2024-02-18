document.getElementById('create-event-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const title = document.getElementById('event-title').value;
    const date = document.getElementById('event-date').value;
    const time = document.getElementById('event-time').value;
    const location = document.getElementById('event-location').value;
  
    const eventDetails = { title, date, time, location };
  
    // Store eventDetails in localStorage or send to backend for storage
  
    // For simplicity, we'll just log the eventDetails to the console
    console.log(eventDetails);
  });
  