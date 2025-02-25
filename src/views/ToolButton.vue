<template>
  <div>
    <VPage :page="pageOption" @buttonDelete="del">
      <template v-slot:button-start>
        <div>按钮之前 button-start</div>
      </template>
      <template v-slot:button-end>
        <div style="margin-left: 5px">按钮之后 button-end</div>
      </template>
    </VPage>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pageOption: {
        button: [
          { name: '添加', click: console.log, color: 'primary', icon: 'el-icon-plus' },
          { name: '编辑', selectCount: 1, click: this.edit, icon: 'el-icon-edit' },
          {
            name: '删除', selectMin: 1, color: 'danger', icon: 'el-icon-close',
            internal: 'delete', api: '/del', field: 'id', requestField: 'ids', fieldType: 'string'
          },
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