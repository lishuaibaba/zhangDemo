var ujiuye = (function () {
    /* 
    *作用：通过id获取元素
    *@parm {string} id:id名
    */
    function getId(id) {
        var oBox = document.getElementById(id);
        return oBox;
    }

    /* 
    *作用：获取元素的样式
    *@parm {object} elem：标签
    *@parm {string} attr:属性名
     */
    function getStyle(elem, attr) {//标签，属性
        return window.getComputedStyle ? getComputedStyle(elem)[attr] : elem.currentStyle[attr];
    }


    /* 
    *作用：运动函数
    *@parm {object} elem：标签
    *@parm {string} attr:属性名
    *@parm {number} step:步长
    *@parm {number} target:目标值
    */
    function move(elem, attr, step, target) { //elem,属性：attr，步长：step，目标值：target
        //当前值0   目标值 1000  +
        //当前值1000 目标值0   -
        //当前值<目标值  正     
        step = parseInt(getStyle(elem, attr)) < target ? step : -step;
        //6.定时器会叠加，每次开启定时器之前，清除掉之前的
        clearInterval(elem.timer);
        //4.开启定时器，让div自动每次自加10
        elem.timer = setInterval(function () {
            //3.值 = 当前的位置值+10
            var n = parseInt(getStyle(elem, attr)) + step;

            //5.在500的位置停止
            if ((n >= target && step > 0) || (n <= target && step < 0)) { //右
                n = target;
                clearInterval(elem.timer);
            }
            //2.div往右移动
            elem.style[attr] = n + "px";
        }, 30);
    }



    /* 
    *作用：获取随机数
    *@parm {number} min：最小值
    *@parm {number} max：最大值
    */
    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    /* 
    *作用：补0
    *@parm {number} num：数值
    */
    function fillZero(num) {
        return num < 10 ? "0" + num : num;
    }

    /* 
    *作用:绑定事件
    *@parm {object} elem：标签
    *@parm {string} type：事件类型
    *@parm {function} fun：处理函数
    */
    function bind(elem, type, fun) {
        if (elem.addEventListener) {
            elem.addEventListener(type, fun);
        } else {
            elem.attachEvent("on" + type, fun);
        }
    }

    /* 
    *作用:取消绑定事件
    *@parm {object} elem：标签
    *@parm {string} type：事件类型
    *@parm {function} fun：处理函数
    */
    function unbind(elem, type, fun) {
        if (elem.removeEventListener) {
            elem.removeEventListener(type, fun);
        } else {
            elem.detachEvent("on" + type, fun);
        }
    }



    /* 
    *作用:添加滚轮事件
    *@parm {object} elem：标签
    *@parm {function} upFun：往上滚动调动的函数
    *@parm {function} downFun：往下滚动调动的函数
    */
    function mousescroll(elem, upFun, downFun) {
        //chrome，ie： 标签.onmousewheel
        elem.onmousewheel = scroll;

        //ff：必须使用事件绑定添加  标签.addEventListener("DOMMouseScroll",事件处理函数)
        if (elem.addEventListener) {
            elem.addEventListener("DOMMouseScroll", scroll);
        }



        function scroll(ev) {
            var ev = window.event || ev;
            //获取滚动方向
            //console.log(ev.wheelDelta);   chrome，ie：
            //console.log(ev.detail); ff

            var tag = true; //true---上      false----下
            if (ev.wheelDelta) { //chrome，ie：
                tag = ev.wheelDelta > 0 ? true : false;
            } else {//ff
                tag = ev.detail < 0 ? true : false;
            }


            if (tag) {
                upFun();
            } else {
                downFun();
            }

        }
    }


    /* 
    *作用:缓冲动画
    *@parm {object} elem：标签
    *@parm {object} props：运动属性对象
    *@parm {function} callback：回调函数
    */
    function bufferMove(elem, props, time, callback) {
        //6.停止定时器
        clearInterval(elem.timer)
        elem.timer = setInterval(function () {

            //7.假设全部到了目标点
            var tag = true;

            //8.验证假设是否成立，看每一个元素的位置，只要有一个没有到达目标点，假设不成立
            for (var attr in props) {
                //2.获取当前元素的位置
                if (attr == "opacity") {
                    props[attr] = props[attr] > 1 ? props[attr] : props[attr] * 100;
                    var cur = parseInt(getStyle(elem, attr) * 100);
                } else {
                    var cur = parseInt(getStyle(elem, attr));
                }
                //3.计算运动值  （目标值-当前值）/时间
                var speed = (props[attr] - cur) / time;

                //5.处理运动值，因为小数添加无效 （parseInt）
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

                //4.清除定时器
                if (cur != props[attr]) {
                    tag = false;
                }

                //1.运动div
                if (attr == "opacity") {
                    elem.style[attr] = (cur + speed) / 100;
                } else {
                    elem.style[attr] = cur + speed + "px";
                }
            }


            //9.获得结论
            if (tag == true) {
                clearInterval(elem.timer);
                callback && callback();
            }
        }, 30);
    }

     /* 
    *作用:ajax请求后台数据
    *@parm {object} reqs：请求参数对象
    */
    function ajax(reqs) {
        //1.创建请求对象
        var xhr = new XMLHttpRequest();

        //2.建立连接
        if (reqs.type.toLowerCase() === "get") { //不区分大小写
            //get请求如果没有请求参数但是在后面拼接，请求不到数据
            //如果有请求参数，就拼接，没有就不拼
            var url = reqs.data ? reqs.url + "?" + reqs.data : reqs.url;
            xhr.open("GET", url , true);
            //发送请求
            xhr.send();
        } else {
            xhr.open("POST", reqs.url, true);
            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            xhr.send(reqs.data);
        }

        //4.监听结果
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                     //reqs.success(eval(("("+xhr.responseText+")")));
                     reqs.success(JSON.parse(xhr.responseText));
                }
            }
        }
    }

    return {
        getId:getId,
        getStyle:getStyle,
        move:move,
        getRandom:getRandom,
        fillZero:fillZero,
        bind:bind,
        unbind:unbind,
        mousescroll:mousescroll,
        bufferMove:bufferMove,
        ajax:ajax
    }
})();
