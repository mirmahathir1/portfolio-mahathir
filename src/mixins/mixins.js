export const firebasePath=(arrayOfDirectory)=>{
    let returnPath = "";

    let storageURL="https://firebasestorage.googleapis.com/v0/b/portfolio-mahathir.appspot.com/o";
    // let token = "?alt=media&token=0b332a20-b21e-4561-b987-df072318389d";
    let token = "?alt=media";

    returnPath+=storageURL;

    arrayOfDirectory.forEach((value,index)=> {
        if (index === 0) {
            returnPath += ('/' + value);
        } else {
            returnPath += ('%2F' + value);
        }
    })

    returnPath+=token;
    return returnPath
};