import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import illustrationImg from '../assets/images/illustration.svg';

export function Home() {
    return (
        <div id='page-auth'>
            <aside>
                <img src={illustrationImg} alt='Ilustração simbolizando perguntas e respostas'></img>
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire suas dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div>
                    <img src={logoImg} alt='Letmeask'></img>
                    <button>
                        <img src={googleIconImg} alt='Logo do Google'></img>
                        Crie sua sala com o Google
                    </button>
                    <div>ou entre em uma sala</div>
                    <form>
                        <input
                            type='text'
                            placeholder='Digite o código da sala' />
                        <button type='submit'>
                            Entrar na sala
                        </button>
                    </form>
                </div>
            </main>
        </div>
    )
}