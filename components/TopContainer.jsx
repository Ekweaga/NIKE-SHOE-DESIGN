import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import {Box,Container,Flex,Text} from "@chakra-ui/react"
import { motion } from 'framer-motion'





function TopContainer(){
    return(
        <>
        <Box width={'90%'} margin={'auto'} marginTop={'30px'}>
            <Flex justifyContent={'between'} alignItems={'center'} gap={'60px'} position={'relative'}>
                <Box >
                    <Box as={motion.div} style={{marginBottom:'-70px',zIndex:'200px'}} zIndex={20}  position={'relative'} >
                    <Image src="/favpng_nike-air-max-97-sports-shoes-nike-air-max-270-swoosh 1.png" width={200} height={200} alt="image" boxShadow='2xl' style={{marginLeft:'-30px'}}/>
                    </Box>
               
                <Box background={'#575E5F'} width={'150px'} height={'120px'} position={'relative'} borderRadius={10} opacity={0.9} padding={3} boxShadow='2xl' style={{zIndex:1,padding:'5px'}}>
                <Text as={'h1'}  fontWeight={'900'} fontSize={'18px'} color={'#E9484E'} position={'absolute'} bottom={5} left={5} textAlign={'center'} style={{textAlign:'center',zIndex:1}} >AIR MAX 97</Text>
                </Box>
                </Box>

                <Box position={'relative'} >
                <Box as={motion.div} style={{marginBottom:'-20px',zIndex:'200px'}} zIndex={20} position={'absolute'} top={-10} left={10} right={'-090px'}>
                    <Image src="/favpng_nike-zoom-kd-10-sports-shoes-nike-zoom-kd-line 2 (1).png" width={450} height={200} alt="image" boxShadow='2xl' style={{marginLeft:'-30px'}}/>
                    </Box>
                    <Box as={motion.div} style={{marginBottom:'-70px',zIndex:'200px'}} zIndex={20}   >
                   <Flex>
                    <h1 style={{fontWeight:'900',color:'white',fontSize:'250px'}}>R</h1>   <h1 style={{fontWeight:'900',color:'white',fontSize:'250px',zIndex:33333}}>U</h1>  <h1 style={{fontWeight:'900',color:'white',fontSize:'260px',marginTop:'0px'}}>N</h1>
                   </Flex>
                    </Box>
                </Box>

                <Box position={'absolute'} right={0} color={'white'} top={'150px'}>
                    <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={'5px'}>
                       <h2>08</h2>
                       <div><Image src="/Line 6.png" width={1} height={1} alt="image" boxShadow='2xl' /></div>
                       <h2>01</h2>

                    </Flex>
                </Box>
            </Flex>
        </Box>
      
        </>
    )
}

export default TopContainer