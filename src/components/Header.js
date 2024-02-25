import Nav from "./Nav";
import headerLogo from "../assets/images/headerlogo.png";
import { Image, VStack } from "@chakra-ui/react";

const Header = () => {
  return (
    <header>
      <VStack w="100%">
        <Image
          src={headerLogo}
          alt="little lemon logo"
          width="600px"
          mb="1rem"
        />
        <Nav />
      </VStack>
    </header>
  );
};

export default Header;
