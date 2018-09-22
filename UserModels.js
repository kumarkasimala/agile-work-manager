


//User Class

var userTypes=["Dev", "QA", "Manager", "SM", "PO"];

function User(name, Id, emailId, contact, type) {

    var name = name;
    var Id = Id;
    var contact = contact;
    var type = type;

    var age;
    var emailId = emailId;
    var address;
    var photo;

    this.setAge = function(age){
       age = age;
    }

    this.getType = function(){
      return type;
    }

    this.getId = function(){
      return Id;
    }

    this.getName = function(){
      return name;
    }

    this.getContact = function(){
         return contact;
    }
}

function Employee(name, Id, emailId, contact, type){ 
   User.call(this, name, Id, emailId, contact, type);
}

Employee.prototype = Object.create(User.prototype);
Employee.prototype.constructor = User;


function DevEngineer(name, Id, emailId, contact){
    Employee.call(this, name, Id, emailId, contact, "Dev");
}

DevEngineer.prototype = Object.create(Employee.prototype);
DevEngineer.prototype.constructor = Employee;

var dev = new DevEngineer("Kumar", 121, "kumark@gmail.com", "129292933");

dev.getType()
dev.setAge(20);

function QaEngineer(name, Id, emailId, contact){
  Employee.call(this, name, Id, emailId, contact, "QA");
}

QaEngineer.prototype = Object.create(Employee.prototype);
QaEngineer.prototype.constructor = Employee;

function Manager(name, Id, emailId, contact){
Employee.call(this, name, Id, emailId, contact, "Manager");
}
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Employee;

//Suraj [QA, Manager], Sandeep : SM, PO.



