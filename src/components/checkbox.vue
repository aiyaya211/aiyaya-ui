<template>
    <label class="ya-checkbox" :class="{'is-checked': hasGroup? checkStatus.includes(label) : !!value }">
        <span class="ya-checkbox__input">
            <span class="ya-checkbox__inner"></span>
            <input 
            type="checkbox" 
            class="ya-checkbox__original"
            :value="label"
            v-model="checkStatus">
        </span>
        <span class="ya-checkbox__label">
            <template v-if="!$slots.default">
                {{ label }}
            </template>
            <template v-else>
                 <slot></slot>
            </template>
        </span>
    </label>
</template>
<script>
export default {
    name: 'YaCheckbox',
    props: {
        value: {
            type: Boolean,
            default: false
        },
        label: {
            type: String,
            default: ''
        },
    },
    inject: {
        CheckboxGroup: {
            default: '' 
        }
    },
    computed: {
        checkStatus: {
            get() {
                console.log(this.CheckboxGroup.value)
                return this.hasGroup? this.CheckboxGroup.value : this.value
            },
            set(value) {
                if(this.hasGroup) {
                    this.CheckboxGroup.$emit('input', value) 
                } else {
                    this.$emit('input', value)
                }
            }
        },
        hasGroup() {
            return !!this.CheckboxGroup;
        }
    }

}
</script>
<style lang="scss" scoped>
.ya-checkbox {
    color: #606266;
    font-weight: 500;
    font-size: 14px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    user-select: none;
    margin-right: 30px;
    .ya-checkbox__input {
        white-space: nowrap;
        cursor: pointer;
        outline: none;
        display: inline-block;
        line-height: 1;
        position: relative;
        vertical-align: middle;
        .ya-checkbox__inner {
            display: inline-block;
            position: relative;
            border: 1px solid #dcdfe6;
            border-radius: 2px;
            box-sizing: border-box;
            width: 14px;
            height: 14px;
            background-color: #fff;
            z-index: 1;
            transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);
            &:after {
                box-sizing: content-box;
                content: "";
                border: 1px solid #fff;
                border-left: 0;
                border-top: 0;
                height: 7px;
                left: 4px;
                position: absolute;
                top: 1px;
                transform: rotate(45deg) scaleY(0);
                width: 3px;
                transition: transform .15s ease-in .05s;
                transform-origin: center;
            }
        }
        .ya-checkbox__original {
            opacity: 0;
            outline: none;
            left: 10px;
            position: absolute;
            margin: 0;
            width: 0;
            height: 0;
            z-index: -1;
        }
    }
    .ya-checkbox__label {
        display: inline-block;
        padding-left: 10px;
        line-height: 19px;
        font-size: 14px;
    }
}
.ya-checkbox.is-checked {
    .ya-checkbox {
        .ya-checkbox__inner {
            border-color: #409eff;
            background:  #409eff;
            &:after {
                transform: rotate(45deg) scaleY(1); 
            }
        }
    }
    .ya-checkbox__label {
        color: #409eff;
    }
}
</style>