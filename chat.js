var Chatusers = (function () {

    function Chatusers() {
    	 this.STATUS_ON=1001;
    	 this.STATUS_AWAY=2002;
         this.STATUS_OFF=3003;
    }
//This is a test change for github.
//CHange 2.
    function User() {
        this.name = "";
        this.status = 3003;
    }

    Chatusers.prototype.AjaxConnect = {

        connect: function (url, data, Respfn) {
            var request = this.getRequest();

            request.open(data == null ? "GET" : "POST", url, false);
            
            if(data!=null)
            request.setRequestHeader('Content-Type','application/x-www-form-urlencoded; charset=UTF-8');

            request.onreadystatechange = function () {
                if (request.readyState == 4) {
                    if (request.status == 200) {
                       Respfn(eval('(' + request.responseText + ')'));
                    } else alert("Request status is " + request.status);
                }
            };
            request.send(data);
        },
        getRequest: function () {
            var request = null;
            try {
                request = new XMLHttpRequest();
            } catch (trymicrosoft) {
                try {
                    request = new ActiveXObject("Msxml2.XMLHTTP");
                } catch (othermicrosoft) {
                    try {
                        request = new ActiveXObject("Microsoft.XMLHTTP");
                    } catch (failed) {
                        request = false;
                    }
                }
            }
            return request;
        }

    };

    Chatusers.prototype.userUtil = (function () {
        function UserUtil() {
            userList = new Array();

        }
        userUtil = new UserUtil();


        UserUtil.prototype.sortByStatus = function () {
            userUtil.userList.sort(function (a, b) {
                var nameA = a.status,
                    nameB = b.status;
                    if(a.status==b.status){
                        if (nameA < nameB) return -1;
                        if (nameA > nameB) return 1;
                        return 0;
                    }else  if(a.status<b.status){
                    	return -1;
                    }else if(a.status>b.status){
                    	return 1;
                    }
            });
        }
       
        UserUtil.prototype.sortByName = function () {
            userUtil.userList.sort(function (a, b) {
                var nameA = a.name.toLowerCase(),
                    nameB = b.name.toLowerCase();
                if(a.status==b.status){
                    if (nameA < nameB) return -1;
                    if (nameA > nameB) return 1;
                    return 0;
                }else  if(a.status<b.status){
                	return -1;
                }else if(a.status>b.status){
                	return 1;
                }
            });
        }
        UserUtil.prototype.getUsers = function () {
            return userUtil.userList;
        }
        UserUtil.prototype.setUserList = function (userList) {
            userUtil.userList = userList;
        }
        UserUtil.prototype.createNewUserObj = function () {

            return new User();
        };
        UserUtil.prototype.converToUserList = function (data) {

            if (data.users != null) {
                for (i = 0; i < data.users.length; i++) {
                    var user = userUtil.createNewUserObj();

                    user.name = data.users[i].name;
                    user.status = data.users[i].status;

                    var userlenth = userUtil.getUsers().length;
                    userUtil.getUsers()[userlenth] = user;
                }
            }


        }

        return userUtil;
    }());
    
    Chatusers.prototype.Timer=(function(){
      function Timer(){
	   
      }
      Timer.prototype.start=function(fn,delay){
    	  return setInterval(fn, delay);
      }
       Timer.prototype.stop=function(id){
    	   clearInterval(id);
      }
    	return new Timer();
    }());
        

    return new Chatusers();
    
}());

