System.config({
    defaultExtension: 'js',
    transpiler: 'plugin-babel',
    meta: {
        '*': {
            globals: {
                process: 'process.js',
            }
        },
        '*.scss': {
            'loader': 'sass-loader',
            'options': {
                // Libsass options
            }
        },
        '/src/js/index.js': {},
        '/src/scss/_test.scss': {},
        '/src/scss/app.scss': {},
    },
    map: {
        'plugin-babel': '/plugin-babel.js',
        'babel': '/babel.min.js',
        'systemjs-babel-build': '/systemjs-babel-build.js',
        'sass.js': 'npm:sass.js@latest',
        "sass-loader": "../index.js"
    },
    paths: {
        'npm:': 'https://cdn.jsdelivr.net/npm/'
    }
});