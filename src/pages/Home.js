import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/product-List/ProductList";
 function Home() {
    return ( 
        <div className="App">
            <NavBar>
            <ProductList></ProductList>
            </NavBar>
        </div>
     );
}

export default Home;
