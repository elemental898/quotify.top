// Get a single random quote
fetch('https://api.quotify.top/random')
  .then(response => response.json())
  .then(quote => {
    console.log(`"${quote.text}" - ${quote.author}`);
  })
  .catch(error => console.error('Error:', error));

// Get multiple random quotes
fetch('https://api.quotify.top/random?quantity=3')
  .then(response => response.json())
  .then(quotes => {
    quotes.forEach(quote => {
      console.log(`"${quote.text}" - ${quote.author}`);
    });
  })
  .catch(error => console.error('Error:', error));
