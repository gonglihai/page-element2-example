<template>
  <div>
    <VPage ref="page" :page="pageOption" @search="search">
      <template v-slot:search-button-start>
        <el-button size="mini">search-button-start</el-button>
      </template>
      <template v-slot:search-button-end>
        <el-button size="mini">search-button-end</el-button>
      </template>
    </VPage>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pageOption: {
        tree: {
          field: 'deptId',
          api: '/mook/tree.json',
        },
        // search 定义查询条件数组
        search: [
          { field: 'input1', label: '输入框', placeholder: '自定义 placeholder', clearable: false, default: '123' },                        // input 输入框
          {
            field: 'select1', label: '下拉框', type: 'select',         // select 下拉框
            option: [         // 静态选项
              { id: '1', name: '选项1' },
              { id: '2', name: '选项2' },
            ],
          },
          {
            field: 'select2', label: '下拉框2', type: 'select',         // select 下拉框 (自定义 props)
            option: [
              { dictValue: 1, dictName: '普通员工' },
              { dictValue: 2, dictName: '部门主管' },
              { dictValue: 3, dictName: '市场经理' },
            ], props: {
              value: 'dictValue',
              label: 'dictName'
            }, multiple: true, multipleValueType: 'string'
          },
          { field: 'date', type: 'date', label: '日期', valueFormat: "MM-dd", format: 'yy-MM-dd' },              // date 日期
          { field: 'dateRange', label: '日期范围', type: 'date-range', valueFormat: "MM-dd", format: 'yyyy-MM-dd' },// date-range 日期范围
          { field: 'year', label: '年', type: 'year' },                // year 年
          { field: 'yearMonth', label: '年月', type: 'year-month' },   // year-month 年月
          { field: 'yearMonth2', label: '年月(yyyy-MM)', type: 'year-month', valueFormat: 'yyyy-MM' },   // year-month 年月
        ],
        button: [
          { name: '添加', click: () => console.log('点击了添加') },
          { name: '编辑', selectCount: 1, click: this.edit },
          { name: '删除', selectMin: 1, click: this.del },
          { name: '清空查询', click: this.cleanSearch },
          { name: '重置查询', click: this.resetSearch },
          { name: '触发 search 事件', click: this.emitSearch },
        ],
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
    // 清空查询
    cleanSearch() {
      console.log(this.$refs.page)
      this.$refs.page.$search.clean();
    },
    // 重置查询
    resetSearch() {
      this.$refs.page.$search.reset();
    },
    // 触发 search 事件
    emitSearch() {
      this.$refs.page.$search.search();
    },
    search(searchData) {
      console.log('触发了 search 事件', searchData)
    }
  }
}
</script>