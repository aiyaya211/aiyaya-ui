<template>
    <div class="ya-checkbox-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'YaCheckboxGroup',
    props: {
        value: {
            type: Array,
            default: () => {
                return [];
            }
        }
    },
   provide() {
        return {
           CheckboxGroup: this,
        }
    } 
}
</script>
<style lang="scss" scoped>
.ya-checkbox-group {
    font-size: 0;
}

</style>