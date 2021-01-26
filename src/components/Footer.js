import React from 'react'
import { Fragment } from 'react';

const Footer = () => {
    return (
        <Fragment>
        {/* // <!-- Footer--> */}
        <footer class="footer text-center">
            <div class="container">
                <div class="row">
                    {/* <!-- Footer Location--> */}
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h4 class="text-uppercase mb-4">Location</h4>
                        <p class="lead mb-0">
                           Feeder CD-16, Unique Nagar
                            <br />
                            Vapi, 396191 
                        </p>
                    </div>
                    {/* <!-- Footer Social Icons--> */}
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h4 class="text-uppercase mb-4">Contact Links</h4>
                        <a class="btn btn-outline-light btn-social mx-1" target="_blank" href="https://www.facebook.com/aman10111995/"><i class="fab fa-fw fa-facebook-f"></i></a>
                        <a class="btn btn-outline-light btn-social mx-1" target="_blank" href="http://www.twitter.com/AmanSsingh7"><i class="fab fa-fw fa-twitter"></i></a>
                        <a class="btn btn-outline-light btn-social mx-1" target="_blank" href="http://www.linkedin.com/bit.ly/3nXDfwy"><i class="fab fa-fw fa-linkedin-in"></i></a>
                        <a class="btn btn-outline-light btn-social mx-1" target="_blank" href="http://www.amansingh10111995@gmail.com"><i class="fa fa-envelope" aria-hidden="true"></i></a>
                        <a class="btn btn-outline-light btn-social mx-1" target="_blank" href="http://www.bit.ly/3nVX0Ex"><i class="fab fa-stack-overflow"></i></a>
                        <a class="btn btn-outline-light btn-social mx-1" target="_blank" href="skype:live:.cid.1171ea0ed3d1ca94"><i class="fab fa-skype" aria-hidden="true"></i></a>
                        <a class="btn btn-outline-light btn-social mx-1" target="_blank" href="http://www.github.com/amansingh95"><i class="fab fa-github"></i></a>
            
               </div>

                    {/* <!-- Footer About Text--> */}
                    <div class="col-lg-4">
                        {/* <h4 class="text-uppercase mb-4">About Freelancer</h4>
                        <p class="lead mb-0">
                            Freelance is a free to use, MIT licensed Bootstrap theme created by
                            <a href="http://startbootstrap.com">Start Bootstrap</a>
                            .
                        </p> */}
                    </div>
                </div>
            </div>
        </footer>
         {/* <!-- Copyright Section--> */}
         <div class="copyright py-4 text-center text-white">
             <div class="container"><small>Copyright © Aman Portfolio</small></div>
         </div>
         </Fragment>
    )
}

export default Footer
