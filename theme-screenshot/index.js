const captureWebsite = require('capture-website');

const baseUrl = 'http://localhost:8123';

const options = {
    width: 1920,
    height: 1080,
    overwrite: true,
    delay: 3,
};

const items = [
    ['/lovelace/default_view', 'overview'],
    ['/map', 'map'],
    ['/logbook', 'logbook'],
    ['/history', 'history'],
    ['/developer-tools/info', 'developer-tools'],
    ['/config/dashboard', 'configuration'],
    ['/profile', 'profile'],
];

(async () => {
    await Promise.all(items.map(([url, filename]) => {
        return captureWebsite.file(baseUrl + url, `screenshots/theme-${filename}.png`, options);
    }));
})();
