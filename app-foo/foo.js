const provider = () => {
    return {
        render({ dom }) {
            dom.innerHTML = '<div class="foo box align">This text should be <strong>red</strong> and <strong>uppercase</strong> with green border.</div>'
        },
        destroy() { },
    }
};

if (window.__GARFISH__ && typeof __GARFISH_EXPORTS__ === "object" && __GARFISH_EXPORTS__) {
    __GARFISH_EXPORTS__.provider = provider;
} else {
    provider().render({
        dom: document.querySelector('#app'),
    });
}
