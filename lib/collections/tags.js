import { Class } from 'meteor/jagi:astronomy';

Tags = new Meteor.Collection('tags');

Tag = Class.create({
	name: 'Tag',
	collection: Tags,
	fields: {
		label: String
	}
})