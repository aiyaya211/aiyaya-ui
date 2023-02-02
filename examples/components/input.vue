<template>
    <div class="ya-input" :class="{'ya-input--suffix': showIcon}">
        <!-- v-model双向绑定 -->
        <input 
        class="ya-input__inner" 
        :class="{'is-disabled': disabled}"
        :placeholder="placeholder"
        :type="showPassword? (isShowPassword? 'text' : 'password'): type"
        :disabled="disabled"
        :name="name"
        :value="value"
        @input="changeVal"
        />
        <span class="ya-input__suffix" v-if="showIcon">
            <i v-if="clearable && value" class="ya-icon-qingchu ya-input__icon"  @click="clearContent"/>
            <i 
                v-if="showPassword && type === 'password'" 
                class="ya-input__icon ya-icon-yanjing_yincang_o" 
                :class="{'ya-icon-yanjing_yincang_o_active': isShowPassword}"
                @click="changeType"/>
        </span>
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
        },
        showPassword: {
            type: Boolean,
            default: false,
        }
    },
    data() {
        return {
            isShowPassword: false, // 控制类型是否为密码类型
        }
    },
    computed: {
        showIcon() {
            return this.clearable || this.showPassword;
        }
    },
    methods: {
        // 子组件修改父组件
        changeVal(e) {
            this.$emit('input', e.target.value)
        },
        clearContent() {
            console.log('clearContent')
            // 清空数据
            this.$emit('input', '')
        },
        changeType() {
            this.isShowPassword = !this.isShowPassword;
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
.ya-input__suffix-inner {
    pointer-events: all;
}
.ya-input--suffix {
    .ya-input__inner {
        padding-right: 30px;
    }
    .ya-input__suffix {
        position: absolute;
        height: 100%;
        right: 5px;
        top: 0;
        text-align: center;
        color: #c0c4cc;
        transition: all .3s;
        // https://zhuanlan.zhihu.com/p/71865866
        // pointer-events: none; 
          i {
            // color: #c0c4cc;
            font-size: 14px;
            cursor: pointer;
            transition: color .2s cubic-bezier(.645, .045,.355, 1);
        }
    }
    .ya-icon-yanjing_yincang_o_active {
        color: blue
    }
}
.ya-input__icon {
    width: 25px;
    line-height: 40px;
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