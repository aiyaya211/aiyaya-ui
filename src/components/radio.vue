<template>
    <label class="ya-radio is-checked">
        <span class="ya-radio__input">
            <span class="ya-radio__inner"></span>
            <input 
            type="radio" 
            class="ya-radio__original" 
            :value="value" 
            :name="name"
            v-model="value"
            />
        </span>
        <span class="ya-radio__label">
            <slot></slot>
            <template v-if="!$slots.default">
                <span>{{label}}</span>
            </template>
        </span>
    </label>
</template>
<script>
export default {
    name: 'YaRadio',
    props: {
        value: {
            type: null,
        },
        label: {
            type: [String, Number, Boolean],
            default: ''
        },
        name: {
            type: String,
            default: ''
        }
    },
    methods: {

    }
}
</script>
<style lang="scss" scoped>
.ya-radio {
    color: #606266;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: none;
    font-size: 14px;
    margin-right: 30px;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    .ya-radio__input {
        white-space: nowrap;
        cursor: pointer;
        outline: none;
        display: inline-block;
        line-height: 1;
        position: relative;
        vertical-align: middle;
        .ya-radio__inner {
            border: 1px solid #dcdfe6;
            border-radius: 100%;
            width: 14px;
            height: 14px;
            background-color: #fff;
            position: relative;
            cursor: pointer;
            display: inline-block;
            box-sizing: border-box;
            &:after {
                width: 4px;
                height: 4px;
                border-radius: 100%;
                background: #fff;
                content: '';
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%) scale(0);
                transition: transform .15s ease-in;
            }
        }
        .ya-radio__original {
            opacity: 0;
            outline: none;
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: 0;
        }
    }
    .ya-radio__label {
        font-size: 14px;
        padding-left: 10px;
    }
}
.ya-radio.is-checked {
    .ya-radio__input {
        .ya-radio__inner {
            border-color: #409eff;
            background:  #409eff;
            &:after {
                // 按照x轴和y轴平移
                // 缩放
                transform: translate(-50%,-50%) scale(1); 
            }
        }
    }
    .ya-radio__label {
        color: #409eff;
    }
}
</style>