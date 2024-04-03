import { Box, Container } from "@mui/material";
import Header from "@/components/Header";
import Inputs from "@/components/Inputs";
import Outputs from "@/components/Outputs";

export default function Home() {
  return (
    <Container>
      <Header />
      <Inputs />
      <Outputs />
    </Container>
  );
}
