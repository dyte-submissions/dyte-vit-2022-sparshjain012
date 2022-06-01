
module.exports={
    set_output:(current_version,version,answer)=>{
        const structDatas = [
            { CurrentVersion: current_version, Required_Version: version, Updated: answer }
        ];
        console.table(structDatas);
    }
    
};

