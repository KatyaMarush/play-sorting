import React from "react";
import '../styles/components/Home.scss';
import SortingVisualizer from "./SortingVisualizer";

const Home: React.FC = () => {
    return (
        <main>
            <h2>Play sorting</h2>
            <p>
                This is a simple web app to play around with sorting algorithms.
            </p>
            <div>
                <button className="cta-button">Explore the algorithms</button>
            </div>
            <SortingVisualizer />
        </main>
    )
}

export default Home;