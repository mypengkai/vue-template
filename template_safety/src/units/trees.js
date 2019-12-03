
// list 数据转tree
// treeData  数据源[]
// options   配置{ id:"id",pid:"pid"}
function filterTree(treeData, options) {
    let tree = [];
    treeData.forEach(el => {
        //查询根节点
        if (el[options.pid] == '' || el[options.pid] == null) {
            tree.push(el)
        } else {
            //查询子节点
            let index = treeData.findIndex(item => {
                return item[options.id] == el[options.pid]
            })
            if (index !== -1) {
                treeData[index].children = treeData[index].children || []
                treeData[index].children.push(el)
            }
        }
    });
    return treeData.filter(item => {
        return item[options.pid] == "" || item[options.pid] == null
    })
}




export default filterTree


