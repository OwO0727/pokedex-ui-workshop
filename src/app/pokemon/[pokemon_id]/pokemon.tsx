import Pokemon from "@/model/pokemon";
import { Row, Col, Container, Image, ProgressBar, Accordion, ListGroup, Badge} from 'react-bootstrap';


type Props ={
   pokemon: Pokemon;
}


export default function PokemonComponent(props : Props) {
   const {pokemon} = props;

  const getFamilyTag = (pokemon: Pokemon, evolution: string) => {
        if (evolution === pokemon.devolution) {
          return <Badge bg="danger">Devolution</Badge>
        }
        if (evolution === pokemon.pokemonName) {
          return <Badge bg="primary">Current</Badge>
        }
        if (evolution === pokemon.evolution) {
          return <Badge bg="success">Evolution</Badge>
        }
        return <></>
      }


   return (
       <Container>
           <Row className="justify-content-md-center">
               <Col md="auto"><h1>{pokemon.pokemonName}</h1></Col>
           </Row>
           <Row>
               <Col>
                   <Image src={pokemon.mainImage} alt="" thumbnail />
               </Col>
               <Col md={8}>
          <Row>
            <Col xs={3}>Speed:</Col>
            <Col><ProgressBar variant="info" now={pokemon.speed} label={pokemon.speed} /></Col>
        </Row>
        <Row>
            <Col xs={3}>Health points: </Col>
            <Col><ProgressBar variant="danger" now={pokemon.healthPoints} label={pokemon.healthPoints} /></Col>
        </Row>
        <Row>
            <Col xs={3}>Attack: </Col>
            <Col><ProgressBar variant="warning" now={pokemon.attack} label={pokemon.attack} /></Col>
        </Row>
        <Row>
            <Col xs={3}>Defense: </Col>
            <Col><ProgressBar variant="success" now={pokemon.defense} label={pokemon.defense} /></Col>
        </Row>
    <Accordion alwaysOpen >
      <Accordion.Item eventKey="0" >
        <Accordion.Header>Pokemon type</Accordion.Header>
        <Accordion.Body>
            <ListGroup variant="flush">
                {pokemon.pokemonType.map(type => <ListGroup.Item key={pokemon.pokemonNumber}>{type}</ListGroup.Item>)}
            </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Evalution family</Accordion.Header>
        <Accordion.Body>
            <ListGroup variant="flush">
                {pokemon.evolutionFamily.map(evolution => <ListGroup.Item key={pokemon.pokemonNumber}>{evolution} {getFamilyTag(pokemon, evolution)}</ListGroup.Item>)}
            </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </Col>
           </Row>
       </Container>
   );
}
