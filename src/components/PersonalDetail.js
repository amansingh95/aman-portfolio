import React from 'react'

const PersonalDetail = () => {
    return (
         // <!-- personaldetail Section-->
         <section class="page-section bg-primary text-white mb-0" id="personaldetail">
         <div class="container">
             {/* <!-- personaldetail Section Heading--> */}
             <h2 class="page-section-heading text-center text-uppercase text-white">Personal Details</h2>
             {/* <!-- Icon Divider--> */}
             <div class="divider-custom divider-light">
                 <div class="divider-custom-line"></div>
                 <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                 <div class="divider-custom-line"></div>
             </div>
             {/* <!-- personaldetail Section Content--> */}
             <div className='row-container'>
             <div class="row">
                 <div class="col-lg-4 ml-auto">
                                             
                     <div className="education-header">
                         Name :- Aman Singh
                     </div>
                     
                     
                 </div>
                 <div class="col-lg-4 mr-auto">
                     <p class="education-header">
                         Father Name :- Prem Narayan Singh
                     </p>
                    
                 </div>
             </div>

             <div class="row">
                 <div class="col-lg-4 ml-auto">
                     <p class="education-header">
                         Phone No :- 7041841146
                     </p>

                     <p class="education-header">
                     Marital Status :- Single
                     </p>

                     <p class="education-header">
                     Bload Group :- O+
                     </p>
                     
                     
                 </div>
                 <div class="col-lg-4 mr-auto">
                     <p class="education-header">
                         Mother Name :- Sushila Singh
                     </p>

                     <p class="education-header">
                     Languages :- English, Hindi, Gujarati
                     </p>
                     
                 </div>
             </div>
             </div>
             {/* <!-- personaldetail Section Button--> */}
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

export default PersonalDetail
