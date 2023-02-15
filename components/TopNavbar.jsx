import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import {Box,Container,Flex,Text} from "@chakra-ui/react"
import { motion } from 'framer-motion'


function Navbar (){
    const navBoxAnimate = {
        hidden:{
            opacity:0
        },
        visible:{
            opacity:1,
            
            transition:{
                staggerChildren:0.5,
                when:"beforeChildren",
                delay:1
            }
        }
    }

    const imageAnimate = {
        hidden:{
            opacity:0,
            x:-50
        },
        visible:{
            opacity:1,
            x:0
        }
    }
    return(
        <>
        <Box as={motion.div} color={'white'} position={'relative'} initial="hidden" animate="visible" variants={navBoxAnimate}>
        <Flex justifyContent={'between'} alignItems={'center'} flexDirection={'row'}>
            <Text as={'h1'} position={'absolute'} top={5} right={'500px'} fontWeight={'600'} fontSize={'15px'} style={{textAlign:'center',marginLeft:'100px'}}>ZOOM KD 10</Text>

          <Flex justifyContent={'center'} alignItems={'center'} position={'absolute'} right={10} top={2} gap={'10px'} >
            <motion.div variants={imageAnimate}>
                <Image src="/Group 18.png" width={50} height={50} alt="icon"/>
            </motion.div>
            <motion.div style={{marginLeft:'-10px'}} variants={imageAnimate}>
                <Image src="/Group 19.png" width={60} height={50} alt="icon"/>
            </motion.div>
            <motion.div variants={imageAnimate}>
                <Image src="/icon2.png" width={25} height={50} alt="icon"/>
            </motion.div>
          </Flex>
       </Flex>
        </Box>
        
        </>
    )
}


export default Navbar;