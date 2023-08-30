import {motion, AnimatePresence} from 'framer-motion'
import { useSnapshot } from 'valtio'
import state from '../store'
import {headContainerAnimation,
        headContentAnimation,
        headTextAnimation,
        slideAnimation
} from  '../config/motion'

import CustomButton from '../components/CustomButton'

const Home = () => {

    const snap =useSnapshot(state);

  return (

    <AnimatePresence>
        {snap.intro && (
            <motion.section className='home' {...slideAnimation('left')}>
                <motion.header{...slideAnimation}>
                    
                    <img 
                     src='./logo.png'
                     alt='logo'
                     className='w-32 h-32'/>
                     
                </motion.header>

                <motion.div className='home-content' {...headContainerAnimation}>
                    
                    <motion.div {...headTextAnimation}>
                        <h1 className='text-7xl text-white'>
                        Wear Your <br className='x1:block hidden'/> Imagination
                        </h1>
                    </motion.div>

                    <motion.div className='flex flex-col gap-5'{...headContentAnimation}>
                        <p className='max-w-md font-normal text-white text-base tracking-wide'>Design an exclusive T-shirt using our 3D customization tool with enabled AI.
                             {" "}<strong>Set The Trend</strong>{" "}
                            and define your unique style.
                        </p>

                        <CustomButton 
                        type="filled"
                        title = "Get Started"
                        handleClick= {() => state.intro = false}
                        customStyles= "w-fit px-4 py-2.5 font-bold text-sm"
                        />

                    </motion.div>

                </motion.div>
            </motion.section>
        )}
    </AnimatePresence>

  )
}

export default Home
