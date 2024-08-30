import Header from "./header"
import Footer from "./footer"
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid2";

export default function Layout({children}){
    return(
        <>
            <Header></Header>
            <Container fixed>
                <Button variant="outlined">테스트 버튼</Button>
                <Grid container spacing={10}>
                    <Grid size={4}>
                        <div style={{border : '1px solid black'}}>{children}</div>
                    </Grid>
                    <Grid size={4}>
                        <div style={{border : '1px solid black'}}>{children}</div>
                    </Grid>
                </Grid>
            </Container>
            <Footer></Footer>
        </>
    )
}