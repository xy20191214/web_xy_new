<template>
  <div class="editor-one">
    <div class="editor editor-fixed"></div>
  </div>
</template>
<style lang="scss" scoped>
  .editor-one {
    width: 100%;
    height: 1px;
    .editor{
      background: #F4F4F4;
    }
    .editor-fixed {
      border-right: 1px #DDDDDD solid;
      height: 100%;
      position: fixed;
      width: 12.5%;
    }
  }
</style>
