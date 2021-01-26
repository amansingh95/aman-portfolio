import React from 'react'

const Education = () => {
    return (
        // <!-- education Section-->
        <section class="page-section bg-primary text-white mb-0" id="education">
        <div class="container">
            {/* <!-- education Section Heading--> */}
            <h2 class="page-section-heading text-center text-uppercase text-white">Education</h2>
            {/* <!-- Icon Divider--> */}
            <div class="divider-custom divider-light">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line"></div>
            </div>
            {/* <!-- education Section Content--> */}
            <div className='row-container'>
            <div class="row">
                <div class="col-lg-4 ml-auto">
                     <div className='star-icon'><i class="fas fa-star"></i>  </div>                         
                    <div className="education-header">
                        Masters Of Computer Applications
                    </div>
                    <p class="education-sub-header">
                       Parul University<br></br>
                       <span className='left-left-education'>2017-2019</span>
                       <span className='left-right-education'>CGPA:-7.78</span>
                    </p>
                    
                </div>
                <div class="col-lg-4 mr-auto">
                <div className='star-icon'><i class="fas fa-star"></i>  </div>  
                    <p class="education-header">
                        Bachelors Of Computer Application
                    </p>
                    <p class="education-sub-header">
                    Veer Narmad South Gujarat<br></br>
                       <span className='left-left-education'>2015-2017</span>
                       <span className='left-right-education'>64.3%</span>
                    </p>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-4 ml-auto">
                <div className='star-icon'><i class="fas fa-star"></i>  </div>  
                    <p class="education-header">
                       H.S.C
                    </p>
                    <p class="education-sub-header">
                    Marothia English Medium School<br></br>
                       <span className='left-left-education'>2013-2014</span>
                       <span className='left-right-education'>68%</span>
                    </p>
                    
                </div>
                <div class="col-lg-4 mr-auto">
                <div className='star-icon'><i class="fas fa-star"></i>  </div>  
                    <p class="education-header">
                       S.S.C
                    </p>
                    <p class="education-sub-header">
                    Marothia English Medium School<br></br>
                       <span className='left-left-education'>2011-2012</span>
                       <span className='left-right-education'>55%</span>
                    </p>
                </div>
            </div>
            </div>
            {/* <!-- education Section Button--> */}
            {/* <div class="text-center mt-4">
                <a class="btn btn-xl btn-outline-light" href="https://startbootstrap.com/theme/freelancer/">
                    <i class="fas fa-download mr-2"></i>
                    Free Download!
                </a>
            </div> */}
        </div>
    </section>
    )
}

export default Education
