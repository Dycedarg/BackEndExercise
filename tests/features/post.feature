Feature: Create a Post

As a human
I want to create a Post
So a User following me will see the post
Or a Usering following a Tag in the Post will see it

Scenario: Create a new Post  
	Given I am an authenticated user
	And I have submitted the new post form
	When a User is following me
	Or a User is following a Tag in the Post
	Then the new Post will be shown in the User Feed