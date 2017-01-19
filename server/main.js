import { Meteor } from 'meteor/meteor';

Meteor.methods({
	createPost(post){
		
		if(Meteor.user()){

			//set userId and username to logged in user
			post.userId = Meteor.userId()
			post.username = Meteor.user().username

			//insert post
			return new Post(post).save({cast: true});

		}

		return false

	},
	followUser(username){
		
		if(Meteor.user()){
		
			//check if already following; if so return false
			if(~Meteor.user().profile.following.users.indexOf(username)) return false;
			
			return Meteor.users.update({_id: Meteor.userId()}, {$push: {"profile.following.users": username}});

		}
		
		return false;
	},
	followTag(tag){
		
		if(Meteor.user()){

			//check if already following; if so return false
			if(~Meteor.user().profile.following.tags.indexOf(tag)) return false;

			return Meteor.users.update({_id: Meteor.userId()}, {$push: {"profile.following.tags": tag}});

		}

		return false;
	}
});
