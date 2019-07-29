import Sass from 'sass.js';
import getPathFromRelative from './get-path-from-relative.js';

export default function ({ source, address }) {    
    Sass.importer((request, done) => 
        importer(address, request, done)
    );

    return new Promise((resolve, reject) => {
        Sass.compile(source, result => {
            return (result.formatted) 
                ? reject(result.formatted)
                : resolve(result.text);
        });
    });
}

async function importer (address, request, done) {
    let path = getPathFromRelative(address, request.current);

    System.import(path);
    done({ path });
}