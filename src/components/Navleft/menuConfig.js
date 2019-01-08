const menuList = [
    {
        title: '主页',
        id: 'index',
        key: '/',
        icon: 'home',
    },
    {
        title: '数据统计',
        id: 'statistic',
        key: '/',
        icon: 'pie-chart',
        children: [
            {
                title: '客户',
                id: 'customer',
                key: '/',
                icon: 'user',
            },
            {
                title: '商品',
                id: 'prdus',
                key: '/',
                icon: 'inbox',
            },           
        ]
    },
    {
        title: '工作台',
        id: 'worktop',
        key: '/',
        icon: 'desktop',
        children: [
            {
                title: '客户对账',
                id: 'customerbill',
                key: '/',
                icon: 'user-add',
            },
            {
                title: '供应商对账',
                id: 'wender',
                key: '/',
                icon: 'usergroup-add',
            }
        ]
    },
    {
        title: '工单类型',
        id: 'wotype',
        key: '/',
        icon: 'tags',
        children: [
            {
                title: '基础表格',
                id: 'basetable',
                key: '/',
            },
            {
                title: '高级表格',
                id: 'higtable',
                key: '/',
            }
        ]
    },
    {
        title: '工单模板',
        id: 'wotemplate',
        key: '/',
        icon: 'file',
    },
    {
        title: '自定义字段',
        id: 'userdefin',
        key: '/',
        icon: 'file-add',
        children: [
            {
                title: '订单详情',
                id: 'detail',
                key: '/',

            },
            {
                title: '结束订单',
                id: 'finish',
                key: '/',
            }
        ]
    },
    {
        title: '知识库',
        id: 'knowledgebase',
        key: '/',
        icon: 'database',
    },
    {
        title: '设置',
        id: 'setting',
        key: '/',
        icon: 'setting',
    },   
];
export default menuList;