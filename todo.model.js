

class Todo{
    constructor(id, name, password){
        this.id=id;
        this.name=name;
        this.password=password;
        this.status="process";
        this.created_at=new Date();
    }
}

module.exports=Todo