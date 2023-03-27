import React, {useState,useEffect} from "react"
import FormAddForm from "./form/FormAddForm";
import "./addForm.scss"


const AddForm = () => {
    const [isDisplay, setIsDisplay] = useState(false)
    const [isDisplayRegulations, setIsDisplayRegulations] = useState(false)


    const openForm = ()=> {
        setIsDisplayRegulations(true)
        setIsDisplay(true)
    }
    const closeForm = () => {
        setIsDisplayRegulations(false)
        setIsDisplay(false)
    }


    return (
        <section className={"addVehicle-form"}>
                <h2>Earn with US!, Add u car!</h2>

            <section className={isDisplayRegulations ? "regulations hide" : "regulations"}>
                <h3>Regulations for adding a car to our vehicle fleet  EARN MONEY WITH US!</h3>

                <ul className={"regulations-list"}>
                    <li>We charge 10% on every transaction</li>
                    <li>If you fail to fulfill the contract with the customer, a fine of 1000 euros is imposed on you</li>
                    <li>You must have an additional courtesy car in case of breakdown</li>
                    <li>After accepting the contract online, we will send you the contract by e-mail.</li>
                </ul>

                <button onClick={openForm} className={"add_you_car"}>Add your car</button>

            </section>

               <section className={isDisplay ? "regulationsForm show" : "regulationsForm"}>
                   <i onClick={closeForm} className="fa-solid fa-xmark"></i>
                   <FormAddForm closeForm={closeForm}/>
               </section>


        </section>
    )
}
export default AddForm;