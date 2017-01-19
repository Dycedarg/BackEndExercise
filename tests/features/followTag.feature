Feature: Follow a Tag

As a human
I want to follow a Tag
So Posts with that Tag will show up on my Feed

Scenario: Follow security  
	Given I have selected to follow security
	When I look at my Feed
	Then I see Posts having the Tag security