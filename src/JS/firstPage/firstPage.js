require(["jquery","underscore","Backbone"],
    function($,_,Backbone){
        var AppView = Backbone.View.extend({
            el:$("body"),
            events: {
                "click li":"checkIn",
            },
            initialize: function () {
                
            },
            render:function(){
                
            },
            checkIn:function(e){
                switch(e.target.innerText)
                {
                    case "首页":this.firstPage();
                    break;
                    case "分类":this.classification();
                    break;
                    case "发布":this.release();
                    break;
                    case "消息":this.message();
                    break;
                    case "我的":this.myHome();
                    break;
                    default:
                }
            },
            firstPage:function(){
                console.info(1)
            },
            classification:function(){
                console.info(2)
            },
            release:function(){
                console.info(3)
            },
            message:function(){
                console.info(4)
            },
            myHome:function(){
                console.info(5)
            }

        });
        //实例化AppView
        var appview = new AppView;

        var AppRouter = Backbone.Router.extend({
            el:$("body"),
            routes : {
                'firstPage' : 'firstPage',
                'classification' : 'classification',
                'Release' : 'Release',
                'message' : 'message',
                'myhome' : 'myhome'

            },  
            firstPage : function() {
            
            },
            classification : function() {
            
            },
            Release : function() {
            
            },
            message : function() {
            
            },
            myhome : function(){
            
            }
        });
          
        var router = new AppRouter();
        Backbone.history.start();
})

