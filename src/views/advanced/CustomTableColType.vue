<template>
  <div>
    <VPage :page="pageOption">
      <template #table-page-start>
        <div style="flex: auto; font-size: 14px; display: flex; align-items: center;">
          头像图片来源于
          <el-link href="https://github.com/Codennnn/vue-color-avatar" style="margin-left: 4px;" target="_blank">
            Vue Color Avatar
          </el-link>
        </div>
      </template>
    </VPage>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pageOption: {
        table: {
          select: true,
          api: '/mook/table.json',
          col: [
            { field: 'id', name: '账号' },
            // 全局自定义列类型, ColTypeImg.vue
            { field: 'avatar', name: '⚡头像⚡', type: 'img', width: '80px', align: 'center' },
            { field: "name", name: "姓名" },
            { field: "gender", name: "性别" },
            // 全局自定义列类型, ColTypeAge.vue
            { field: "age", name: "🔥年龄🔥", type: 'age' },
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