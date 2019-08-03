import inject from './lib/inject';

const translate = (load) => {
    inject(load).then(res =>
        'def' + 'ine(function() {\nreturn "' + res.trim().replace('\n', '') + '";\n});'        
    );

    return ''; // supress SJS errors about "unexpected token".
};

export { translate };