**Deployment**

Heroku: https://bounce-insights-countrydata.herokuapp.com/?fbclid=IwAR2cQMmRY4hwOi4U4aPn6LRMaB506QpnAzjOXxHFs0U6_3umVa_dsUqdFs0

Github: https://github.com/RobinOShiaa/bounceInsights-Country-data


**Challenge**

The following assignment was to create a web app. This ui was to facilitate a means for a user to retrieve country data to be specified by the user and displayed accordingly. This data was to be extracted from a given API source.

Technologies used

* Nodejs
* Javascript
* React
* Express
* Tailwind
* Jest 
* Cypress

**Installation**

The application can be installed within the root directory performing the following commands in terminal, 



1. `npm install` to install relevant dependencies for the server 
2. `npm run build` npm run build will install the client side react app and also build the client application to production. 
3. `npm start` starts the server and serves up relevant routing

**Main files**


    App.js


    This is the main script associated with rendering the application 


    Alert.js


    Is a snippet of xml representing a popup notification. This notification receives a boolean 


    Which corresponds to the success or failure of an individual request from our server 


    If true the popup will be green and prompt success otherwise failure and red background


    Country.js


    Responsible for presenting the information regarding the country 


    Such as the flag, individual stat boxes (gridStat) of an official field and value


    Ie (Language : english). And a iframe of the location of thee capital on google maps 


    GridStat.js


    This component is rendered multiple times within a css grid of country data fields and values


    CountryList.js


    This is the sidebar component. Containing all countries names  and the search bar


    Searchbar.js


    Is within the sidebar and uses an event handler on user input to filter the countries listed in countryList 


    .env


    .env files are used to store environment variables that are needed for deployment but not pushed to our git repository for security purposes


    These variables can be port numbers for server and client or API_KEY for google maps API


    So we can get the iframe from country capital

**Testing**

Jest was used for unit testing and cypress for end to end testing.
`npm run test` to run all unit test cases
`npm run cypress` to run all end to end testing 

**Server** 

For the server I used winston node js dependency so I could utilise logging of requests being made, I also used postman as a third party application to test sourcing data from the server and from the api.

**Application Process**

1. Once the user goes to the website url, immediately a fetch request is sent to the server for all country data. 
2. The server then fires a fetch request to the API for all country data. 
3. The data is then retrieved alongside a status check to say that the request was successful or not  and sent back to the user. 
4. The country names are then displayed on the sidebar of the web app and a popup displays notifying everything worked accordingly. 
5. The user can input a country, filtering the results by name and clicking a country name or scrolling and clicking a country name. In either instance another fetch request is sent to the server with the country name as a req parameter. 
6. The server parses this country name and sends it as a req parameter to the API to retrieve all individual country statistics.
7. The data alongside the same check value is sent back to the client. Displaying the same popup and This data is passed as props to our components and rendering them to display the flag, Information about the country like , language, population , capital , name, officialName etc and an iframe of the of the location of the capital on google maps 


**Conclusion**

Although a server was what was needed for this assignment. The entire application could of been done without one as the API could have communicated directly with the client side of the application. For the sake of the challenge it seemed unecessary but understandably, I can understand that this challenge was moreso a demonstration of my knowledge and where it may be applicable to the actual role.

In addition, I worked with Tailwind framework instead of raw css. This preference was mainly because I am currently learning Tailwind and I felt this assignment was a great oppurtunity to excerice this. Had it been mandatory i would of had no problem using the initial approach
