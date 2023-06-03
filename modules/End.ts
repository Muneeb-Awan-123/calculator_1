import figlet from 'figlet';
import gradient from "gradient-string";

function End(){
    const msg = 'Thanks ! ! !';
    figlet(msg,(err,data)=>{
        console.log(gradient.pastel.multiline(data))
    })
}

export default End;