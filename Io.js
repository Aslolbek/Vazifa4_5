const fs=require("fs").promises

class Io{

    constructor(dir){
        this.dir=dir;
    }

    async red(){
        let data = await fs.readFile(this.dir, "utf-8")
        return data ? JSON.parse(data) : []
    }

    async write(data)
    {
        await fs.writeFile(this.dir, JSON.stringify(data, null, 2))
    }
}

module.exports=Io 