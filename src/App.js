import './App.css';
import { useForm } from 'react-hook-form'

function App() {

  const {
    register,
    handleSubmit,
    formState: {
      errors
    } 
  } = useForm()

  const onSubmit = data => console.log(data)

  return (
    <div className="container">
      <div className='row'>
        <div className='column'>
          <div className='left-half'>
            <h1>Contact Us</h1>


            <form onSubmit={handleSubmit(onSubmit)}>
            {/* name */}        
            <p className='input-label'> Name *</p>    
            <input
              className='input'
              type='text'
              placeholder="Name"
              {...register("name", {
                required: true,
                maxLength: 80
              })}
            />  
            {errors.name && <span className='error'>
              {errors.name.type === 'required' && 'this field is required'}
              {errors.name.type === 'maxLength' && 'Max Length 80'}

              </span>}



              <p className='input-label'> E-Mail *</p>    
            <input
              className='input'
              type='text'
              placeholder="e-mail"
              {...register("email", {
                required: true,
              })}
            />  
            {errors.email && <span className='error'>
              {errors.email.type === 'required' && 'this field is required'}

              </span>}

              <p className='input-label'> Phone Number </p>    
            <input
              className='input'
              type='text'
              placeholder="phone number"
              {...register("phoneNumber", {
                
              })}
            />  
            {errors.phoneNumber && <span className='error'>

              </span>}


              <p className='input-label'> Message *</p>    
            <input
              className='input'
              type='text'
              placeholder="Message..."
              {...register("msg", {
                required: true,
                maxLength: 400
              })}
            />  
            {errors.msg && <span className='error'>
              {errors.msg.type === 'required' && 'this field is required'}
              {errors.msg.type === 'maxLength' && 'Max Length 400'}

              </span>}
            

            <div>
              <input className='submit' type='submit' value="Send Form"></input>
             </div>

            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App;
