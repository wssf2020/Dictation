var words = {
    property: { name: "单词表", type: "list", enable: true },
    mc: {
        property: { name: "Mc", type: "list", enable: true },
        word: {
            property: { name: "McWords", type: "list", enable: true },
            command:{ 
              property: { name: "Commands", type: "word", enable: true },
              value:[{chs:["创造模式","调创造"],eng:"/gamemode 1"},{chs:["设置重生点","设置出生点","设置出生地"],eng:"/spawnpoint"},{chs:["清除背包"],eng:"/clear"},{chs:["给予药水效果","给予药效"],eng:"/effect"}]
            },
            items: {
                property: { name: "Items", type: "word", enable: true },
                value: [{chs:["铁锭","肥皂"],eng:"iron_ingot"},{chs:["命令方块","命令块","指令方块"],eng:"command_block"},{chs:["钻石"],eng:"diamond"},{chs:["基岩"],eng:"bedrock"},{chs:["床"],eng:"bed"}]
            }
        },
        sentence: {
            property: { name: "句子", type: "sentence", enable: true },
            value: [{chs:["你好,世界"],eng:"hello,world"}]
        },
        test:{
            property: { name: "测试", type: "sentence", enable: false },
            value: []
        }
    }
}