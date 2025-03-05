<!-- 自定义列类型, 头像, 不使用 mixin -->
<template>
  <el-image style="width: 50px; height: 50px" :src="prefix + scope.row[col.field]"
    :preview-src-list="[prefix + scope.row[col.field]]" lazy>
  </el-image>
</template>
<script>
export default {
  data() {
    return {
      prefix: '/mook/img/avatar/'
    }
  },
  props: {
    col: {
      type: Object
    },
    scope: {
      type: Object
    }
  },
}
</script>