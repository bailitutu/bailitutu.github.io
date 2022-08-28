module.exports = {
    title: '个人主页',
    description: '我的个人网站',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: './logo.png' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
        nav: [ // 导航栏配置
            { text: '前端基础', link: '/accumulate/' },
            { text: '书签', link: '/bookmark/' },
            { text: '笔记', link: '/bookmark/' },
            { text: '书籍', link: '/bookmark/' },
            { text: '算法题库', link: '/algorithm/' },
            { text: '博客收藏', link: '/blogcollect/' },
        ],
        sidebar: [
            '/',
            '/page-a',
        ], // 侧边栏配置
        sidebarDepth: 2, // 侧边栏显示2级
    }
};
