# Study Intake System

# Background and Features
The study intake system is an open source system for enrolling participants into studies.

-When a new participant's information is submitted via the enrollment form, the participant 
will be randomly assinged to either the program group (who receive the treatment being
studied) or the control group (who do not receive the treatment but can access other
resources in the community).

-The search feature allows users to search for a participant in the enrollment roster
by first or last name. 

-When viewing a participant, you can click the "Check Incarceration Status" to fetch
data from NYC's Open Data system that will show details about whether the client is
currently incarcerated in NYC's city jails. This match occurs via an InmateID. The
information displayed is only the current status and no data from the GET/FETCH to
NYC OpenData is saved permanently to the local database as this data changes in real-time.

For documentation of the NYC OpenData, please see:
https://data.cityofnewyork.us/Public-Safety/Daily-Inmates-In-Custody/7479-ugqb

For the direct link to the JSON data in the API please see:
https://data.cityofnewyork.us/resource/7479-ugqb.json


-The "Enrollment Trends" section allows the user to view graphs of study enrollment
including a monthly bar graph and a cumulative line graph.

Note to users: The dependencies should install compatible versions of chart from React
but if you are using a newer version of React than version 18, you may need to set
your version of React to 18 in order for the 


# To run the application:
- In the project directory, first run `npm isntall` to install dependencies.
- Next, in a separate terminal in the same directory, run `npm run server` to initiate
the JSON database where study participants are saved.
-In the first terminal, then run `npm start` and you should be good to go.

# GitHub Link:
https://github.com/vicambulist/study-intake-system

# Attributions:
-Some of the basic code/styling was repurposed from Flatiron labs

# Future features to be added:
-Login feature
-Additional changes to CSS
-A feature that for the control group, shows local resources for the client
-A feature that for the program group, takes in client goals and connects to 
OpenAI's ChatGPT to provide recommendations of types of services that might
best benefit the client

