import React from 'react'
import Navbar from '../components/Navbar';
import SavedRecipes from '../components/Recipe/SavedRecipes';
import Footer from '../components/Footer';

const SavedRecipesPage = () => {
    return (
        <div>
            <nav>
                <Navbar/>
            </nav>
            <main>
                <SavedRecipes/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
};

export default SavedRecipesPage