/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getPokemon, getRegionPokemon } from './pokemonAction'
import '../page/styled.css'
import { CardActions } from '@material-ui/core';


const Pokemon = (props) => {


    const [page, setPage] = useState(0)
    const [filter, setFilter] = useState('')
    const [order, setOrder] = useState(0)
    const [detail, setDetail] = useState({})

    //Alteração de estado no array, executa a função no primeiro parametro 
    useEffect(async () => {
        await props.getPokemon(page)
    }, [])

    useEffect(async () => {
        await props.getRegionPokemon()

        //verificar os dados de cada pokemon        
    }, [])

    // const filterOrder =    

    const handleClickName = (name) => {
        console.log(name)
        setDetail(name)
    }

    const handleClick = (index) => {
        if (!(index < 0 && page === 0))
            setPage((prev) => prev + index)
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Paper className="heroContent">
                <Container maxWidth="sm">
                    <div className="containerSearch">
                        <TextField className='search' placeholder='Pesquisar...' value={filter} onChange={(e) => setFilter(e.target.value)} />
                    </div>
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
                                <MenuItem value={2}>Localização</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </Container>
            </Paper>
            <main>



                <Container className='cardGrid' maxWidth="md">

                    <Grid container spacing={4}>
                        {props.pokemon
                            .filter((p) => p.name
                                .match(new RegExp(`^${filter}.+`)))
                            .sort((a, b) => order ? a.name.localeCompare(b.name) : 0)
                            .slice(page * 12, (page + 1) * 12)
                            .map((card) => (
                                <Grid item key={card.name} xs={12} sm={6} md={4}>
                                    <Card className='card'>
                                        <CardMedia
                                            className='cardMedia'
                                            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${card.url.split('/')[6]}.png`}
                                            title="Image title"
                                        />
                                        <CardContent className='cardContent'>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {card.name}
                                            </Typography>
                                        </CardContent>
                                        <CardActions className="cardAction">
                                            <Link to={`/pokemon/${card.name}`}>
                                                <Button className="button-perfil" size="small" variant="contained" onClick={() => handleClickName(card.name)} >
                                                    Perfil
                                            </Button>
                                            </Link>

                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                    </Grid>
                    <Grid className='button'>
                        <Button className='button-anterior' size="small" color="primary" variant="contained" onClick={() => handleClick(- 1)}>
                            Anterior
                    </Button>
                        <Button className='button-proximo' size="small" color="primary" variant="contained" onClick={() => handleClick(+ 1)} >
                            Proximo
                    </Button>
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
}


const mapStateToProps = state => (console.log('state', state), {
    pokemon: state.pokemon.result,
    region: state.pokemon
    // details: state.pokemon.details
})

const mapDispatchToProps = dispach => bindActionCreators({
    getPokemon,
    getRegionPokemon
    // getDetailPokemon
}, dispach)

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon)