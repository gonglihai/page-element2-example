<!-- 示例: 只有表格 -->
<template>
  <div>
    <VPage :page="pageOption"></VPage>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pageOption: {
        table: {
          pageSizes: [100, 200, 300, 400, 500],
          api: '/mook/table.json',
          col: [
            { field: 'id', name: '账号' },
            { field: "name", name: "姓名" },
            { field: "gender", name: "性别" },
            { field: "birthday", name: "生日" },
            { field: "age", name: "年龄" },
            { field: "email", name: "电子邮件" },
            { field: "phone", name: "电话号码" },
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