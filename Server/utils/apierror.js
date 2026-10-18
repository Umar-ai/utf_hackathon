class apierror extends Error{
    constructor(statuscode,message,error=[]){
        super(message)
        this.statuscode=statuscode
        this.message=message
        this.error=error

    }
}
export {apierror}