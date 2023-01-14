import ProfileCard from './ProfileCard'
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'


function App() { 
    return (
        <div>
            <div>Personal Digital Assistants</div>
            <img src={AlexaImage} />
            <img src={SiriImage} />
            <ProfileCard title = 'Saul' handle = '@speedyjustice4u' />
            <ProfileCard title = 'Gus' handle = '@ceoLPH' />
            <ProfileCard title = 'Mike' handle = '@securityconsultant' />

        </div>
    );
}
export default App;