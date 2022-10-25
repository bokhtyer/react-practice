import React from "react";
import Button from "../../Button/Button";
import './About.scss'

const About = () => {
    return(
        <div className="about-page">
            <h2>This Is About Page</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum aspernatur quam eaque ex assumenda placeat eum ullam voluptate corporis, doloremque quaerat illum temporibus perferendis recusandae deleniti, esse animi ab quibusdam.</p>
            <Button 
                btnText="About Page"
            />
        </div>
    )
}
export default About;