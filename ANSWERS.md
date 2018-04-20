<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.

* Middleware is a function that runs before each request
* Sessions is the cookie that is kept on the server to let the request whether the user is authenticated or not
* bcrypt is an express module that is used to hash password in a one way method.
* JWT is json web token that is used to indicate whether a user is quthorized or not. It's an alternative to using sessions

2.  What does bcrypt do in order to prevent attacks?

* bcrypt hashes a password in a one way method and can only verify whether a guessed password is correct or not

3.  What are the three parts of the JSON Web Token?

* headers
* payload
* signature
