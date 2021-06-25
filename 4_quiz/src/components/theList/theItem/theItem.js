function theItem(props) {
    return (
      <li onClick={() => props.itemClickHundler(props.children)}>{props.children}</li>
    );
  }
  
  export default theItem