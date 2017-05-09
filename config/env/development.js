module.exports = {
	db: 'mongodb://localhost/mean-book',
	sessionSecret: 'developmentSessionSecret',
	facebook: {
		clientID: '697455130456376',
		clientSecret: '4813340f22bc3514c7d4f1a07f5283e4',
		callbackURL: 'http://localhost:3000/oauth/facebook/callback'
	},
	google: {
		clientID: '1026911753571-akvn86hv0t43gcu5d84s0bp2e6kcaq7t.apps.googleusercontent.com',
		clientSecret: 'FO3oSpQVB7eRcJRmvBvR8wR5',
		callbackURL: 'http://wolfamong.com:3000/oauth/google/callback'
	}
};