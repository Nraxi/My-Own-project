import '../css/App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { useEffect } from 'react';

import { useStates } from '../../utilities/states.js';

import { factory } from '../../utilities/FetchHelper';


import Startsida from './Startsida'
import Shop from './Shop';
import Checkout from './checkout';
import Errorpage from './Errorpage';
import NavMenu from '../../Nav-bar/navMenu';
import Varukorg from './Varukorg';
import Produktsida from './Produktsida';
import Beställning from './Beställning';
import Backoffice from './Backoffice';
import Edit from './Edit';

const { produkter: Product, produktkategorier: Category } = factory;



function App() {

  let s = useStates('main', {
    products: [],
    categories: [],
    chosenCategoryId: 0,
    cartContents: []
  });

  useEffect(() => {
    (async () => {
      // get the categories from the db
      s.categories = await Category.find();
      // get the products from the db
      s.products = await Product.find();

      console.log(s.products);
      console.log(s.categories);

    })();
  }, []);

  return (s.products.length === 0 ? null :


    <Router>
      <NavMenu />
      <Routes>
        <Route path="/" element={<Startsida />} />
        <Route path='/Shop' element={<Shop />} />

        <Route path='/Produktsida' element={<Produktsida />} />
        <Route path='/Varukorg' element={<Varukorg />} />
        <Route path='/Beställning' element={<Beställning />} />
        <Route path='/Checkout' element={<Checkout />} />
        <Route path='/Backoffice' element={<Backoffice />} />
        <Route path='/Backoffice/Edit' element={<Edit />} />
        <Route path='*' element={<Errorpage />} />
      </Routes>
    </Router>

  )
}

export default App
