import React from 'react';
import { useNavigate } from 'react-router-dom'

function SignUp(props) {

    const navigate = useNavigate()
    return (

        <div>
            <div className='container' >
                <div class="col d-flex justify-content-center" >
                    <form className='mt-5 bg-light p-5'>

                        <div class="form-outline mb-4">
                            <label class="form-label" for="form2Example1">Email address</label>
                            <input type="email" id="form2Example1" class="form-control" style={{ width: '100%' }} />

                        </div>


                        <div class="form-outline mb-4">
                            <label class="form-label" for="form2Example2">Password</label>

                            <input type="password" id="form2Example2" class="form-control" style={{ width: '100%' }} />
                        </div>

                        <div class="row mb-4">
                            
                                <div class="form-check d-flex justify-content-center">
                                    <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                                    <label class="form-check-label" for="form2Example31"> Remember me </label>
                                </div>
                      </div>
                        
                        <div class="col d-flex justify-content-center">
                            <button type="button" class="btn btn-primary btn-block mb-4" onClick={()=>{navigate('/home')}}>Sign Up</button>
                
                        </div>
            </form>
            </div>
        </div>
        </div >
    
    
    );
}

export default SignUp;