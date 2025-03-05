<template>
  <div>
    <VPage ref="page" :page="pageOption">
      <!-- 树搜索之后 编辑按钮 -->
      <template #tree-search-end>
        <div style="display: flex; flex:none; align-items: center; margin-left: 4px">
          <el-button-group>
            <el-tooltip effect="dark" content="添加部门" placement="top">
              <el-button v-show="treeEditButtonShow" icon="el-icon-plus" size="small" />
            </el-tooltip>
            <el-tooltip effect="dark" content="编辑部门" placement="top">
              <el-button @click="treeEditButtonShow = !treeEditButtonShow" icon="el-icon-edit" size="small" />
            </el-tooltip>
          </el-button-group>
        </div>
      </template>

      <!-- 树节点作用域插槽 -->
      <template v-slot:tree-node="{ node, data }">
        <span class="custom-tree-node1">
          <span>{{ node.label }}</span>
          <span v-if="data.label != '默认分类'" v-show="treeEditButtonShow">
            <el-button type="text" size="mini" @click.stop="edit(node, data)">
              编辑
            </el-button>
            <el-button type="text" size="mini" @click.stop="del(node, data)">
              删除
            </el-button>
          </span>
        </span>
      </template>
    </VPage>
  </div>
</template>
<script>
export default {
  data() {
    return {
      treeEditButtonShow: false,

      pageOption: {
        tree: {
          field: 'deptId',
          api: '/mook/tree.json',
          expand: true,
          width: '300px'
        },
        table: {
          select: true,
          api: '/mook/table.json',
          col: [
            { field: 'id', name: '账号' },
            { field: "name", name: "姓名" },
            { field: "gender", name: "性别" },
            { field: "birthday", name: "生日" },
            { field: "age", name: "年龄" },
            {
              name: '联系方式', children: [
                { field: "email", name: "电子邮件" },
                { field: "phone", name: "电话号码" },
              ]
            },
            { field: "city", name: "城市" },
            { field: "address", name: "地址" },
            { field: "occupation", name: "职业" },
            { field: "company", name: "公司" },
            { field: "hobbies", name: "爱好", fmt: (value) => value.join(',') },
          ]
        }
      }
    }
  },
  methods: {
    edit(node, data) {
      console.log('点击了编辑, node: ', node, 'data: ', data)

      // 模拟编辑后刷新树
      setTimeout(() => {
        this.$refs.page.$tree.reloadData();
        console.log('树刷新完毕');
      }, 2000)
    },
    del(node, data) {
      console.log('点击了删除, node: ', node, 'data: ', data);

      // 模拟删除后刷新树
      setTimeout(() => {
        this.$refs.page.$tree.reloadData();
        console.log('树刷新完毕');
      }, 2000)
    },
  }
}
</script>

<style scoped>
.custom-tree-node1 {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}

.el-tree-node.is-current>.el-tree-node__content .custom-tree-node1 .el-button {
  color: white
}
</style>