import React, { useEffect } from "react";
import { AppContext } from "./contexts/AppContext";
import { Home, Info, Layaut, SignIn, BigSearch } from "./pages";
import { Route, Routes } from "react-router-dom";
import { ru } from "./lang/lang";
import { GetItems, GetCategory } from "./api/api";
import { Formin , Register} from "./components";

function App() {
  const [nameval,setNameVal] = React.useState('');
  const [language, setLanguage] = React.useState(ru);
  const [category, setCategory] = React.useState('1');
  const [allItem, setAllItem] = React.useState([]);
  const [search, setSearch] = React.useState('');
  
  useEffect(async () => {
    if (category === '1') {
      const result = await GetItems();
      setAllItem([...result]);
    }
    else {
      const result = await GetCategory(category);
      setAllItem([...result]);
    }
  }, [category]);
  return (
    <AppContext.Provider
      value={{
        nameval,setNameVal,
        language,
        setLanguage, category,
        setCategory, setAllItem,
        allItem, search, setSearch
      }}>
      <Routes>
        <Route path="*" element={<Layaut />}>
          <Route index element={<Home />} />
          <Route path="info/:id" element={<Info />} />
          <Route path="signin/*" element={<SignIn />}>
              <Route path='signup' element={<Formin />} />
              <Route path='signup/register' element={<Register />} />
          </Route>
          <Route path="search" element={<BigSearch />} />
        </Route>
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
