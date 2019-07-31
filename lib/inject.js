import Compile from './compile';

export default function (load) {
    return Compile(load).then(compiled => {
        injectStyleInHead(compiled, load.address);
        return compiled;
    });
}

function injectStyleInHead (style, url) {
    const oldStyleTag = document.querySelector(`style[data-url="${url}"]`);
    if (oldStyleTag) {
        oldStyleTag.remove();
    }

    const newStyleTag = document.createElement('style');
    newStyleTag.type = 'text/css';
    newStyleTag.setAttribute('data-url', url);
    newStyleTag.appendChild(document.createTextNode(style));

    document.head.appendChild(newStyleTag);
}