import 'bulma/css/bulma.css'
import ProfileCard from './ProfileCard'
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'


function App() { 
    return (
        <div>
            <div>Personal Digital Assistants</div>
        
            <ProfileCard title = 'Saul' handle = '@speedyjustice4u' image = {AlexaImage} />
            <ProfileCard title = 'Gus' handle = '@ceoLPH' image = {CortanaImage}/>
            <ProfileCard title = 'Mike' handle = '@securityconsultant' image = {SiriImage}/>

        </div>
    );
}
export default App;