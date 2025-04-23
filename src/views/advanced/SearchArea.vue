<!-- 
-- 示例: 进阶用法/查询条件级联(省市县)
-- 使用上级表单项的 change 事件, 修改子级表单项的 option 属性实现
-->
<template>
  <VPage ref="page" :page="pageOption"></VPage>
</template>
<script>

// 省 下拉框选项
const provinceOption = [
  { id: '410000', name: '河南省' },
  { id: '130000', name: '河北省' },

  // ... 其他省
];

// 所有 市 的下拉框选项
const allCityOption = [
  // 410000 河南省
  { id: '410200', name: '开封市', parentId: '410000' },
  { id: '410400', name: '平顶山市', parentId: '410000' },
  { id: '410500', name: '安阳市', parentId: '410000' },
  // 130000 河北省
  { id: '130100', name: '石家庄市', parentId: '130000' },

  // ... 其他市
]

// 所有 县 的下拉框选项
const allCountyOption = [
  // 410200 开封市
  { id: '410202', name: '龙亭区', parentId: '410200' },
  { id: '410203', name: '顺河回族区', parentId: '410200' },
  { id: '410204', name: '鼓楼区', parentId: '410200' },
  // 410400 平顶山
  { id: '410402', name: '新华区', parentId: '410400' },
  { id: '410403', name: '卫东区', parentId: '410400' },
  // 410500 安阳市
  { id: '410502', name: '文峰区', parentId: '410500' },
  { id: '410503', name: '北关区', parentId: '410500' },
  // 130100 石家庄市
  { id: '130102', name: '长安区', parentId: '130100' },
  { id: '130104', name: '桥西区', parentId: '130100' },

  // ... 其他县区
]

export default {
  data() {

    // 查询条件项 县 对象引用
    const countySearchItem = { label: '县', field: 'county', type: 'select', option: [] };

    return {
      pageOption: {
        search: {
          item: [
            {
              label: '省', field: 'province', type: 'select', option: provinceOption, change: (searchFormData) => {
                console.log('省变更: ', searchFormData.province, '查询条件对象: ', searchFormData);

                // 通过 index 查找到 市 的 option 选项数组, 进行重新赋值
                this.pageOption.search.item[1].option = allCityOption.filter(item => item.parentId == searchFormData.province);
              }
            },
            {
              label: '市', field: 'city', type: 'select', option: [], change: (searchFormData) => {
                console.log('市变更: ', searchFormData.city, '查询条件对象: ', searchFormData);

                // 通过对象引用查找到 县 的 option 选项数组, 进行重新赋值
                countySearchItem.option = allCountyOption.filter(item => item.parentId == searchFormData.city);
              }
            },
            countySearchItem
          ]
        },
        table: {
          api: '/mook/table.json',
          col: [
            { field: 'id', name: '账号' },
            { field: "name", name: "姓名" },
          ]
        }
      }
    }
  }
}
</script>