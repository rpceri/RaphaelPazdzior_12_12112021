# Sportsee

Sportsee is an application for monitoring your physical activity. 
this project was made in [React](https://reactjs.org/) whith vsCode and [Recharts](https://recharts.org/).
Project was initialised whith Create React App
Datas provided by an api: https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard, can be mocked (see below)


## Links

- [Figma](https://www.figma.com/file/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR?node-id=0%3A1)
- [GitHub repository](https://github.com/rpceri/RaphaelPazdzior_12_12112021)
- [Online documentation](https://rpceri.github.io/RaphaelPazdzior_12_12112021/) (done whith jsdoc)


## Technologies
- JS
- SCSS 
- React


## Authors

Raphael Pazdzior


## Licensing

This project was built under the Creative Commons licence.


## prerequisite | dependencies

This project uses [Yarn](https://yarnpkg.com/) as package manager.
It requires :
- node-sass : 5.0.0
- react: ^17.0.2,
- react-dom: "^17.0.
- react-router-dom: "^6.0.2
- react-scripts: "4.0.3
- recharts: "^2.1.6",
- recharts and jsdoc (to build the html doc)

## Installation

1 - Install Yarn on your system

2 - Download this project and open the folder

3 - Install the dependencies with `yarn install`

4- you can change source of datas : 
* api or a js file (moked datas) : you can chosose it by change the value of the booléan "mokedDatas" in Services/GetUserDatas.js 
* if  you want to use api's datas, you can change the url in "apisUrl" in  the same file

5 - Start with `yarn start`

6 - To build a production version : `yarn build` (to do)
