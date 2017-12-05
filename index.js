const alfy = require('alfy');

const input = alfy.input;
const apiKey = alfy.config.get('API_KEY');
const accountId = alfy.config.get('ACCOUNT_ID');

alfy.fetch(`https://api.newrelic.com/v2/applications.json?filter[name]=${input}`, {
    headers: {
        'X-Api-Key': apiKey
    },
    json: true
})
    .then(json => {
        const apps = json.applications.map(app => ({
            title: app.name,
            subtitle: `Language: ${app.language} | ID: ${app.id}`,
            arg: `https://rpm.newrelic.com/accounts/${accountId}/applications/${app.id}`
        }));
        alfy.output(apps);
    });

