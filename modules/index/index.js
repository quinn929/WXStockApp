/**
 * Created by cj on 2016/1/9.
 * 首页
 */
const app = getApp();
const _const = require("../../common/const.js").const;
const {dateUtil} = require("../../common/utils.js");
var httpUtil = require('../../common/http.js').http
var convert = require('../../common/convert.js')
const page = {
    data: {
        "myHome":"../my/index",
        "winHeight": app.globalData.systemInfo.windowHeight,//窗体高度
        "indicatorDots": "true",//是否显示底部状态
        "autoplay": "true",
        "interval": 5000,//自动切换时间间隔
        "duration": 1000, //动画时长
        "noteList": [],//精选笔记
        "questionList": [],//精选问股
        "courseList": [],//精选课程
        "topicList": [],//专题列表
        "bigButton":{},//首页大按钮
        "ads":{},//广告
        "buttons":{},//按钮
        "hotOneItem":{},//热点 最热
        "hotTwoItem":{},//热点 其他
        "recommend":{},//精彩推荐
    },
    onLoad: function () {
        this.getData();
    },
    getData: function () {
        this.getSet()
        this.getHot()
    },
    getSet: function () {//首页主题数据
        var that = this
        let params = {
            position: 100101
        }
        httpUtil.get(_const.url.index_set, params).then(function (res) {
            if (res.errcode == 0){
                convert.convertActionAry(res.data.ads)
                convert.convertActionAry(res.data.buttons)
                convert.convertActionAry(res.data.hots.oneItem)
                convert.convertActionAry(res.data.hots.twoItem)
                convert.convertActionAry(res.data.bigbutuons)
                for(var i=0;i<res.data.bigbutuons.length;i++){
                    res.data.bigbutuons[i].profile = (res.data.bigbutuons[i].profile).replace('<br />','\r\n').replace('<br/>','\r\n')
                }
                that.setData({
                    bigButton:res.data.bigbutuons,
                    ads:res.data.ads,
                    buttons:res.data.buttons,
                    hotOneItem:res.data.hots.oneItem,
                    hotTwoItem:res.data.hots.twoItem
                })
            }
        }.bind(this))
    },
    getHot:function () {
        var that = this
        let params = {}
        httpUtil.get(_const.url.index_hot, params).then(function (res) {
            if (res.errcode == 0){
                for(var i=0;i < res.data.length;i++){
                    if(res.data[i].hotcontents != null && res.data[i].hotcontents.length > 0 && res.data[i].hotcontents[0].create_time != null){
                        res.data[i].hotcontents[0].create_time = dateUtil.getAdjustDate(res.data[i].hotcontents[0].create_time,"-",false)
                    }
                }
                that.setData({
                    recommend: res.data
                })
            }
        }.bind(this))
    }
}
//注册页面
Page(page);
