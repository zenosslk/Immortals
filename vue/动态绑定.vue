    <!-- Class 与 Style 如何进行动态绑定 -->
 <template>
  <div v-bind:class="{active: isActive, 'text-danger': hasError}">
    Class - 对象语法
  </div>
</template>

<script>
export default {
  data: {
    isActive: true,
    hasError: false
  }
}
</script>

<template>
  <div v-bind:class="[isActive? activeClass : '' , errorClass]">
    Class - 数组语法
  </div>
</template>

<script>
export default {
  data: {
    activeClass: 'active',
    errorCLass: 'text-danger'
  }
}
</script>


<template>
  <div v-bind:style="{color : activeColor, fontsize:fontsize+ 'px'}">
    Style- 对象语法
  </div>
</template>

<script>
export default {
  data: {
    activeColor: 'red',
    fontSize: 20
  }
}
</script>

<template>
  <div v-bind:style="[styleColor, styleSize]">
    Style- 数组语法
  </div>
</template>

<script>
export default {
  data: {
    styleColor: {
      color: 'red'
    },
    styleSize: {
      fontsize: '23px'
    }
  }
}
</script>