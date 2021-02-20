/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
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
import SearchIcon from "@material-ui/icons/Search";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getPokemon } from './pokemonAction'
import '../page/styled.css'


// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


const Pokemon = (props) => {

    const [page, setPage] = useState(0)
    const [filter, setFilter] = useState('')
    const [order, setOrder] = useState(0)

    //Alteração de estado no array, executa a função no primeiro parametro 
    useEffect(async () => {
        console.log('prop', props)
        await props.getPokemon(page)
    }, [])

    useEffect(async () => {
        console.log('page', page)
        //verificar os dados de cada pokemon
    }, [page])


    const handleClick = (index) => {
        if (!(index < 0 && page === 0))
            setPage((prev) => prev + index)
    }
    // const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
                <div>

                <TextField className='search' value={filter} onChange={(e) => setFilter(e.target.value)}>
                </TextField>
                <SearchIcon />
                </div>
                <div>

                <FormControl className='filter'>
                    <InputLabel id="demo-simple-select-helper-label">Ordenar por Nome</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={order}
                        onChange={(e) => setOrder(e.target.value)}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={0}>Normal</MenuItem>
                        <MenuItem value={1}>Nome</MenuItem>
                    </Select>
                </FormControl>
                </div>
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
                                            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${card.url.split('/')[6]}.png` }height="90" width="90"  
                                            title="Image title"
                                        />
                                        <CardContent className='cardContent'>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {card.name}
                                            </Typography>
                                            <Typography>
                                                This is a media card. You can use this section to describe the content.
                                        </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" color="primary">
                                                View
                                        </Button>
                                            <Button size="small" color="primary">
                                                Edit
                                        </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                    </Grid>
                    <Button size="small" color="primary" onClick={() => handleClick(- 1)}>
                        Anterior
                                        </Button>
                    <Button size="small" color="primary" onClick={() => handleClick(+ 1)} >
                        Proximo
                                        </Button>
                </Container>
            </main>
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    pokemon: state.pokemon.result
})

const mapDispatchToProps = dispach => bindActionCreators({
    getPokemon
}, dispach)

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon)