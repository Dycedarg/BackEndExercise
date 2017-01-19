Feature: Sort Posts by recency and Post Type aligned with Pattern

As a human
I want to see most recent Posts first 
And Following a given Pattern by Post Type

Scenario: Show Posts in pattern Followed Followed PeerlystA PeerlystB  
	Given I am logged in
	When I look at my Feed
	Then I see Posts sorted by the Time it was Posted
	And the Posts follow the Pattern "Followed Followed PeerlystA PeerlystB" by Post Type 