<template>
    <button class="ya-button" :class="[`ya-button--${type}`, { 'is-plain': plain, 'is-round': round }]">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: 'YaButton',
    props: {
        // 按钮类型
        type: {
            type: String,
            default: 'default'
        },
        // 是否为朴素元素
        plain: {
            type: Boolean,
            default: false,
        },
        // 圆角按钮
        round: {
            type: Boolean,
            default: false,
        }
    }
}
</script>
<style lang="scss" scoped>
.ya-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    &:hover,
    &:focus {
        color: #409eff;
        border-color: #c6e2ff;
        background-color: #ecf5ff;
    }
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
}
.ya-button--primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    &:focus,
    &:hover {
        background: #66b1ff;
        border-color: #66b1ff;
        color: #fff;
    }
}
.ya-button--primary.is-plain {
    color: #409eff;
    background: #ecf5ff;
    border-color: #b3d8ff;
    &:focus,
    &:hover {
        background: #409eff;
        border-color: #409eff;
        color: #fff;
    }
}
.ya-button--success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
    &:focus,
    &:hover {
        background: #85ce61;
        border-color: #85ce61;
        color: #fff;
    }
}
.ya-button--success.is-plain {
    color: #67c23a;
    background: #f0f9eb;
    border-color: #c2e7b0;
    &:focus,
    &:hover {
        background: #67c23a;
        border-color: #67c23a;
        color: #fff;
    }
}

.ya-button--info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;
    &:focus,
    &:hover {
        background: #a6a9ad;
        border-color: #a6a9ad;
        color: #fff;
    }
}
.ya-button--info.is-plain {
    color: #909399;
    background: #f4f4f5;
    border-color: #d3d4d6;
    &:hover,
    &:focus {
        background: #909399;
        border-color: #909399;
        color: #fff;
    }
}
.ya-button--warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
    &:focus,
    &:hover {
        background: #ebb563;
        border-color: #ebb563;
        color: #fff;
    }
}
.ya-button--warning.is-plain {
    color: #e6a23c;
    background: #fdf6ec;
    border-color: #f5dab1;
    &:focus,
    &:hover {
        background: #e6a23c;
        border-color: #e6a23c;
        color: #fff;
    }
}
.ya-button--danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
    &:focus,
    &:hover {
        background: #f78989;
        border-color: #f78989;
        color: #fff;
    }
}
.ya-button--danger.is-plain {
    color: #f56c6c;
    background: #fef0f0;
    border-color: #fbc4c4;
    &:focus,
    &:hover {
        background: #f56c6c;
        border-color: #f56c6c;
        color: #fff;
    }
}
// 圆角
.ya-button.is-round {
    border-radius: 20px;
    padding: 12px 23px;
}

</style>