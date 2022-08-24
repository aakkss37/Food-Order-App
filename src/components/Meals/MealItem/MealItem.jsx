import css from "./MealItem.module.css"

const MealItem = (props) => {
        // const price =  props.price.toFixes(2);
        return <li className={css.meal}>
                <div>
                        <h3>{props.name}</h3>
                        <div className={css.description}>{props.description}</div>
                        <div className={css.price}>${props.price}</div>
                </div>
                <div>
                        <input type="number" minLength={1} maxLength={5} step={1}  size={3}/>
                </div>
        </li>
}
export default MealItem