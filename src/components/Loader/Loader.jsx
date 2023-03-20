import { Ring } from '@uiball/loaders'


const Loader = () => {
  return (
    <div className='flex justify-center items-center mt-36'>
      <Ring 
        size={40}
        lineWeight={5}
        speed={2} 
        color="black" 
      />
    </div>
  )
}

export default Loader