const alfy = require('alfy');

const input = alfy.input;
const apiKey = alfy.config.get('API_KEY');
const accountId = alfy.config.get('ACCOUNT_ID');

if (apiKey && accountId) {
	Promise.all([
		alfy.fetch(`https://api.newrelic.com/v2/applications.json?filter[name]=${input}`, {
			headers: {
				'X-Api-Key': apiKey
			},
			json: true
		}),
		alfy.fetch(`https://api.newrelic.com/v2/browser_applications.json?filter[name]=${input}`, {
			headers: {
				'X-Api-Key': apiKey
			},
			json: true
		})
	])
        .then(([ apm, browser ]) => {
            const apmApps = apm.applications.map(app => ({
                title: `${app.name} (APM)`,
                subtitle: `ID: ${app.id} | Language: ${app.language}`,
                arg: `https://rpm.newrelic.com/accounts/${accountId}/applications/${app.id}`
			}));

            const browserApps = browser.browser_applications.map(app => ({
                title: `${app.name} (Browser)`,
                subtitle: `ID: ${app.id}`,
                arg: `https://rpm.newrelic.com/accounts/${accountId}/browser/${app.id}`
			}));

            alfy.output([
				...apmApps,
				...browserApps
			]);
        });
} else {
    const errors = [];

    if (!apiKey) {
        errors.push({
            title: 'API key required',
            subtitle: 'You must run nr_api to set your API key'
        });
    }

    if (!accountId) {
        errors.push({
            title: 'Account ID required',
            subtitle: 'You must run nr_id to set your account ID'
        });
    }

    alfy.output(errors);
}

