<!-- 示例: 进阶用法/自定义表格列类型 -->
<template>
  <div>
    <VPage :page="pageOption">

      <!-- 插槽: 表格分页之前, 头像版权说明 -->
      <template #table-page-start>
        <div style="flex: auto; font-size: 14px; display: flex; align-items: center;">
          头像由
          <el-link href="https://github.com/Codennnn/vue-color-avatar" style="margin:0 4px;" target="_blank">
            Vue Color Avatar
          </el-link>
          生成
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
          pageSizes: [5, 10, 20],
          api: '/mook/table.json',
          col: [
            { field: 'id', name: '账号', sortable: true },
            // 自定义列类型
            // 组件定义在 src/components/colType/ 目录下
            // 组件注册在 src/VPageConfig.js 文件内
            // src/components/colType/ColTypeImg.vue
            { field: 'avatar', name: '⚡头像⚡', type: 'img', width: '80px', align: 'center' },
            { field: "name", name: "姓名" },
            { field: "gender", name: "性别" },
            // src/components/colType/ColTypeAge.vue
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