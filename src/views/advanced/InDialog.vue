<template>
  <div>
    <el-button @click="visible = true">打开弹框</el-button>
    <el-dialog top="4vh" width="90vw" :visible.sync="visible" title="在弹窗内">
      <!-- 
        4vh 是 el-dialog 的 top, 164px 是 el-dialog__header 的 height 54px, el-dialog__body 的 padding-top,bottom 30px 和 el-dialog 的 margin-bottom 50px
        如果 top 为 50px, 可以设置为 height: calc(100vh - 214px)
      -->
      <div style="height: calc(100vh - 4vh - 164px)">
        <VPage :page="pageOption"></VPage>
      </div>

    </el-dialog>
  </div>
</template>
<script>

export default {
  data() {
    return {
      visible: false,
      pageOption: {
        tree: {
          field: 'deptId',
          api: 'https://page-element2.glh.red/mook/tree.json',
        },
        search: [
          { label: '账号', field: 'id' },
          { label: '姓名', field: 'name' },
          {
            label: '性别', field: 'gender', type: 'select', option: [
              { id: '0', name: '男' },
              { id: '1', name: '女' },
              { id: '2', name: '未知' }
            ]
          }
        ],
        button: [
          { name: '添加', click: () => console.log('点击了添加') },
          { name: '编辑', selectCount: 1, click: this.edit },
          { name: '删除', selectMin: 1, click: this.del },
        ],
        table: {
          select: true,
          api: 'https://page-element2.glh.red/mook/table.json',
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
            {
              name: '操作', type: "button", button: [
                { name: '详情' },
                { name: '编辑', click: ({ row }) => this.edit([row]) },
                { name: '删除', confirmClick: ({ row }) => this.del([row]) },
              ]
            }
          ]
        }
      }
    }
  },
  methods: {
    edit(rows) {
      console.log('点击了编辑，选中的行：', rows)
    },
    del(rows) {
      console.log('点击了删除，选中的行：', rows)
    },
  }
}
</script>