import React, { useRef } from 'react'
import Input from '../UI/Input'
// import Button from './Button'
import style from './form.module.css'
export default function Mealitemform(props) {
  const refs=useRef();
  const subs=(event)=>{
    event.preventDefault();
    const rd=refs.current.value;
    const tonum=+rd;
    props.addto(tonum);
  }
  return (<form className={style.form} onSubmit={subs}>
   <Input ref={refs} label="Amount" input={{
          id:'amount',
          type:'number',
          min:'1',
          max:'5',
          step:'1',
          defaultValue:'1'
   }}/>
    <button>Add</button>
  </form>

  )
}
