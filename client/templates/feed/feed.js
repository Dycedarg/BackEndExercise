Template.feed.onCreated(function feedOnCreated(){
	this.postLimit = new ReactiveVar(10);
	Meteor.autorun(()=>{
		Meteor.subscribe('FeedPosts', this.postLimit.get());
	})
})

Template.feed.onRendered(function feedOnRendered(){
	onInfiniteScroll(()=>{
		this.postLimit.set(this.postLimit.get() + 10);
	})
})

Template.feed.helpers({
	posts(){
		return FeedPosts.find().fetch();
	}
});

Template.feed.events({

});