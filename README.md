# alfred-newrelic [![Build Status](https://travis-ci.org/jasonnutter/alfred-newrelic.svg?branch=master)](https://travis-ci.org/jasonnutter/alfred-newrelic)

> Alfred workflow for opening New Relic apps


## Install

```
$ npm install --global alfred-newrelic
```

*Requires [Node.js](https://nodejs.org) 4+ and the Alfred [Powerpack](https://www.alfredapp.com/powerpack/).*


## Usage

### Set Account ID

Provide the ID of your New Relic account, e.g. `https://rpm.newrelic.com/accounts/######/`

Command:
`nr_id ######`

### Set API Key

Provide the [API key](https://docs.newrelic.com/docs/apis/rest-api-v2/getting-started/api-keys) for your account.

Command: `nr_api <key>`

### Open a New Relic app

Provide the name of the New Relic you want to open.

Command: `nr app_name`

## License

MIT © [Jason Nutter](https://github.com/jasonnutter/alfred-newrelic)
