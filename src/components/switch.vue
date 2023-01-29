<template>
    <label class="ya-switch" :class="{'is-checked': value}" :value="value" @click="handleClick">
        <span class="ya-switch__core" ref="core">
            <!-- 小圆点 -->
            <span class="ya-switch__button"></span>
        </span>
    </label>
</template>
<script>
export default {
    name: 'YaSwitch',
    props: {
        value: {
            type: Boolean,
            default: false,
        },
        activeColor: {
            type: String,
            default: '',
        },
        inactiveColor: {
            type: String,
            default: ''
        }

//         active-color="#13ce66"
//   inactive-color="#ff4949"
    },
    mounted() {
        this.changeColor();
    },
    watch: {
        value() {
            this.changeColor();
        }
    },
    methods: {
        handleClick() {
            this.$emit('input', !this.value);
        },
        changeColor() {
            if (this.activeColor || this.inactiveColor) {
                let color = this.value? this.activeColor : this.inactiveColor;
                console.log(888)
                this.$refs.core.style.borderColor = color;
                this.$refs.core.style.background = color;
            }
        }
    }
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
        .ya-switch__button {
            position: absolute;
            top: 1px;
            left: 1px;
            border-radius: 100%;
            transition: all .3s;
            width: 16px;
            height: 16px;
            background: #fff;
        }
    }
}
.ya-switch.is-checked {
    .ya-switch__core {
        border-color: #409eff;
        background: #409eff;
        .ya-switch__button {
            transform: translateX(20px);
        }
    }
}
</style>