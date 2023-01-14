import 'bulma/css/bulma.css'
import ProfileCard from './ProfileCard'
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'


function App() { 
    return (
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                    <p className='title'>Personal  Digital Assistants</p>
                </div>
            </section>
                <div className='container'>
                    <section className='section'>
                    <div className='columns'>
    
                        <div className='column is-4'>
                        <ProfileCard title = 'Saul' handle = '@speedyjustice4u' image = {AlexaImage} bio ="better call saul!" />

                        </div>
                        <div className='column is-4'>
                        <ProfileCard title = 'Gus' handle = '@ceoLPH' image = {CortanaImage} bio ="kys"/>

                            </div>
                            <div className='column is-4'>
                            <ProfileCard title = 'Mike' handle = '@securityconsultant' image = {SiriImage} bio ="die"/>
                            </div>
                            </div>
                    </section>

                </div>
           
        </div>
    );
}
export default App;