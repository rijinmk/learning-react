import { useState } from 'react'; 

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState(''); 
  const [error, setError] = useState(null); 

  const enteredNameHandler = (e) => {
    setEnteredName(e.target.value); 
    enteredName.trim().length < 3 ? setError('Please enter a name') : setError(null); 
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault(); 
    if(enteredName.trim().length < 3){
      setError('Please enter a name'); 
    }
    setEnteredName(''); 
  }

  // const nameOnFocus = () => {
  //   setError(null);
  // }

  const nameOnBlur = () => {
    if (enteredName.trim().length < 3) {
      setError('Please enter a name');
    }
  }

  const formControlClasses = error ? 'invalid' : ''; 

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={`form-control ${formControlClasses}`}>
        <label htmlFor='name'>Your Name</label>
        <input value={enteredName} onBlur={nameOnBlur} /* onFocus={nameOnFocus} */ onChange={enteredNameHandler} type='text' id='name' />
        {error && <p>{error}</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
