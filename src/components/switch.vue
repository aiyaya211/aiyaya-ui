<template>
    <div class="ya-switch">
        <input type="checkbox" />
        <span class="ya-switch__core"></span>
    </div>
</template>
<script>
export default {
    name: 'YaSwitch',
}
</script>
<style lang="scss" scoped>
.ya-switch {
    display: inline-flex;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    height: 20px;
    vertical-align: middle;
    .ya-switch__core {
        margin: 0;
        display: inline-block;
        position: relative;
        width: 40px;
        height: 20px;
        border: 1px solid #dcdfe6;
        outline: none;
        border-radius: 10px;
        box-sizing: border-box;
        background: #dcdfe6;
        cursor: pointer;
        transition: border-color .3s,background-color .3s;
        vertical-align: middle;
    }
}
</style>