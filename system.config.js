System.config({
    defaultExtension: 'js',
    transpiler: 'plugin-babel',
    files: {
        '/src/js/index.js': {},
        '/src/scss/_test.scss': {},
        '/src/scss/app.scss': {},
    },
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
        }
    },
    map: {
        'plugin-babel': '/plugin-babel.js',
        'babel': '/babel.min.js',
        'systemjs-babel-build': '/systemjs-babel-build.js',
        'sass.js': 'npm:sass.js@latest',
        "sass-loader": "./systemjs-sass-loader"
    },
    paths: {
        'npm:': 'https://cdn.jsdelivr.net/npm/'
    },
    packages: {
        'sass-loader': {
            main: 'index.js'
        },
    }
});