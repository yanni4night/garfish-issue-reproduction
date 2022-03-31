import { render } from './render.js';

export const provider = () => {
    return {
        render,
        destroy() { },
    }
};

// if (window.__GARFISH__ && typeof __GARFISH_EXPORTS__ === "object" && __GARFISH_EXPORTS__) {
//     __GARFISH_EXPORTS__.provider = provider;
// } else {
//     provider().render({
//         dom: document.querySelector('#app'),
//     });
// }
