import React from 'react';
import { useLanguage } from '../context/Language';

export default function LanguageDropdown() {
   const { setLocale } = useLanguage();

   return (
      <select onChange={e => setLocale(e.target.value)}>
         <option value="en">English</option>
         <option value="hi">हिंदी</option>
         <option value="fr">Français</option>
         <option value="bn">Bengali</option>

      </select>
   )
}