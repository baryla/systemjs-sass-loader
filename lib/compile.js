import Sass from 'sass.js';
import getPathFromRelative from './get-path-from-relative';

export default function ({ source, address, metadata }) {
    Sass.options({
        ...generateOptions(metadata.options)
    });

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

function importer (address, request, done) {
    let path = getPathFromRelative(address, request.current);
    let potentialPaths = Sass.getPathVariations(path.pathName)
        .map(name => path.origin + name);
    let actualPath;

    Object.keys(System.meta).forEach(file => {
        if (~potentialPaths.indexOf(file)) {
            actualPath = file;
        }
    });

    if (actualPath) {
        if (actualPath.endsWith('.sass')) {
            /**
             * @todo 
             * 
             * There is an issue with libsass where it fails to load indented
             * files (SASS) if they are imported from another file like SCSS. 
             * 
             * https://github.com/sass/libsass/issues/1695
             */
        } 

        System.import(actualPath);
        done({ path: actualPath });
    } else {
        throw new Error(`The file ${request.current} does not exist`);
    }
}

function getStyleId (style) {
    let styles = {
        nested: 0,
        expanded: 1,
        compact: 2,
        compressed: 3,
    };

    return styles[style];
}

function generateOptions (options = {}) {
    let style = typeof getStyleId(options.style) === 'number' 
        ? getStyleId(options.style) : getStyleId('compressed');

    return {
        style
    };
}