import Button from "./Button"
const Header = ({title, onAdd, showAdd}) => {
  
  return (
    <header>
        <h1 className="header">{title}</h1>
        <Button 
          onClick={onAdd}
          color={showAdd ? 'FireBrick' : 'ForestGreen'} 
          text={showAdd ? 'Close' : 'Add'} />
    </header>
  )
}

// Header.defaultProps = {
//     title: "Task Tracker"
// }

// Header.propTypes = {
//     title: PropTypes.string, //makes it have to be a string
//     title: PropTypes.string.isRequired, //makes it required

// }

// const headingStyle = { //css in JS option for dynamic styling
//     color: 'white',
//     backgroundColor: 'grey',
// }
export default Header