import { FormattedMessage } from "react-intl";
import enMessages from '../translations/en'

export default function Text() {
   return (
         <>
            <p><FormattedMessage id="MESSAGE_WELCOME" values={{ n: "Asish" }} /></p>
            <p><FormattedMessage id="MESSAGE_LEARN" /></p>
            <p>
               <FormattedMessage
                  id="MESSAGE_BUILD"
                  defaultMessage={'Translation Required: ' + enMessages['MESSAGE_BUILD']}
               />
            </p>
         </>
   )
}