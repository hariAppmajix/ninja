import React from "react";
import styles from "./SocialIcons.module.css";
import { ImLinkedin2 } from "react-icons/im";
import { RiTwitterFill } from "react-icons/ri";
import { RiFacebookFill } from "react-icons/ri";
import { FaBookmark } from "react-icons/fa";
import { RiShareForwardFill } from "react-icons/ri";

function SocialIcons() {
  return (
   <div className={styles.social_container}>
       <ul className={styles.social_icons}>
           <li>
               <a href="">
                <ImLinkedin2 />   
               </a>
            </li>
           <li>
               <a href="">
                <RiTwitterFill />   
               </a>
           </li>
           <li>
              <a href="">
                <RiFacebookFill />   
               </a>
           </li>
           <li>
              <a href="">
                <FaBookmark />   
               </a>
           </li>
       </ul>

       <div className={styles.mobile_share}>
           <RiShareForwardFill/>
       </div>
   </div>
  );
}

export default SocialIcons;

