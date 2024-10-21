import React from "react";

import {
  Box,
  Flex,
  Grid,
  Image,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import FooterHeading from "../molecules/FooterHeading";
import FooterTitle from "../molecules/FooterTitle";
import SocialIoncs from "../molecules/SocialIoncs";
import { useLocation } from "react-router-dom";

const company: Array<string> = [
  "About Us",
  "Careers",
  "Blog",
  "Partner with PharmEasy",
  "Sell at PharmEasy",
];

const services: Array<string> = [
  "Order Medicine",
  "Healthcare Products",
  "Lab Tests",
  "Find Nearest Collection Centre",
  "Surgeries",
];

const category: Array<string> = [
 
];

const help: Array<string> = [
  
];

const faq: Array<string> = [
 
];

const Partners: Array<string> = [

];
const Footer: React.FC = () => {
  const location = useLocation();

  return (
    <Box
      w="95%"
      m="auto"
      bg="#eef4ff"
      mt={{ base: "2rem", md: "3rem", lg: "4rem" }}
      display={location.pathname.includes("admin") ? "none" : "flex"}
    >
      <Box w="93%" m="auto" py="4rem" display={{ base: "none", lg: "block" }}>
        <Grid gridTemplateColumns="1fr 1fr 1fr .5fr" mb="3rem">
          <Box>
            <FooterHeading heading="" />
            <Box mt=".5rem" mb="2rem">
              {company.map((item: string, index: number) => {
                return <FooterTitle key={index} title={item} />;
              })}
            </Box>
            <FooterHeading heading="" />
            <Box mt=".5rem">
              {services.map((item: string, index: number) => {
                return <FooterTitle key={index} title={item} />;
              })}
            </Box>
          </Box>
          <Box>
            <FooterHeading heading="" />
            <Box mt=".5rem">
              {category.map((item: string, index: number) => {
                return <FooterTitle key={index} title={item} />;
              })}
            </Box>
          </Box>
          <Box>
            <FooterHeading heading="" />
            <Box mt=".5rem" mb="2rem">
              {help.map((item: string, index: number) => {
                return <FooterTitle key={index} title={item} />;
              })}
            </Box>
            <FooterHeading heading="" />
            <Box mt=".5rem">
              {faq.map((item: string, index: number) => {
                return <FooterTitle key={index} title={item} />;
              })}
            </Box>
          </Box>
          <Box>
            <FooterHeading heading="" />
            <Box mt="1rem">
              <SocialIoncs />
            </Box>
          </Box>
        </Grid>

        <Box mt="3rem">
          <FooterHeading heading="" />
          <Flex>
            <Flex
              mt="1rem"
              gap="2.5rem"
              w="55%"
              justifyContent=""
              align="center"
            >
              {Partners.map((item: string, index: number) => {
                return (
                  <Box key={index}>
                    <Image src={item} alt="partnes" objectFit="cover" />
                  </Box>
                );
              })}
            </Flex>
            <Flex ml="auto">
              <Text color="" fontSize="14px" fontWeight="" fontFamily="Poppins">
                © 2024 HEALTHMATE. All Rights Reserved
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Box>

      {/* for mobile and tab*/}
     

       

            <Flex>
              <Text color="" fontSize="14px" fontWeight="" fontFamily="Poppins">
                © 2024 HEALTHMATE. All Rights Reserved
              </Text>
            </Flex>
          
        </Box>
   
    
  );
};

export default Footer;
