// components/softKeyboard/softKeyboard.js
Component({
    options: {
        multipleSlots: true // 在组件定义时的选项中启用多slot支持
    },
    /**
     * 组件的属性列表
     * 用于组件自定义设置
     */
    properties: {
        isCityKeyboard: {
            type: Boolean,
            value: true
        }
    },

    /**
     * 私有数据,组件的初始数据
     * 可用于模版渲染
     */
    data: {
        //isCityKeyboard: true,
        result: [],
        city: [
            [
                {name: '京', key: '0', dsb: 0},    //dsb === 1 禁止点击  0 可点击
                {name: '津', key: '1', dsb: 0},
                {name: '渝', key: '2', dsb: 0},
                {name: '沪', key: '3', dsb: 0},
                {name: '冀', key: '4', dsb: 0},
                {name: '晋', key: '5', dsb: 0},
                {name: '辽', key: '6', dsb: 0},
                {name: '吉', key: '7', dsb: 0},
                {name: '黑', key: '8', dsb: 0},
                {name: '苏', key: '9', dsb: 0},
            ],
            [
                {name: '浙', key: '10', dsb: 0},
                {name: '皖', key: '11', dsb: 0},
                {name: '闽', key: '12', dsb: 0},
                {name: '赣', key: '13', dsb: 0},
                {name: '鲁', key: '14', dsb: 0},
                {name: '豫', key: '15', dsb: 0},
                {name: '鄂', key: '16', dsb: 0},
                {name: '湘', key: '17', dsb: 0},
                {name: '粤', key: '18', dsb: 0},
                {name: '琼', key: '19', dsb: 0},
            ],
            [
                {name: '川', key: '20', dsb: 0},
                {name: '贵', key: '21', dsb: 0},
                {name: '云', key: '22', dsb: 0},
                {name: '陕', key: '23', dsb: 0},
                {name: '甘', key: '24', dsb: 0},
                {name: '青', key: '25', dsb: 0},
                {name: '蒙', key: '26', dsb: 0},
                {name: '桂', key: '27', dsb: 0},
                {name: '宁', key: '28', dsb: 0},
                {name: '新', key: '29', dsb: 0},
            ],
            [
                {name: 'ABC', key: '30'},
                {name: '藏', key: '31', dsb: 0},
                {name: '使', key: '32', dsb: 0},
                {name: '领', key: '33', dsb: 0},
                {name: '警', key: '34', dsb: 0},
                {name: '学', key: '35', dsb: 0},
                {name: '港', key: '36', dsb: 0},
                {name: '澳', key: '37', dsb: 0},
                {name: 'delete', key: '38'},
            ],
        ],
        letter: [
            [
                {name: '1', key: '0', dsb: 0},
                {name: '2', key: '1', dsb: 0},
                {name: '3', key: '2', dsb: 0},
                {name: '4', key: '3', dsb: 0},
                {name: '5', key: '4', dsb: 0},
                {name: '6', key: '5', dsb: 0},
                {name: '7', key: '6', dsb: 0},
                {name: '8', key: '7', dsb: 0},
                {name: '9', key: '8', dsb: 0},
                {name: '0', key: '9', dsb: 0}
            ],
            [
                {name: 'Q', key: '10', dsb: 0},
                {name: 'W', key: '11', dsb: 0},
                {name: 'E', key: '12', dsb: 0},
                {name: 'R', key: '13', dsb: 0},
                {name: 'T', key: '14', dsb: 0},
                {name: 'Y', key: '15', dsb: 0},
                {name: 'U', key: '16', dsb: 0},
                {name: 'I', key: '17', dsb: 1},
                {name: 'O', key: '18', dsb: 1},
                {name: 'P', key: '19', dsb: 0}
            ],
            [
                {name: 'A', key: '20', dsb: 0},
                {name: 'S', key: '21', dsb: 0},
                {name: 'D', key: '22', dsb: 0},
                {name: 'F', key: '23', dsb: 0},
                {name: 'G', key: '24', dsb: 0},
                {name: 'H', key: '25', dsb: 0},
                {name: 'J', key: '26', dsb: 0},
                {name: 'K', key: '27', dsb: 0},
                {name: 'L', key: '28', dsb: 0}
            ],
            [
                {name: 'back', key: '29'},
                {name: 'Z', key: '30', dsb: 0},
                {name: 'X', key: '31', dsb: 0},
                {name: 'C', key: '32', dsb: 0},
                {name: 'V', key: '33', dsb: 0},
                {name: 'B', key: '34', dsb: 0},
                {name: 'N', key: '35', dsb: 0},
                {name: 'M', key: '36', dsb: 0},
                {name: 'delete', key: '37'}
            ],
        ]
    },

    /**
     * 组件的方法列表
     * 更新属性和数据的方法与更新页面数据的方法类似
     */
    methods: {

        // 常规按钮点击事件
        _handleKeyClick(e){
            let val = e.currentTarget.dataset;
            this.triggerEvent('handlekeyClick', {val});
        },

        // 删除按钮点击事件
        _handleDeleteClick(e){
            let val = e.currentTarget.dataset.val;
            this.triggerEvent('handleDeleteClick', {val});
        },

        // ABC 和 返回 按钮点击事件
        _handleToggleClick(e){
            let val = e.currentTarget.dataset.val;
            this.triggerEvent('handleToggleClick', {val});
        }

        /*
         * 公有方法
         */


    }
})