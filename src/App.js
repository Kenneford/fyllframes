import logo from './logo.svg';
import './App.css';
import BlogCards from './components/BlogCards';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import allData from './fyllData.json'
import Typography from '@mui/material/Typography';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Container sx={{
                background: "#ccc"
            }}>
            <Header />
                <Container sx={{marginY: 5}}>
                    {allData.map((data, id) =>(
                        <>
                        <Typography
                        variant='h4'
                        component="h2"
                        marginTop={5}
                        marginBottom={3}
                        key={id}
                        className="title"
                        sx={{
                            fontFamily: "Poppins",
                            fontWeight: "bolder"
                        }}
                        >
                            {data.title}
                        </Typography>
                        <Typography sx={{
                            marginTop: "-20px",
                            color: "#696969"
                        }}>
                            {data.discription}
                        </Typography>
                        <Grid container spacing={5} className="allCards">
                            {data.onCards.map((card, id) =>(
                                <BlogCards card={card} key={id}/>
                            // console.log(card.image)
                            ))}
                        {/* <BlogCards />
                        <BlogCards />
                        <BlogCards />
                        <BlogCards /> */}
                        </Grid>
                </>
                    ))}
                </Container>
                <Footer />
        </Container>
    </div>
  );
}

export default App;
