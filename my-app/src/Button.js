function MyButton() {
    function handleClick() {
      alert('Clicked');
    }
  
    return (
      <button onClick={handleClick}>
        Click me
      </button> 
    );
  }
  export default MyButton;