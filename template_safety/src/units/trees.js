
// list 数据转tree
// treeData  数据源[]
// options   配置{ id:"id",pid:"pid"}

//  list 数据 转 树形 tree
function filterTree(treeData = [], options = { id, pid }) {
    let tree = [];
    treeData.forEach(el => {
        //查询根节点
        if (el[options.pid] == '' || el[options.pid] == null) {
            tree.push(el)
        } else {
            //查询子节点  findIndex 满足条件返回下标  
            let index = treeData.findIndex(item => {
                return item[options.id] == el[options.pid]
            })
            // 不满足条件 返回 -1
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
// 树形扁平化处理成list
function convert_tree_data(data) {
    for (var i = 0; i < data.length; i++) {
        if (data[i].children != undefined) {
            var temp = data[i].children;
            // 删除孩子节点
            delete data[i].children;
            // 孩子节点加入数组末尾
            for (var j = 0; j < temp.length; j++) {
                data.push(temp[j]);
            }
        }
    }
    return data;
}



export { filterTree, convert_tree_data }


