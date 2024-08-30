import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid2";
import Lottie from "react-lottie-player";
import lottiejson from '/public/mainpage.json'

export default function Mainpage(){
    return(
        <>
            <Button variant="outlined">프로젝트 보러가기</Button>
            <Grid container spacing={5}>
                <Grid size={4}>
                    <div style={{border : '1px solid black'}}><h2>병준이의 포트폴리오</h2></div>
                </Grid>
                <Grid size={7}>
                    <div style={{border : '1px solid black'}}>
                        <Lottie
                            loop
                            animationData={lottiejson}
                            play
                        />
                    </div>
                </Grid>
            </Grid>
        </>
    )
}