import React from "react";
import Button from "../../Button/Button";
import './Home.scss'

const Home = () => {
    return(
        <div className="home-page">
            <h2>This Is Home Page</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum aspernatur quam eaque ex assumenda placeat eum ullam voluptate corporis, doloremque quaerat illum temporibus perferendis recusandae deleniti, esse animi ab quibusdam.</p>
            <Button 
                btnText="Home Page"
            />
        </div>
    )
}
export default Home;