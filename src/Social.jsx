import React from "react";
import "./components/Social.css";
const Social = () => {
    return (
        <div class="sticky-social">
            <ul class="social">
                <li class="fb"><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li class="twitter"><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                {/* <li class="insta"><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                <li class="pin"><a href="#"><i class="fa fa-youtube" aria-hidden="true"></i></a></li> */}
                <li class="wp"><a href="#"><i class="fa fa-whatsapp" aria-hidden="true"></i></a></li>
                <li class="vim"><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                <li class="call"><a href="#"><i class="fa fa-phone" aria-hidden="true"></i></a></li>
            </ul>
        </div>
    );
};

export default Social;