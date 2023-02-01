<template>
    <div class="ya-radio-group" >
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'YaRadioGroup',
    props: {
        // 双向绑定在group上
        value: null
    },
    provide() {
        return {
           RadioGroup: this, 
        }
    }
}
</script>
<style lang="scss" scoped>
.ya-radio-group {
    display: inline-block;
    line-height: 1;
    vertical-align: middle;
    font-size: 0;
}

</style>