import './App.css';
import axios from 'axios'
import { useState, useEffect }  from 'react';
import Search from './components/Search'
import ProductListView from './components/ProductListView'
import EditorView from './components/EditorView'

function App() {

  const [editorModeOn, setEditorModeOn] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
    
  useEffect(() => {
    const getData = async () => {
      const results = await axios.get('/products');
      setProducts(results.data);
      console.log(results.data);
    }
    getData();
},[]); 

  const onItemDelete = (item) => {
    let newProds = [...products];
    let deletedItemIndex = newProds.findIndex(p => p.id === item.id);
    console.log(deletedItemIndex);
      axios.delete('/products/'+newProds[deletedItemIndex].id)
    .then(() => setProducts(newProds));
    newProds.splice(deletedItemIndex, 1);
  }
 


  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }
const handleButtonNameChange = () => {
  if (editorModeOn) {
    return "Toggle User Mode";
  }
  else{
   return "Toggle Admin Mode";
  }
}
let output = <ProductListView products={products} searchTerm={searchTerm}/>;
if (editorModeOn === true ) {
  output = <EditorView products={ products } onItemDelete={ onItemDelete }/>
}

  return (
    <div>
      <button onClick={ () => setEditorModeOn(!editorModeOn) }>{handleButtonNameChange()}</button>
      {editorModeOn === false ? <Search searchValue = {searchTerm} onSearchChange ={handleSearchChange}/> : <h1 className="h1">Admin Mode Toggled</h1>}
      { output }
   </div>
  );
}

export default App;
