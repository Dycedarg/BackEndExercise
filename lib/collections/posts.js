import { Class } from 'meteor/jagi:astronomy';
import { Enum } from 'meteor/jagi:astronomy';

//Posts Collection
Posts = new Meteor.Collection('posts');

//Enum for post type
PostType = Enum.create({
	name: 'PostType',
	identifiers: ['USER','PEERLYSTA','PEERLYSTB']
})

//Post Model
Post = Class.create({
	name: 'Post',
	collection: Posts,
	fields: {
		content: String,
		userId: String,
		username: String,
		title: {
			type: String,
			optional: true
		},
		type: {
			type: PostType,
			default: ()=>{
				return PostType.USER
			}
		},
		tags: {
			type: [String],
			default: ()=>{
				return []
			}
		}
	},
	behaviors: {
		timestamp: {
			hasCreatedField: true,
			createdFieldName: 'createdAt',
			hasUpdatedField: true,
			updatedFieldName: 'updatedAt'
		}
	},
	meteorMethods: {
		post(){
			this.userId = Meteor.userId();
			this.username = Meteor.user().username;
			this.save({cast: true});
		}
	}
});

