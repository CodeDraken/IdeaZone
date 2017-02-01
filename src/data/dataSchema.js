// New Data Schema

// what we need:
// users: username, avatar?, (id)
// ideas: id, title, description, tags, imageUrl, rating, tutorials, examples, created at date, created by

// as a user
// I can edit my own ideas, but not other ideas
// I can delete my ideas
// I can heart other ideas and they'll be saved to my account - "my favourite ideas"
// I can login with social media
// I can add examples & tutorials to any ideas


// functionality
// The heart will show current ratings and increment when any user likes it.(user must be logged in?)
// cannot heart an idea more than once


// Firebase notes:
// doesn't use arrays. arrays are objects {}
// no unamed objects. firebase generates unique ids

// New Data Example from firebase
let newDataExample = {
  
  // ideas are readable by all, only owner can edit details or delete (write access)
  "ideas": {
    // 1 idea with the unique id 32esef324
    "32esef324": {
      // owner only can edit these (except owner, createdAt)
      "title": "Pomodoro",
      "description": "A timer...",
      "owner": "812938039",
      "createdAt": "214324234",
      "tags": {
        "324bregerg":"timer",
        "someuniqueid":"web"
      },
      "imageUrl": "https://raw.githubusercontent.com/CodeDraken/IdeaZone/c9-development/public/img/pomodoro.png",
      // /owner only
      
      // everyone can edit below but not delete (maybe owner can delete?)
      
      "rating": 500,
      
      "tutorials": {
        "uid":{
          "url": "www.mytutorial.com",
          "text": "My Tutorial"
        }
      },
      
      "examples": {
        "oneexampleuid":{
          "title": "FreeCodeCamp Pomodoro",
          "imageUrl": "https://raw.githubusercontent.com/CodeDraken/IdeaZone/c9-development/public/img/pomodoro.png",
          "url": "fcc.com/pomodoro"
        }
      }
      
      // /everyone can edit
      
    } // end idea
    
  }, // /ideas
  
  "users": {
    
    // a user with id 3248GFDH
    "3248GFDH": {
      // ids of favorite ideas (value is the id) -> "randomlygeneratedthing": "generatedIdOfTheIdea"
      // when loaded in our code it will look like favorites ["32esef324", "253452"]
      "favorites": {
        "abcde": "32esef324"
      }
    },
    // a user with id 812938039
    "812938039": {
      "favorites": {
        "afdgfd": "32esef324"
      }
    }
    
  } // /users
};



// OLD DATA this is what our old static JSON data looks like
let oldData = {
  "ideas": [
    {
      "id": 1,
      "title": "Pomodoro Clock",
      "description": "A timer with 25 minute...",
      "tags": ["timer", "web", "pomodoro"],
      "imageUrl": "https://raw.githubusercontent.com/CodeDraken/IdeaZone/c9-development/public/img/pomodoro.png",
      "rating": 500,
      "tutorials": [
        {
          "url": "www.mytutorial.com",
          "text": "My Tutorial"
        }
      ],
      "examples": [
        {
          "title": "FreeCodeCamp Pomodoro",
          "imageUrl": "https://raw.githubusercontent.com/CodeDraken/IdeaZone/c9-development/public/img/pomodoro.png",
          "url": "fcc.com/pomodoro"
        }
      ]
    }
  ]
};