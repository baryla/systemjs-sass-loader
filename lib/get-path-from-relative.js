export default function (importedFrom, currentPath) {
    const basePath = getFullImportedPathParts(importedFrom);
    const baseArrs = basePath.pathName.split('/').splice(1);    
    baseArrs.pop();

    if (currentPath.startsWith('/')) {
        throw new Error('Relative paths cannot start with a "/" (forward slash).');
    }

    if (currentPath.startsWith('./')) {
        return {
            origin: basePath.origin,
            pathName: `/${baseArrs.join('/')}/${currentPath.substring(2)}`
        }
    }

    if (currentPath.startsWith('../')) {
        const currArrs = currentPath.split('/');
        const backDots = currArrs.filter(path => path === '..');
        const currWithoutDots = currArrs.filter(path => path !== '..');
        
        if (backDots.length > baseArrs.length) {
            throw new Error('You tried to import a file outside of root folder.');
        }
        
        baseArrs.splice(baseArrs.length - backDots.length);

        return {
            origin: basePath.origin,
            pathName: `/${baseArrs.join('/')}/${currWithoutDots.join('/')}`
        }
    }

    throw new Error('Library imports are not yet supported.');
}

function getFullImportedPathParts (url) {
    const link = document.createElement('a');
    link.href = url;

    return {
        origin: `${link.protocol}//${link.host}`,
        pathName: link.pathname
    };
}