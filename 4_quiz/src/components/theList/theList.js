import TheItem from "./theItem/theItem"

function theList(props) {
    return (
      
      <ul className="main__container">
         {props.answers.map((item,index) => <TheItem itemClickHundler={props.itemClick} id={index} key={index}>{item}</TheItem> )}
      </ul>
    );
  }
  
  export default theList