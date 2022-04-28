# <center> "Let us Eat out" restaurant sharing website </center>

##### <p align="right">Documentation for developers and customers</p>

This is a restaurants sharing website. It allows users to share their experience and comments on a restaurant, with pictures and the costs per person. Users are also allowed to view others' posts, make comment or edit their comments later.

#### Deployed Website

- Heroku : https://calm-brook-44089.herokuapp.com/LetUsEatOut 

#### Demo Video

- [Google Drive](https://drive.google.com/file/d/1o1NCNLgkWpG5eFQsEZHVFJhoQNRQb9Yn/view?usp=sharing)

## Developer Guidance
### 1. Locate at the root path

- Open the terminal and run the command below

```bash
$ cd LetUsEatOut
```

### 2. Setup Cloud MongoDB 

- Atlas Cloud MongoDB
  - Create database at [https://cloud.mongodb.com](https://cloud.mongodb.com)
  - Create your own cluster and copy the connection URL
  - Set ```MONGODB_URL=mongodb+srv://your-db-connection``` in ```app.js```

### 3. Run the App

- run the command below in the terminal

```bash
$ npm install
$ node app.js
```

- Run this on chrome: http://localhost:3000

### 4. Tech Stack

- **Back end**
  - Node Express.js
  - Database: Atlas Cloud MongoDB
- **Front end**
  - JavaScript
  - HTML/CSS
  - BootStrap

### 5. Deploy  the website on Heroku

- Install and setup Heroku, find instructions here [Heroku Developer Center](https://devcenter.heroku.com/articles/heroku-cli)

- Locate at the root of the project file and run the command below

  ```bash
  $ git add .
  $ git commit -m "commit message"
  $ git push heroku master
  ```

- Wait until an URL showing on the terminal, open it in the Chrome, the view should comes out
- **This project has already been deployed on Heroku: [LetUsEatOut](https://calm-brook-44089.herokuapp.com/LetUsEatOut )**

## Customer Guidance

### 1. Start Page

- Run http://localhost:3000
- Press "Explore" button to the home page

### 2. Home Page

- Run http://localhost:3000/LetUsEatOut

### 3. Sign up

- Run http://localhost:3000/register, or click the "Sign up" button of the menu bar on the top right corner
- Enter username and password and click sign up
- After successfully signing up for the website, it will automatically redirect to the homepage at http://localhost:3000/LetUsEatOut 

### 4. Login

- Run http://localhost:3000/login, or click the "Log in" button of the menu bar on the top right corner
- Enter username and password and click log in
- If the user hasn't signed up, it will automatically redirect to the Sign up at http://localhost:3000/register
- If the authentication fails, it will redirect to the http://localhost:3000/login page with form cleared
- After successfully logging in for the website, it will automatically redirect to the homepage at http://localhost:3000/LetUsEatOut

### 5. Log out

- This feature will only be enabled when a user is logged in
- Click the "Log out" button of the menu bar on the top right corner, it will automatically redirect to the homepage at http://localhost:3000/LetUsEatOut

### 6. Post

- This feature will only be enabled when a user is logged in
- Run http://localhost:3000/LetUsEatOut
- Click "Add A New Restaurant" button, it will automatically redirect to the http://localhost:3000/LetUsEatOut/new page
- Complete the form, including "name", "price", "img url", "description", click "Submit" button
- Once submitting the post, it will automatically redirect to the homepage at http://localhost:3000/LetUsEatOut and your post will be available on the homepage
- You can edit or delete your post on the detail page of the post, only if you are the author of the post

### 7. Comment

- This feature will only be enabled when a user is logged in
- Click the "More Info" button on the restaurant card on homepage, it will automatically redirect to the detail page
- Scroll down the page and click "Add Comment" button
- Complete the form and submit the comment, it will automatically redirect to detail page
- You can edit or delete your comment on the detail page of the post, only if you are the author of the comment