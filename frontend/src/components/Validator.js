export default function Validator({props}){
    return (
        <div className={props.className} style={{backgroundColor:props.backcolor, color:props.color}}>
            {props.message}
        </div>
    );
}