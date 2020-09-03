<template>
  <el-row>
    <el-col :span="24">
      <ihead></ihead>
    </el-col>
    <el-col :span="3">
      <one></one>
    </el-col>
    <el-col :span="4">
      <two></two>
    </el-col>
    <el-col :span="17">
      <three></three>
    </el-col>
  </el-row>
</template>
<script>
import ihead from './head'
import one from './one'
import two from './two'
import three from './three'

export default {
  components: {
    ihead,
    one,
    two,
    three
  }
}
</script>
