# Rat stomach web visualisation

This repo presents a computational model of biophysical properties of the rat stomach informed by comprehensive analysis of muscle anatomy:

http://rat-stomach.herokuapp.com/

# How to run

- install NodeJS from:

  https://nodejs.org/en/

- clone the repo and go to the root folder. Run the following command in terminal:
  node server.js 
  
- go to the following link to check the local web-based visualisation:
  
  localhost:3000
  
  
# Heroku instructions

- create an account and install the Heroku CLI
  
  https://devcenter.heroku.com/articles/heroku-cli
  
- in the terminal type:
  
   heroku login
   
- clone the repository

  heroku git:clone -a Rat_Stomach_Sim 
  
  cd rat-stomach

- deploy your changes

  git add .
  
  git commit -am "update something"
  
  git push heroku master
  
