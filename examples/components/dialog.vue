<template>
    <!-- 对话框的遮罩 -->
    <!-- 动画 -->
    <transition name="dialog-transition">
        <div class="ya-dialog__wrapper" style="z-index: 2002" v-show="visible" @click.self="handleClick">
            <div class="ya-dialog" :style="{marginTop: top, width: width}">
                <!-- 头部 -->
                <div class="ya-dialog__header">
                    <slot name="title">
                        <span class="ya-dialog__title">
                            {{title}}
                        </span>
                    </slot>
                    <button class="ya-dialog__headerbtn" @click="handleClick"><i class="ya-icon-close-little"></i></button>
                </div>
                <div class="ya-dialog__body">
                    <!-- 默认插槽 -->
                    <slot></slot>
                </div>
                <!-- 底部 -->
                <div class="ya-dialog__footer" v-if="$slots.footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    name: 'YaDialog',
    props: {
        // 标题
        title: {
            type: String,
            default: ''
        },
        // 对话框宽度
        width: {
            type: String,
            default: '30%'
        },
        // 距离顶部的高度
        top: {
            type: String,
            default: '30vh'
        },
        visible: {
            type: Boolean,
            default: false,
        }
    },
    methods: {
        handleClick() {
            this.$emit('update:visible', false);
        }
    }
}
</script>
<style style="scss" scoped>
.ya-dialog__wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
    background: rgba(0,0,0,.5);
}
.ya-dialog {
    position: relative;
    margin: 0 auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
    box-sizing: border-box;
    width: 50%;
}
.ya-dialog__header {
    padding: 20px 20px 10px;
}
.ya-dialog__title {
    line-height: 24px;
    font-size: 18px;
    color: #303133;
}
.ya-dialog__headerbtn {
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 0;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 16px;
}
.ya-dialog__body {
    padding: 30px 20px;
    color: #606266;
    font-size: 14px;
    word-break: break-all;
}
.ya-dialog__footer {
    padding: 10px 20px 20px;
    text-align: right;
    box-sizing: border-box;
}
.dialog-transition-enter-active, .dialog-transition-leave-active {
  transition: opacity .5s;
}
.dialog-transition-enter, .dialog-transition-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>