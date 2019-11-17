import React from 'react';
import './App.css';
import Header from './Components/Header';
import ClusteringVisualizer from './Components/ClusteringVisualizer';

function App() {
  return (
	  <div className="App">
		  <Header />
		  <ClusteringVisualizer />
    </div>
  );
}

export default App;
