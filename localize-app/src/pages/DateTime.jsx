import { FormattedTime } from "react-intl";

export default function DateTime() {
   return (
      <p>
         <FormattedTime
            value={new Date()}
            hour="numeric"
            minute="numeric"
            second="numeric"
            timeZoneName="long"
         />
      </p>
   )
}