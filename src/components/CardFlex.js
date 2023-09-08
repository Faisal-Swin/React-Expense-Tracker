import "./CardFlex.css";

function CardFlex (props) {

const classes = "cardflex " + props.className;

return (
    <div className={classes}> {props.children} </div>




)


}

export default CardFlex;