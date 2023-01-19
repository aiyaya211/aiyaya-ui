<template>
    <div class="ya-input">
        <input 
        class="ya-input__inner" 
        :class="{'is-disabled': disabled}"
        :placeholder="placeholder"
        :type="type"
        :disabled="disabled"
        :name="name"
        :value="value"
        @input="changeVal"
        :clearable="clearable"
        />
    </div>
</template>
<script>
export default {
    name: 'YaInput',
    props: {
        placeholder: {
            type: String,
            default: '请输入内容'
        },
        type: {
            type: String,
            default: 'text'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        name: {
            type: String,
            default: ''
        },
        value: {
            type: String,
            default: ''
        },
        clearable: {
            type: Boolean,
            default: false,
        }
    },
    methods: {
        changeVal(e) {
            this.$emit('input', e.target.value)
        }
    }
}
</script>
<style lang="scss" scoped>
.ya-input {
    position: relative;
    font-size: 14px;
    display: inline-block;
}
.ya-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
    &:focus {
        outline: none;
        border-color: #409eff;
    }
    &.is-disabled {
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        color: #c0c4cc;
        cursor: not-allowed;
    }
}
</style>