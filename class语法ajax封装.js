class Http {
    static common({ type = "get", url = "",data = {}, dataType = "json"}) {
        var basUrl = "http:12.12.12.12:5000/api";
        url = `${basUrl}${url}`;
        var p = new Promise((resolve,reject)=>{
            $.ajax({
                url,
                type,
                data,
                dataType,
                success(res){
                    resolve(res);
                },
                error(req){
                    reject(req);
                }
            })
        })
        return p;
    }

    static banner() {
        return this.common({url:"bannerList"})
    }

    static filelis() {
        return this.common({url:"filelis"})
    }
}