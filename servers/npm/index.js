module.exports = class person{
    constructor(f,l,a){
        this.fname = f
        this.lname = l
        this.age = a
    }
    fullName() {
        return this.fname + " " + this.lname
    }
}
