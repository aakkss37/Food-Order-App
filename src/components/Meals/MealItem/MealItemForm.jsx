import Input from "../../UI/Input"
import css from "./MealItemForm.module.css"

const MealItemForm = (props)=>{
        return <form action="" className={css.form}>
                <Input 
                        type="number" 
                        lable="Amout"
                        input={
                                {
                                        id: 'amount',
                                        min: '1',
                                        max: '5',
                                        step: '1',
                                        defaultValue: '1'
                                }
                        }
                />
                <button>+ Add</button>
        </form>
}
export default MealItemForm