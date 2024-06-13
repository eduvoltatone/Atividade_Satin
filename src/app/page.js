import Header from '../components/Header/Header';
import CardSection from '../components/CardSection/CardSection';

export default function Home() {
    return (
        <div>
            <Header titulo="Squirtle" />
            <CardSection titulo="Descrição">
                <p>Squirtle é uma pequena tartaruga azul com uma cauda ondulada em forma de concha.</p>
            </CardSection>
            <CardSection titulo="Habilidades">
                <p>Squirtle tem a habilidade de disparar água de sua boca com alta precisão.</p>
            </CardSection>
            <CardSection titulo="Evoluções">
                <p>Squirtle evolui para Wartortle e depois para Blastoise.</p>
            </CardSection>
        </div>
    );
}
