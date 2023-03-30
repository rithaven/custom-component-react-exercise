

const Button = (props) => {
    const handleClick = () => {
        alert('You clicked on '+props.name);
      };
  return (
    <div>
     <button onClick={handleClick} className="p-2 font-bold bg-gray-200">
         {props.name}
     </button>
    </div>
  )
}

export default Button