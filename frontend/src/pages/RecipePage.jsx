import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Recipe from '../components/Recipe/Recipe';
const RecipePage = () => {
    return (
        <div>
            <nav>
                <Navbar />
            </nav>
            <main>
                <Recipe/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
        
    )
};

export default RecipePage