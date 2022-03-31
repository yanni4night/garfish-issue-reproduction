const Garfish = window.Garfish.default;
const gar = Garfish.run({
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
    ],
    errorMountApp: (error, appInfo) => {
        console.error(error);
        alert(`${appInfo.name} is ESM,\n
loading encounters: ${error.message}.\n
But it SHOULD SUCCESS.`);
    }
});

// Display ESM
fetch("http://localhost:9000/foo.js").then(res => res.text()).then((text) => {
    document.querySelector('#foo-code').innerText = text;
});

