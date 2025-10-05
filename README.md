# 🧠 Quotify – Free Quotes API (No API Key Required)

Get inspired, anytime.  
**Quotify** is a free and open quotes API — simple, fast, and with *zero* registration or API key needed.  
Built with ❤️ using **FastAPI** and a **retro-minimal HTML/CSS** design.

---

🔗 **Live API:** [https://www.quotify.top](https://api.quotify.top)  
📘 **Docs:** [https://www.quotify.top/docs](https://www.quotify.top/docs)  
🪶 **Upcoming App:** [https://app.quotify.top](https://app.quotify.top)

---

## ✨ Features

- 🆓 **Forever Free** – No sign-ups, no API key, no limits on creativity.  
- ⚡ **Simple & Fast** – RESTful JSON endpoints.  
- 📚 **Thousands of Quotes** – From philosophers, thinkers, and creators.  
- 📱 **Retro-Minimal UI** – Just HTML & CSS — lightweight and nostalgic.  
- 🔒 **Privacy First** – We don’t track, log, or profile you.  
- 🧩 **Developer-Friendly** – Built for quick integrations, demos, and hack projects.

---

## 🚀 Quick Start

### 🌀 Using curl
```bash
curl https://api.quotify.top/random
````

### 🧠 Using JavaScript

```js
fetch('https://api.quotify.top/random')
  .then(res => res.json())
  .then(data => console.log(data));
```

### 🐍 Using Python

```python
import requests
quote = requests.get("https://api.quotify.top/random").json()
print(quote)
```

---

## 🔍 API Endpoints

| Endpoint     | Description                        |
| ------------ | ---------------------------------- |
| `/random`    | Returns one random quote           |
| `/random?quantity=10` | Returns 10 random quotes           |
| `/search?q=something&limit=10` | Searches for "something"           |
| `/status`    | Operational info (API, DB, uptime) |
| `/docs`      | Interactive FastAPI documentation  |

---

## 🧾 Example Response

```json
{
  "text": "Sometimes you gotta get soaked to know you won't melt",
  "author": "Yurii Ivchenko",
  "source": "...",
  "tags": [
    "life",
    "wisdom",
    "faith"
  ]
}
```

---

## 🧭 About

**Quotify** is a solo indie project by *elemental898*.
The goal is to bring simple inspiration into a noisy world — through a clean, developer-friendly API and a mindful social feed.

> “We’re not here to harvest money, but to inspire people.”

---

## 🌐 Links

* 🌍 **Website:** [https://www.quotify.top](https://www.quotify.top)
* 💬 **Docs:** [https://www.quotify.top/docs](https://www.quotify.top/docs)

---

## 🪴 SEO & Tags

> Free Quotes API • Inspirational Quotes API • JSON Quotes API • FastAPI Project • No API Key Required • Developer Tool • Minimal Web App • Self-Improvement API • Open Source Quotes Database

---

© 2025 Quotify. All Rights Reserved.
Made with ❤️ and ☕ by *elemental898*