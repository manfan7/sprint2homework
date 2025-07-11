import s from './Loader.module.css'

export const Loader = () => {
   return (

   <div className={s.loader}>
       <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
           <circle
               cx="45"
               cy="45"
               r="40"
               stroke="rgba(81, 45, 228, 0.2)"
               strokeWidth="8"
               fill="none"
           />
           <circle
               cx="45"
               cy="45"
               r="40"
               stroke="#512DE4"
               strokeWidth="8"
               fill="none"
               strokeLinecap="round"
               strokeDasharray="251"
               strokeDashoffset="100"
               transform="rotate(-90 45 45)"
           >
               <animateTransform
                   attributeName="transform"
                   type="rotate"
                   from="0 45 45"
                   to="360 45 45"
                   dur="1.5s"
                   repeatCount="indefinite"
               />
           </circle>
       </svg>
    </div>)
}
