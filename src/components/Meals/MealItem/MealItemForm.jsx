import Input from '../../UI/Input';
import { useRef, useState } from 'react';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
        const [amountIsValid, setAmountIsValid] = useState(true)

        const amountInputRef  = useRef()
        const submitHandler = (event)=>{
                event.preventDefault();
                const enteredAmount = amountInputRef.current.value;  // => ref.current.value always return string.
                const enteredAmountNumber = +enteredAmount;          // => to convert it into an integer.
                console.log(enteredAmountNumber)

                if (enteredAmount.trim().length === 0 || enteredAmountNumber > 5 || enteredAmountNumber < 1) {
                        setAmountIsValid(false)
                        return;
                }
                setAmountIsValid(true);
                props.onAddToCart(enteredAmountNumber);
        }

        return (
                <form className={classes.form} onSubmit={submitHandler}>
                        <Input
                                ref={amountInputRef}
                                label='Amount'
                                input={{
                                        id: 'amount',
                                        type: 'number',
                                        
                                        step: '1',
                                        defaultValue: '1',
                                }}
                        />
                        <button type='submit'>+ Add</button>
                        {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
                </form>
        );
};

export default MealItemForm;