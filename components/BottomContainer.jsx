import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import {Box,Button,Container,Flex,Text} from "@chakra-ui/react"
import { motion } from 'framer-motion'


function BottomContainer (){
    return(
        <>
        <Box width={'90%'} margin={'auto'} color={'white'} >
        <Text as={'h1'}  fontWeight={'900'} fontSize={'27px'} color={'#E9484E'} style={{zIndex:1}} >ZOOM RED</Text>

        <Flex position={'relative'}>
            <Box>
                <Flex><p style={{width:'350px',fontSize:'11px'}}>Always ready to play, always ready to compete, Kevin Durant's tenth shoe is as versatile and responsive as KD.
                 Zoned Flyknit provides breathability and stretch.
            </p>

            <Box>
                <Flex justifyContent={'center'} alignItems={'center'} gap={'10px'}>
               <button style={{background:'#DF3D3D',color:'white',padding:'1px',height:'35px',width:'140px',borderRadius:'9px'}}>JOIN US</button>
                <Image src="/Group 15.png" width={150} height={250} alt="icon"/>
                </Flex>
             
                
                </Box>
            
            </Flex></Box>

            <Box position={'absolute'} right={0}>
                <Flex gap={'15px'}>
                    <Image src="/ARRW BTN (1).png" width={30} height={250} alt="icon"/>
                    <Image src="/ARRW BTN.png" width={30} height={250} alt="icon"/>
                </Flex>
            </Box>
        </Flex>
        </Box>
        </>
    )
}

export default BottomContainer;