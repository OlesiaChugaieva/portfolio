import React from 'react'

import "./Home.css"

const Home = () => {

    const handleHireMe = () => {
        window.location = "https://docs.google.com/document/d/1XCTGtGa-k19DwnL2e0TbNQhJgXP6E1YG/edit"
    }
    return (
        <section id="home">
            <div class="main">
                <h1 className="headings">Hi, I am Olesia Chugaieva<br /> web developer</h1>
                <button className="btn" onClick={handleHireMe}>
                Let's Work Together
                </button>
            </div>
        </section>
    )
}

export default Home
