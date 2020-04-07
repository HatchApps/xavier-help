module.exports = {
    title: 'Xavier Analytics - Help',
    description: 'Help documentation and support for Xavier Analytics',
    ga: 'UA-76675321-9',
    head: [
        ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
        ['link', { rel: 'manifest', href: '/site.webmanifest' }],
        ['meta', { name: 'theme-color', content: '#ffffff' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
        ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#393142' }],
        ['meta', { name: 'msapplication-TileImage', content: '/mstile-150x150.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#9f00a7' }]
    ],
    themeConfig: {
        sidebar: [
            '/',
            '/getting-started',
            '/clients',
            '/sandbox-reporting',
            '/focus',
            '/insights',
            '/checks',
            '/team-management',
            '/xero-integration',
            '/integrations',
            '/api',
            '/faq',
            '/troubleshooting',
            '/contact-us',
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
