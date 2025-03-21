<!-- 示例: 进阶用法/数据选择 -->
<template>
  <div>
    <el-button @click="visible = true">选择人员</el-button>
    
    <div>已选择人员id ({{ value.length }}人): {{ value }}</div>

    <el-dialog top="4vh" width="90vw" :visible.sync="visible" title="选择人员">
      <div style="height: calc(100vh - 4vh - 164px)">
        <VPage :page="pageOption">

          <!-- 插槽: 在操作按钮之后 -->
          <template v-slot:button-end>
            <div style="margin-left: 10px;">已选择 {{ value.length }} 人</div>
          </template>
        </VPage>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 已选择的 id
      value: [],
      // 弹框显示控制
      visible: false,

      // page 选项
      pageOption: {
        tree: {
          field: 'deptId',
          api: '/mook/tree.json',
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
          {
            name: '添加已选中的', color: 'primary', selectMin: 1,
            // 表格选中框联动
            click: (rows) => rows.forEach(row => {
              if (!this.value.includes(row.id)) {
                this.value.push(row.id);
              }
            })
          },
          {
            name: '移除已选中的', color: 'danger', selectMin: 1,
            // 表格选中框联动
            click: (rows) => rows.forEach(row => {
              const i = this.value.indexOf(row.id);
              if (i != -1) {
                this.value.splice(i, 1);
              }
            })
          },
        ],
        table: {
          select: true,
          api: '/mook/table.json',
          col: [
            { field: 'id', name: 'id' },
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
                {
                  name: '选择',
                  // 点击添加 id
                  click: ({ row }) => this.value.push(row.id),
                  // value 不包含 row.id 时显示
                  hidden: ({ row }) => this.value.includes(row.id)
                },
                {
                  name: '移除', color: 'danger',
                  // 点击移除 id
                  click: ({ row }) => this.value.splice(this.value.indexOf(row.id), 1),
                  // value 包含 row.id 时隐藏
                  hidden: ({ row }) => !this.value.includes(row.id)
                },
              ]
            }
          ]
        }
      }
    }
  }
}
</script>