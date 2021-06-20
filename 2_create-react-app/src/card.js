function Card(props) {
    return (
      <div style={{color: props.color}}>
          <h1>{props.children}</h1>
      </div>
    );
  }
  
  export default Card;