# Unanswered Questions

![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/ZacharyEggert/Unanswered-Questions?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/ZacharyEggert/Unanswered-Questions?style=flat&logo=appveyor)

## Description

A website for the philosophically enthusiastic that serves the entry level by aggregating information on the notable persons of the field and making it as easily accessible as possible.

---

## Project Overview

This project was about coalescing all of what we have learned so far in the bootcamp. We were tasked with updating our website to follow MVC format and Node.js. We also implemented Handlebars.js, Express, Sequelize, and MySQL to add to the user experience. Additionally, we implemented Socket.io to create a live chat, bcrypt and hashing for login/logout, and created and seeded REST APIs for Questions, Quotes, and Philosophers with an ability for a user to provide suggestions. Users when logged in also have the ability to leave a comment on Question of the Day. The site can be accessed [here](http://unanswered-questions.herokuapp.com/), hosted on Heroku.

---

[![screenshot of homepage](./public/img/screenshots/homepage.png)](http://unanswered-questions.herokuapp.com/)

---

We elected to update our website, ([version one repo found here](https://github.com/ZacharyEggert/Collaborative-guitar/tree/master/Project-1)), based around philosophy, and the commonly known individuals therein. We used APIs and a database to make this happen:

- [Wikimedia's API](https://www.mediawiki.org/wiki/API:Main_page) <!-- (with an atrocious documentation) -->
- [Google's API](https://developers.google.com/youtube/v3)
- Philosopher REST API
- Quote REST API
- Question of the Day REST API

We also used 2 CSS frameworks to build the final product:

- [Tailwind CSS](https://tailwindcss.com/)
- [Owl Carousel 2](https://owlcarousel2.github.io/OwlCarousel2/)

Using these tools we were able to make multiple interactive elements, a click-through-able quote carousel seeded by the Quote API, a knowledge testing quiz (using local storage and the Quote API), and curated list of philosophers from the Philosopher API (complete with individual profiles), a Question of the Day page with questions pulled from the QOTD API. 

---
[View additional screenshots](https://github.com/ZacharyEggert/Unanswered-Questions/tree/master/public/img/screenshots/)
![screenshot of live chat](./public/img/screenshots/live-chat.PNG)
![screenshot of poll page](./public/img/screenshots/poll-page.png)

---

Images pulled from [WallpaperBetter](https://www.wallpaperbetter.com/)

[Link to deployed site](http://unanswered-questions.herokuapp.com/)

### License

![badge](https://img.shields.io/badge/license-MIT-brightgreen)
MIT License

### Contributing

- [Zachary Eggert](https://github.com/ZacharyEggert)
- [Trey Love](https://github.com/TreyLove)
- [Ricardo Badillo](https://github.com/Ricardo-Badillo)
- [Alicia Breyer](https://github.com/breyera)
