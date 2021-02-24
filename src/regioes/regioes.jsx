/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getRegionPokemon } from './regioesAction'
import '../page/styled.css'


const Pokemon = (props) => {

    const [order, setOrder] = useState(0)


    useEffect(async () => {
        await props.getRegionPokemon()
    }, [])

    return (
        <React.Fragment>
            <CssBaseline />
            <Paper className="heroContent">
                <Container maxWidth="sm">
                    <div>

                        <div className="containerFilter" >
                            <FormControl className='filter'>
                                <InputLabel id="demo-simple-select-helper-label">Ordenar por Nome</InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={order}
                                    onChange={(e) => setOrder(e.target.value)}
                                >
                                    <MenuItem value={0}>Normal</MenuItem>
                                    <MenuItem value={1}>Nome</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                </Container>
            </Paper>
            <main>

                <Typography variant="h4" className='heading' >Região Pokemon</Typography>
                <Container className='cardGrid' maxWidth="md">

                    <Grid container spacing={4}>
                        {props.regiao ? props.regiao
                            .sort((a, b) => order ? a.name.localeCompare(b.name) : 0)                            
                            .map((card) => (
                                <Grid item key={card.name} xs={12} sm={6} md={4}>
                                    <Card className='card'>                                      
                                        <CardContent className='cardContent'>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {card.name}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            )) : 'Dados não econtrado'}
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
}


const mapStateToProps = state => ({
    regiao: state.regiao.list.results
})

const mapDispatchToProps = dispach => bindActionCreators({
    getRegionPokemon
}, dispach)

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon)