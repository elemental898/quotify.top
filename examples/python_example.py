import requests

# Get a single random quote
response = requests.get('https://api.quotify.top/random')
quote = response.json()
print(f"\"{quote['text']}\" - {quote['author']}")

# Get multiple random quotes
response = requests.get('https://api.quotify.top/random?quantity=3')
quotes = response.json()
for quote in quotes:
    print(f"\"{quote['text']}\" - {quote['author']}")
