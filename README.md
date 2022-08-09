# Rat stomach web visualisation

This repo presents a computational model of biophysical properties of the rat stomach informed by comprehensive analysis of muscle anatomy:

http://rat-stomach.herokuapp.com/

# How to run

- install Node.js from:

  https://nodejs.org/en/

- clone the repo and go to the root folder. Run the following command in the terminal:

```
  node server.js 
```

- go to the following link to check the local web-based visualisation:
  
  localhost:3000
  
  
# Heroku instructions

- create an account and install the Heroku CLI
  
  https://devcenter.heroku.com/articles/heroku-cli
  
- clone this repo and go to the repo path. 
  
- create a new app:
  
```
  heroku create -a rat-stomach-app
```

- check whether remote has been changed to heroku:

```
  git remote -v
```

- deploy your changes:

```
  git push heroku master
```

- open the created link. Something like:

  http://rat-stomach-app.herokuapp.com/

- for further instructions visit:

  https://devcenter.heroku.com/articles/git
