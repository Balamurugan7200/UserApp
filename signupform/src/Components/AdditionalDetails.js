import React from 'react'

function AdditionalDetails() {
  return (
    <div>
       <div>
      <section class="vh-100">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div class="card ">
                <div class="card-body">
                  <h3 class="mb-5">AdditionalDetails</h3>
                  <div>
                    <label className='pe-5  me-4'>Age : </label>
                    <input type='text'></input>
                  </div>
                  <div className='mt-3'>
                    <label className='pe-5 me-3'>Gender: </label>
                    <input type='text'></input>
                  </div>
                  <div className='mt-3'>
                    <label className='pe-5 me-4'>Date of Birth : </label>
                    <input type='date'></input>
                  </div>
                  <div className='mt-3'>
                    <label className='pe-5'>Mobile<br></br> number : </label>
                    <input type='password'></input>
                  </div>
                 <div className='d-flex justify-content-around align-items-center mt-3'>

                 <div className=''>
                 <button ty pe="button" class="btn btn-secondary">Submit</button>
                 </div>
                 <div>
                 <button type="button" class="btn btn-danger ">Login</button>
                 </div>
                 </div>


              
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    
    </div>
  )
}

export default AdditionalDetails