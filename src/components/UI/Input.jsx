import css from "./Input.module.css"

const Input = (props)=>{
        return <div className={css.input}>
                <label htmlFor={props.input.id}>{props.lable}</label>
                <input type={props.type} {...props.input} />
        </div>
}
export default Input