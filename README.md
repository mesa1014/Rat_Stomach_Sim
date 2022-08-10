# Web visualisation of rat stomach 

This repo presents a computational model of biophysical properties of the rat stomach informed by comprehensive analysis of muscle anatomy:

http://rat-stomach.herokuapp.com/

# How to run

#### Prerequisites

You need to convert the models to json inside cmgui 3.0 **Windows** (older versions cannot export to threejs/json) using the following command (change the values if necessary):

```
gfx export threejs scene stomach file_prefix sw_rat_stomach start_time 0 end_time 5 number_of_time_steps 6 morph_colours
```
For more detailed help, type the following inside cmgui 3.0:

```
gfx export threejs ?
```

After this step, create a folder called data in the public folder and copy all json files there. It is noted that you need a something_view.json viewport file as well, which can be something similar to:

```
{"farPlane": 20.6666, "nearPlane": 0.47015, "eyePosition": [9.31368, 3.54196, -5.29922], "targetPosition": [0.0203556, -0.004181401, -2.495108], "upVector": [-0.406796, 0.720159, -0.536407]}
```

If you are interested in a particular view, rotate, translate, zoom, etc. inside cmgui and then type the following to get numbers for that particular view, then change the values in the something_view.json file accordingly.

```
gfx list win 1
```

do not forget to update the file names in demo.js, demo_thickness.js lines 3,4,40 (any line with scene.loadViewURL and scene.loadMetadataURL) and in demo_sw.js lines 40,41,42,43.

#### Steps

- install Node.js from:

  https://nodejs.org/en/

  usually, it comes with npm, otherwise, install npm as well.
  
- clone the repo and go to the root folder. Run the following command in the terminal:

  ```
  npm install express
  ```

  ```
  npm install compression
  ```
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
  sometimes you need to log in. If necessary, it asks you to type:
  
  ```
  heroku login
  ```
  
- check whether the remote has been changed to Heroku:

```
  git remote -v
```

- deploy your changes:

```
  git add .
  git commit -am "initial commit"
  git push heroku master
```

- open the created link. Something like:

  http://rat-stomach-app.herokuapp.com/

- for further instructions, visit:

  https://devcenter.heroku.com/articles/git
