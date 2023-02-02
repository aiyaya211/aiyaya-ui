<template>
    <div class="ya-form">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'YaForm',
    props: {
        model: {
            type: Object,
            required: true,
        },
        labelWidth: {
            type: String,
            default: '60px'
        }
    },
    provide() {
       return {Form: this}
    }
}
</script>
<style lang="scss" scoped>

</style>