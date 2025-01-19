import { FormattedNumber } from "react-intl";

export default function Number() {
   return (
      <>
         <p>
            <FormattedNumber
               value={100}
            />
         </p>
         <p>
            <FormattedNumber
               value={100.00}
               style="currency"
               currency="USD"
            />
         </p>
      </>
   )
}