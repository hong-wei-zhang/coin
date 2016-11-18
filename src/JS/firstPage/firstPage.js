require(["jquery","underscore","Backbone"],
    function($,_,Backbone){
        var firstPageView = Backbone.View.extend({
            el:$("body"),
            events: {
                "click li":"checkIn",
            },
            initialize: function () {
                // var width = this.$("#img_width").width();
                // this.$(".row_classification_css").find("li").css("height",width+"px"); 
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
                this.xx.save(null,{
                    success:function(response) {
                        console.info(response)
                    }
                })
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
                console.info (45)
                if(this.$(".film").hasClass("filmhover")){
                    this.$(".film").removeClass("filmhover")
                } else {
                    this.$(".film").addClass("filmhover")
                }
                console.info(33)
            }
        });
        //实例化AppView
        var firstPageView = new firstPageView;

        var firstPageRouter = Backbone.Router.extend({
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
        // 实例化AppRouter
        var firstPageRouter = new firstPageRouter();
        Backbone.history.start();

        var firstPageModel = Backbone.Model.extend({
            url:"../PHP/hello.php",
        })
        // var xx = new firstPageModel();
        // xx.save({id:"1"});
})

