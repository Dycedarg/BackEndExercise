Template.following.helpers({
	users(){
		if(Meteor.user())
			return Meteor.user().profile.following.users;
	},
	tags(){
		if(Meteor.user())
			return Meteor.user().profile.following.tags;
	}
});