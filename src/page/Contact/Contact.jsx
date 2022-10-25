import React from "react";
import Button from "../../Button/Button";
import './Contaxt.scss'

const Contact = () => {
    return(
        <div className="contact-page">
            <h2>This Is Contact Page</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum aspernatur quam eaque ex assumenda placeat eum ullam voluptate corporis, doloremque quaerat illum temporibus perferendis recusandae deleniti, esse animi ab quibusdam.</p>
            <Button 
                btnText="Contact Page"
            />
        </div>
    )
}
export default Contact;