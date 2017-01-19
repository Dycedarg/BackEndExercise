Meteor.publish('FeedPosts', function(limit) {
	this.autorun(()=>{
		//all matching post objects will be stored in posts
		const posts = [];

		//pattern posts should follow
		const pattern = [PostType.USER, PostType.USER, PostType.PEERLYSTA, PostType.PEERLYSTB];

		//get following object from user profile if it exists
		const following = 
			( Meteor.users.findOne( this.userId, {fields: {"profile.following": 1}} ) || {} )
				.profile.following;

		console.log(Meteor.users.findOne( this.userId, {fields: {"profile.following": 1}} ))
		
		//get posts that match with user.profile.following object
		if(following){
			posts[PostType.USER] = Post.find({
				type: PostType.USER,
				$or: [{
						username: {
							$in: following.users
						}
					},{
						tags: {
							$elemMatch: {
								$in: following.tags
							}
						}
					}]
			}, {
				//sort by recency
				sort: {
					createdAt: -1
				},
				limit
			}).fetch();
		}

		console.log('following:', following)
		console.log('posts[0].length:', posts[0].length);

		//get peerlyst posts
		posts[PostType.PEERLYSTA] = Post.find({
			type: PostType.PEERLYSTA
		},{
			sort: {
				createdAt: -1
			},
			limit
		}).fetch();

		posts[PostType.PEERLYSTB] = Post.find({
			type: PostType.PEERLYSTB
		},{
			sort: {
				createdAt: -1
			},
			limit
		}).fetch();

		let postCount = 0;

		//assemble feed
		const addPost = type => {
			if((posts[type] || []).length && postCount < limit){
				let post = posts[type].shift();
				this.added('FeedPosts', Random.id(), post);
				postCount++;
			}
		}

		//add set of posts in required pattern
		const addPostSet = () => {
			_.each(pattern, (e) => {
				addPost(e)
			});
		}

		//add posts to publication until limit has been reached or no posts are left
		while(postCount < limit){
			addPostSet();
			if(posts.every(e => {return !e.length})) break;
		}

		// console.log('this._documents', this._documents);
		this.ready()
	});
});