import React from 'react'
import './Ghana.css'
import { Link } from 'react-router-dom'
import Video from '../Images/VideoIcon.svg'
import LinkedIn from '../Images/LinkedIn.svg'
import Instagram from '../Images/Instgram.svg'
import YouTube from '../Images/YouTube.svg'
import Mail from '../Images/Mail.svg'

import Koko from '../Images/Koko.svg'
import Lipalater from '../Images/Lipalater.svg'
import Paycloud from '../Images/Paycloud.svg'
import Solar from '../Images/Solar.svg'


import Img1 from '../Images/Img1.svg'
import Img2 from '../Images/Img2.svg'
import Img3 from '../Images/Img3.svg'
import Img4 from '../Images/Img4.svg'
import Img5 from '../Images/Img5.svg'
import Img6 from '../Images/Img6.svg'

import Advisory from '../Images/Advisory.svg'
import Bank from '../Images/Bank.svg'
import Investment from '../Images/Investment.svg'


function Ghana() {
    return (
        <div>


            <header className='GhanaParent'>

                <div className='container'>

                    <div className='GhanaMainContainer'>

                        <h6>Wecome to Ghana</h6>
                        <h3>Emerging in the #3 ranked SMME market in Africa </h3>
                        <p>Platform Capital South Africa was officially launched in 2021 to provide a solution to the growing demand for structure and funding for SMME’s. We plan to capitalize on this fast growing market.</p>


                        <div className='GhanaButton'>

                            <button>
                                <Link to=''>
                                    Learn more about us
                                </Link>
                            </button>


                        </div>



                        <div className='GhanaVideoClick'>
                            <div className='GhanaSubVid1'>
                                <Link to="">
                                    <img src={Video} alt='' />
                                </Link>
                            </div>
                            <div className='GhanaSubVid2'>
                                <p>Watch video</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='GhanaSocialMediaHandles'>
                    <Link to=''>
                        <img src={LinkedIn} alt='' /></Link>
                    <Link to=''>
                        <img src={Instagram} alt='' />
                    </Link>
                    <Link to="">
                        <img src={Mail} alt='' />
                    </Link>
                    <Link to="">
                        <img src={YouTube} alt='' />
                    </Link>

                </div>

            </header>


            <div className='Ghana2GeneralConatiner'>

                <div className='container'>

                    <div className='Ghana2MainContainer'>

                        <div className='Ghana2Children1'>
                            <h2>$1BN+</h2>
                            <p>Portfolio Valuation</p>
                        </div>

                        <div className='Ghana2Children'>
                            <h2>123+</h2>
                            <p>Portfolio companies</p>
                        </div>

                        <div className='Ghana2Children'>
                            <h2>60+</h2>
                            <p>Employees</p>
                        </div>

                        <div className='Ghana2Children'>
                            <h2>9</h2>
                            <p>Sector Verticals</p>
                        </div>

                    </div>
                </div>
            </div>


            <div className='container'>
                <div className='Ghana3MainContainer'>
                    <h6>Regional Partners</h6>
                    <h3>Our diverse footprint covers key industries across the continent</h3>
                </div>

            </div>


            <div className='container'>

                <div className='Ghana4MainContainer'>
                    <img src={Koko} alt='' />
                    <img src={Lipalater} alt='' />
                    <img src={Paycloud} alt='' />
                    <img src={Solar} alt='' />
                </div>

            </div>



            <div className='container'>
                <div className='Ghana5MainContainer'>
                    <div className='Ghana5MainParent'>
                        <h6>Recent Activities</h6>
                        <h3>Our preliminary work is underway in Ghana</h3>
                    </div>


                    <div className='Ghana5GrandPa'>

                        <div className='Ghana5Parent'>
                            <img src={Img1} alt='' />

                            <div className='Ghana5ParentButtonn'>
                                <button><Link to="">Social Impact </Link></button>
                            </div>



                            <h6>Unicorn Incubation hub launch in Ghana</h6>
                            <p>27 November, 2020 - 7 mins read</p>
                        </div>

                        <div className='Ghana5Parent1'>
                            <img src={Img2} alt='' />


                        

                            <div className='Ghana5ParentButtonn1'>
                                <button><Link to="">Technology  </Link></button>
                            </div>





                            <h6>World Health Day Ghana</h6>
                            <p>27 November, 2020 - 7 mins read</p>
                        </div>

                        <div className='Ghana5Parent2'>
                            <img src={Img3} alt='' />



                            <div className='Ghana5ParentButtonn2'>
                                <button><Link to="">Health care  </Link></button>
                            </div>


                            <h6>Unicorn Incubation Cohorts 2021</h6>
                            <p>27 November, 2020 - 7 mins read</p>
                        </div>

                        <div className='Ghana5Parent3'>
                            <img src={Img4} alt='' />


                    

                            <div className='Ghana5ParentButtonn3'>
                                <button><Link to="">Social Impact  </Link></button>
                            </div>





                            <h6>Virtuous Pads gives female hygiene pads to 337 girls at Rev. Cobbah Yalley Junior High | CSR and Philanthropy in Ghana.</h6>
                            <p>27 November, 2020 - 27 November, 2020</p>
                        </div>

                        <div className='Ghana5Parent4'>
                            <img src={Img5} alt='' />




                            <div className='Ghana5ParentButtonn4'>
                                <button><Link to="">Social Impact  </Link></button>
                            </div>

                            <h6>Platform Capital SA celebrates World Health Day by distributing menstrual hygiene products to vulnerable girls in the community</h6>
                            <p>27 November, 2020 - 7 mins read</p>
                        </div>

                        <div className='Ghana5Parent5'>
                            <img src={Img6} alt='' />


                       

                            <div className='Ghana5ParentButtonn5'>
                                <button><Link to="">Social Impact  </Link></button>
                            </div>
                            <h6>Platform Capital SA celebrates World Health Day by distributing menstrual hygiene products to vulnerable girls in the community</h6>
                            <p>27 November, 2020 - 7 mins read</p>
                        </div>
                    </div>
                </div>
            </div>






            <div className='container'>

                <div className='Ghana6GeneralContainer'>
                    <div className='Ghana6MainContainer'>
                        <h6>WHAT WE DO</h6>
                        <h3>Our Investment Thesis</h3>
                        <p>We cover three key areas which are Principal Investments, Advisory and Investment Fiduciary.</p>
                    </div>


                    <div className='Ghana6Parent'>

                        <div className='Ghana6Children'>
                            <img src={Advisory} alt='' />
                            <h5>Principal Investment</h5>
                            <p>We provide long-term capital to our investee companies, and work with them to achieve set goals. Long-term capital offers stability to the business, and allows entrepreneurs to focus on delivering the vision.</p>
                        </div>

                        <div className='Ghana6Children'>
                            <img src={Investment} alt='' />
                            <h5>Advisory</h5>
                            <p>Our holistic approach towards identifying opportunities, structuring, negotiations, capital raise and active management makes us a unique partner across all our engagements.</p>
                        </div>


                        <div className='Ghana6Children'>
                            <img src={Bank} alt='' />
                            <h5>Investment Fiduciary</h5>
                            <p>We leverage our senior leadership team’s experience across multiple sectors and geographies coupled with our investpreneurship skillset to manage third-party businesses and assets as fiduciaries.</p>
                        </div>
                    </div>

                </div>


            </div>














































        </div>
    )
}

export default Ghana