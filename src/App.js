import React from "react";
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider} from '@shopify/polaris';
import Login from './user/Login';
 const App = () =>{
   return(
     <div>
       <AppProvider className="sub-main" i18n={enTranslations}>
       <Login/>
       </AppProvider>
     </div>
   );
 }
 export default App;