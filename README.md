# Social Network API

## Description
This is a social networking API that allows user's to create an account, share their thoughts, and react to other peoples thoughts. You can even add and delete different friends!<br> It uses `express.js`, `MangoDB`, `Mongoose`, and `Moment`. It all comes together to make this wonderful and easy to use backend.<br>
To see a full video with examples on how to start and use this api please click on this link:<br>
https://drive.google.com/file/d/1vH4JPtvO0tPviL0nfhGYXrt8TypELZiq/view <br>
(Note: If you click on the link and it says "Video is still processing. Try again later.", then either download it or give it a bit to finish rendering )

## Installation
To install this to a local device, first will want to clone this repo on your computer. After it is cloned, go to the `package.json` file, right-click on it and open up `integrated terminal`. Once in here type <strong>"npm i"</strong>. Once all the packages are installed, you are ready to go! Now in the terminal type in <strong>"npm start"</strong>. This will start the server. Once the server has been started you can use `Insomnia` or a similar application to try it out!

## Routes/Testing
To develop this application I used `Insomnia` to test the different routes to see if they were working properly. Below I will list the different routes that there are:<br>
<br>
USERS📂<br>
    - <strong>CREATE</strong> User: `POST /api/users`<br>
    - <strong>GET ALL</strong> User's: `GET /api/users`<br>
    - <strong>GET User by ID</strong>: `GET /api/users/:userID`<br>
    - <strong>UPDATE</strong> User by ID: `PUT /api/users/:userID`<br>
    - <strong>DELETE</strong> User: `DELETE /api/users/:userID`<br>
    <br>
THOUGHTS📂<br>
    - <strong>CREATE</strong> Thought: `POST /api/thoughts/`<br>
    - <strong>GET ALL</strong> Thoughts: `GET /api/thoughts/`<br>
    - <strong>GET Thought by ID</strong>: `GET /api/thoughts/:thoughtID`<br>
    - <strong>UPDATE</strong> Thought: `PUT /api/thoughts/:thoughtID`<br>
    - <strong>DELETE</strong> Thought: `PUT /api/thoughts/:thoughtID`<br>
    <br>
REACTIONS📂<br>
    - <strong>CREATE</strong> Reaction: `POST /api/thoughts/:thoughtID/reactions`<br>
    - <strong>DELETE </strong>Reaction: `DELETE /api/thoughts/:thoughtID/reactions/reactionID`<br>
    <br>
FRIENDS📂<br>
    - <strong>ADD</strong> Friend: `POST /api/users/:userID/friends/:friendID`<br>
    - <strong>DELETE</strong> Friend: `DELETE /api/users/:userID/friends/:friendID`<br>
<br>
This is how I set up my insomnia:<br>
![Insomnia setup](assets/images/Screenshot%20(35).png)



