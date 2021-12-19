# Movie TS Backend

Simple node application for movies fetching & marking as favourite

# Used Library

1. Express
   > For building server and connecting routes [Express](expressjs)
2. cors
   > For protecting corss origin resource sharing process.
3. mocha
   > For testing of units.

# Useful commands

## To install packages

```bash
npm install
or
yarn install
```

## To run the app locally

```bash
npm run dev
or
yarn dev
```

> Once you run above command, the app will run on port 3000. https://localhost:8000/

# API List

1. list of movies

   > To get all list of movies

   ```
    /api/movies

    method:"GET"
    response:
    {
        "status": "success",
        "movies": [
            {
                "id": 38626,
                "title": "A Midsummer's Hawaiian Dream",
                "image": "https://yts.mx/assets/images/movies/   a_midsummers_hawaiian_dream_2016/medium-cover.jpg",
                "author": "John Wicxkey",
                "isFavourite": false,
                "description": "Attorney Tanya McQueen  has hired a team of anthropologists to find an ancient artifact which, if found, would halt development of Nick Button's shopping mall in the sacred Hemolele Forest on Kaua'i. The team is led by the experienced duo of Helen and Demetri, joined by grad students Zander and Hermione. The team is seen by Omaka, a native Hawaiian kahuna, and his mischievous aide, Puka. Sensing Helen's yearning for passion from Demetri, Puka doses the man with the nectar of a special flower from the forest -- but he has dosed Zander instead, triggering confusion and hilarity. When Puka tries to make amends by dosing Demetri too, and later Tanya as well, the results are surprising and wonderfully zany. Love wins the day. —Roy Tjioe",
            },
            ...,
        ]
    }
   ```

2. mark movie as favourite

   > Update the movie favourite flag

   ```
    /api/movies/:movieId

    method: "PUT"
   ```

# Hosted on Heroku

https://movie-backend-test.herokuapp.com/api/
