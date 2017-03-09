#Contact-List-Api

In this assignment I demonstrated an ability to create Models and Migrations,  an understanding of Routes and Controllers, and an ability to document API endpoints.



Creating a contacts

1.CREATING A USER: In order to create a contact you must must make a POST request with the following parameters:

name:
phonenumber:
city:
state:
photo_url:
email:

You will then receive and array with your entered parameters along with an id for that user.

2.LISTING A USER: If you wish to get every user entered then make a GET request and every user will be displayed.

3.FINDING A USER: To find an individual user, you must enter the id of that user as a parameter in a GET request, their information will then be displayed.

4.UPDATING A USER: To update a user you must first enter the id of the user you wish to change and then in a PUT request. change one of the parameters entered for that user. Run a GET request for the user's id to test that the user was successfully updated.

5. DELETING A USER: To delete a user, make DELETE request with the user's id as one of the following parameters.
