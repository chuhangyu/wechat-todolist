//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    todoList: [],
    todoValue: ''
  },
  //事件处理函数
  addTodo: function() {
    var today = new Date();
    var mytime=today.toLocaleString().slice(5,10);
    var todoList = this.data.todoList;
    todoList.push({
      time: mytime,
      things: this.data.todoValue
    })
    this.setData({
      todoList,
    })
  },
  todoinput: function(e){
  },
  deleteItem: function(event){
      var index = event.target.dataset.index;
      var todoList = this.data.todoList;
      todoList.splice(index,1)
      this.setData({
          todoList
      })
  },
  todoChange: function(e) {
    this.setData({
      todoValue:e.detail.value
    })
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
