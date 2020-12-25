import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these Projects</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="pictures/reactpic.png"
                            text="This is a React project bla bla bla bla bla bla bla bla bla bla"
                            label="React"
                            path="/projects"
                        />
                        <CardItem
                            src="pictures/reactpic.png"
                            text="This is a React project bla bla bla bla bla bla bla bla bla bla"
                            label="React"
                            path="/projects"
                        />
                        
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="pictures/reactpic.png"
                            text="This is a React project bla bla bla bla bla bla bla bla bla bla"
                            label="React"
                            path="/projects"
                        />
                        <CardItem
                            src="pictures/reactpic.png"
                            text="This is a React project bla bla bla bla bla bla bla bla bla bla"
                            label="React"
                            path="/projects"
                        />
                        <CardItem
                            src="pictures/reactpic.png"
                            text="This is a React project bla bla bla bla bla bla bla bla bla bla"
                            label="React"
                            path="/projects"
                        />

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
