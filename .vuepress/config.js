module.exports = {
    title: 'Xavier Analytics - Help',
    description: '',
    ga: 'UA-76675321-9',
    themeConfig: {
        sidebar: [
            '/',
            '/getting-started',
            '/sandbox-reporting',
            '/insights',
            '/team-management',
            '/xero-integration',
            '/troubleshooting',
            '/contact-us'
        ],
        displayAllHeaders: true,
        lastUpdated: 'Last Updated',
    },
    configureWebpack: {
        optimization: {
            splitChunks: {
                cacheGroups: {
                    styles: {
                        name: 'styles',
                        // necessary to ensure async chunks are also extracted
                        test: m => /css-extract/.test(m.type),
                        chunks: 'all',
                        enforce: false
                    }
                }
            }
        }
    }
};
