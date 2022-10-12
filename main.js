import { delay } from './app-foo/delay.js';

const Garfish = window.Garfish;
Garfish.run({
    basename: "/",
    domGetter: "#app",
    apps: [
        {
            name: "foo",
            sandbox: {
                open: false,
            },
            activeWhen: () => location.hash.startsWith('#/foo'),
            entry: "http://localhost:9000",
        },
        {
            name: "bar",
            sandbox: {
                open: false,
            },
            activeWhen: () => location.hash.startsWith('#/bar'),
            entry: "http://localhost:7309",
        },
    ],
    errorMountApp(error, appInfo) {
        console.error(appInfo.name, error);
    },
});

document.querySelector('#reload').addEventListener('click', () => {
    location.replace('/');
});

document.querySelector('#exp').addEventListener('click', async () => {
    location.hash = '#/foo';
    await delay(20);
    location.hash = '#/bar';
    location.hash = '#/foo';
});

