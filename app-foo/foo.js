import { delay } from './delay.js';

export const provider = () => {
    return delay(1000).then(() => {
        return {
            render({ dom }) {
                dom.innerHTML = 'foo mounted';
            },
            destroy({ dom }) {
                dom.innerHTML = '';
            },
        }
    });
};

if (window.__GARFISH__ && typeof __GARFISH_EXPORTS__ === "object" && __GARFISH_EXPORTS__) {
    __GARFISH_EXPORTS__.provider = provider;
} else {
    const { render } = await provider();
    render({
        dom: document.querySelector('#app'),
    });
}
