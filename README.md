# Angular Test - Angular

## How to submit your code assignment

1. Fork the project from GitHub.
2. Make your forked project to **private** 
3. Add member of **ibmq2c** in **Manage Access**,  from Current Setting tab -> Manager access -> Invite a Collaborator -> lookup for **ibmq2c** -> add  **ibmq2c** to this repository.
4. Complete your code and documentation in the forked project.
5. Create a new plain text file in the root folder of the forked project. And make the file name in the format of "your full name", e.g. **Mark Leon**.
6. Notify the code assignment is done or you can contact your **Interviewer/Talent Liaison Officer** to notify the same (we would be regularly checking the repo for any checkins).

## Code assignment details

1. UseAngular, with all basic libraries required to achieve the result inpackage.json file.
2. Create new components displaying messages of your choice and output them beneath one another.
3. Create Application header and footer
4. Style the components using SCSS.
5. Show simple CRUD example 
6. The example should contain lazy loading routing.
7. Use angular reactive forms for CRUD operations(ADD and Update) 

## Steps and commands to run the application

1. Run `ng serve` to start the application
2. Run `npm run startserver` to start the server
3. Navigate to (http://localhost:4200) to view the application
4. (http://localhost:8080) is the link for the server
4. Click on `View Messages` to view all messages
5. Click on `Add Message` to add a message to the list
6. Click on `Update` button in `View Messages` to update a specific message

## API testing commands

1. For viewing all messages `curl http://localhost:8080/api/messages`
  Payload:
  [{"id":0,"date":"5/10/2020","message":"bbbbasdasdasdasd","oldName":"aaaa","newName":"aaaaaasdasdasd"},{"id":1,"name":"bbbb","date":"5/10/2020","message":"cccc"},{"id":2,"date":"5/10/2020","message":"bobby loves food 2 2 2","oldName":"bobby","newName":"bobby mew"},{"id":3,"name":"asdasd","date":"5/10/2020","message":"asdasdasd"}]

2. For adding a new message `curl http://localhost:8080/api/add-message`

3. For updating a message `curl http://localhost:8080/api/update-message`
