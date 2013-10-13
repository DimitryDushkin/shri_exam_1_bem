({
    block: 'page',
    title: 'ШРИ 2013',
    head: [
        { elem: 'css', url: '_index.css', ie: false }
    ],
    content:[
            {
                block: 'layout',
                content: [
                    {
                        elem: 'left',
                        content: [
                                    {
                                        block: 'b-logo',
                                        content: {
                                            elem: 'inner',
                                            content: '<h1>Яндекс</h1><h2>ШРИ 2013</h2><h3>Выпускной альбом</h3>'
                                        }
                                    },
                                    {
                                        block: 'b-menu',
                                        content: [
                                            {
                                                elem: 'item',
                                                content: 'О ШРИ',
                                                url: '#!/'
                                            },
                                            {
                                                elem: 'item',
                                                content: 'Лекторы &amp; лекции',
                                                url: '#!/lectors'
                                            },
                                            {
                                                elem: 'item',
                                                content: 'Ученики',
                                                url: '#!/students',
                                                mod: 'active'
                                            }

                                        ]
                                    }
                                ]
                    },
                    {
                        elem: 'right',
                        content: {
                            block: 'persons'
                        }
                    }
                ]
            }
            ]
})