Template.createPost.onCreated(function createPostOnCreated(){
	this.content = new ReactiveVar();
	this.tags = new ReactiveArray();
})

Template.createPost.onRendered(function createPostOnRendered(){

})

Template.createPost.helpers({

});

Template.createPost.events({
	'change #post-content'(event, context){
		context.content.set(event.currentTarget.value);
	},
	'click #submit-post'(event, context){

		//instantiate the new post
		var newPost = new Post({

			//set the post type
			type: PostType.USER,

			//set content and tag to field values
			content: context.content.get(),
			tags: context.tags.get()
		})

		newPost.post();

		$('#post-content').val('');
	}
});

Template.post.helpers({
	time: function(date){
		return moment(date).format('YYYY-MM-DD hh:mm:ss a');
	}
})