var xhr = require('xhr');
var sections = {
	meetups: {
		data: 'https://api.meetup.com/2/events?offset=0&format=json&limited_events=False&group_urlname=BrisJS&photo-host=secure&page=20&fields=&order=time&desc=false&status=upcoming&sig_id=37054112&sig=50174692b5fdeb925a51457750bc82c38534c788',
		template: fs.readFileSync(__dirname+'../templates/meetups.tpl', 'utf8')
	},
	issues: {
		data: 'https://api.github.com/repos/brisjs/meetups/issues',
		template: fs.readFileSync(__dirname+'../templates/issues.tpl', 'utf8')
	},
};
