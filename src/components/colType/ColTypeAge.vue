<!-- 自定义列类型, 动态年龄计算 -->
<template>
  <el-tooltip :disabled="!this.scope.row.birthday" :content="this.scope.row.birthday" placement="top">
    <span>
      {{ age }}
    </span>
  </el-tooltip>
</template>

<script>
import { TableColMixin } from 'page-element2';

export default {
  mixins: [TableColMixin],
  created() {
    this.calculateAge();
  },
  data() {
    return {
      age: ''
    }
  },
  methods: {
    calculateAge() {
      if (!this.scope.row.birthday) {
        this.age = '-';
      }
      const birthDate = new Date(this.scope.row.birthday); // 将字符串转换为 Date 对象
      const today = new Date(); // 获取当前日期

      let age = today.getFullYear() - birthDate.getFullYear(); // 计算年份差

      // 如果当前日期还没过今年的生日，年龄减去1
      const monthDiff = today.getMonth() - birthDate.getMonth();
      const dayDiff = today.getDate() - birthDate.getDate();

      if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
      }

      this.age = age;
    }
  }
}
</script>