export const addData =(req, res)=>{
    console.log(req.body);
    
}

export const getdatabynum =(req, res)=>{
    console.log(req.params);
    
}

export const getdatabyquery =(req, res)=>{
    console.log(req.query);
    
}

export const getdatabyheader=(req, res)=>{
    console.log(req.headers);
    
}
