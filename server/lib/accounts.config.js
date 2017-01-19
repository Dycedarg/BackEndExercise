Accounts.onCreateUser(function(options, user) {
    user.profile = { following : {users: [user.username], tags: []} };
    return user;
});