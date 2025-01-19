import { useState, useContext, createContext } from 'react';
import { IntlProvider } from 'react-intl';
import en from '../translations/en'
import hi from '../translations/hi'
import fr from '../translations/fr'
import bn from '../translations/bn'

const LanguageContext = createContext({})

export const LanguageWrapper = ({ children }) => {
   const [locale, setLocale] = useState('en')

   const messages = { en, hi, fr,bn }

   return (
      <IntlProvider defaultLocale='en' locale={locale} messages={messages[locale]}>
         <LanguageContext.Provider value={{ setLocale }}>
            {children}
         </LanguageContext.Provider>
      </IntlProvider >
   );
};

export const useLanguage = () => useContext(LanguageContext)