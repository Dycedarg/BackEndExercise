Feature: Follow a User

As a human
I want to follow a User
So Posts by that User will show up on my Feed

Scenario: Follow mbauer  
	Given I have selected to follow mbauer
	When I look at my Feed
	Then I see Posts created by mbauer