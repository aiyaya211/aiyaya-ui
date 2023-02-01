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
        }
    }
}
</script>
<style lang="scss" scoped>
.ya-form {
    
}
</style>