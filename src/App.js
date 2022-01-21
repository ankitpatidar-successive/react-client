import React from "react";
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider} from '@shopify/polaris';
import Routers from "./route/router";
 const App = () =>{
   return(
     <div>
       <AppProvider className="sub-main" i18n={enTranslations}>
        
        <Routers/>
       </AppProvider>
     </div>
   );
 }
 export default App;
