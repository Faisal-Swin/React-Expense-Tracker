import "./style.css";
import CardFlex from "./CardFlex";

function Flexbox () {

    return  (
    <CardFlex className="container">
    <h1>Flexbox</h1>
      <div className="box-container">
        <CardFlex className="box" id="box-1">box 1</CardFlex>
        <div className="noborder">white</div>
        <div className="box" id="box-2">box 2</div>
        <div className="noborder">white</div>
        <div className="box">box 1</div>
        <div className="noborder">white</div>
        <div className="box">box 1</div>
        <div className="noborder">white</div>
        <div className="box">box 2</div>
      </div>
    </CardFlex>
    );

}

export default Flexbox;
