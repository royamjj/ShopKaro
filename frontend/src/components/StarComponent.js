import ReactStars from "react-rating-stars-component";

function StarComponent({props}){
    return (
        <ReactStars
          size={props.size}
          count={5}
          value={parseFloat(props.rating)}
          starCount={5}
          edit={props.isEditable}
          isHalf={true}
          activeColor="rgb(255, 0, 0)"
        />
    );
}
export default StarComponent;