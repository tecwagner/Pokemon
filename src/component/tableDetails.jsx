/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getDetailPokemon } from '../pokemon/pokemonAction';
import { bindActionCreators } from 'redux';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const TableDetails = (props) => {

    useEffect(async () => {
        await props.getDetailPokemon(props.match.params.name)    
    }, [])

    const { id, name, height, weight } = props.details;

    return (
        <div className='root'>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Paper className='paper'>
                        <Container maxWidth="sm" >
                            <Typography variant="h4" className='heading' >Perfil Pokemon</Typography>
                            <TableContainer component={Paper}>
                                <Table className='table' aria-label="simple table">
                                    <TableHead>                                       
                                        <TableRow>
                                            <TableCell><strong>Número:</strong></TableCell>
                                            <TableCell align="center">{id}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell><strong>Nome:</strong></TableCell>
                                            <TableCell align="center">{name}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell><strong>Altura:</strong></TableCell>
                                            <TableCell align="center">{height}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell><strong>Peso:</strong></TableCell>
                                            <TableCell align="center">{weight}</TableCell>
                                        </TableRow>                                        
                                    </TableHead>                                 
                                </Table>
                            </TableContainer>
                            <TableContainer component={Paper}>
                                <Table className='table' aria-label="simple table">
                                    <TableHead>                                       
                                        <TableRow>
                                            <TableCell><strong>Habilidades:</strong></TableCell>
                                            {props.details.abilities ? props.details.abilities.map(row => (                                         
                                               <TableCell align="center">{row.ability.name}</TableCell>
                                            )) : 'Dados não encontrado'} 
                                        </TableRow>
                                    </TableHead>                                 
                                </Table>
                            </TableContainer>
                            <Grid className='button-sair'>
                                <Link to={`/`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                                    <Button size="small" variant="contained" color="secondary" >
                                        Voltar
                                    </Button>
                                </Link>
                            </Grid>
                        </Container>
                    </Paper>
                </Grid>
            </Grid>
        </div> 
    )
}

const mapStateToProps = state => ({
    details: state.pokemon.details
})

const mapDispatchToProps = dispach => bindActionCreators({
    getDetailPokemon
}, dispach)

export default connect(mapStateToProps, mapDispatchToProps)(TableDetails)