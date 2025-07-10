import { Typewriter } from 'react-simple-typewriter';

const Hello = () => {
  return(
    <div>
      <h1 className="intro-title">
        <span style={{ marginRight: "10px" }}> 
          <Typewriter
            words={['Hello', 'Bonjour', 'Hola', 'नमस्ते', 'こんにちは', '안녕하세요', 'Olá', 'Здравствуйте']}
            loop={0} // infinite
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={60}
            delaySpeed={1200}
          />
          </span>
</h1>

    </div>
  )
  };

  export default Hello;