window.Garfish.default.run({
    basename: "/",
    domGetter: "#app",
    apps: [
        {
            name: "foo",
            sandbox: false,
            activeWhen: () => location.hash.startsWith('#/foo'),
            entry: "http://localhost:9000",
        },
    ],
});
