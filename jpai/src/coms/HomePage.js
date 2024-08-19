import './HomePage.css';
import ContentBox from './contentBox/ContentBox'
import Textarea from '@mui/joy/Textarea';

function HomePage() {
  return (
    <div className="HomePage" style={{ display: 'flex' }} >

     <div style={{ color: 'red' }} className='sideArea'>

      <div className='sideBar'>
      侧边栏</div>

      </div>

     <div className='contentArea'>
      
      <div className='dialog'>
      对话框
      <ContentBox></ContentBox>
     </div>

     <div className='textArea'>
      
     <Textarea
  color="neutral"
  minRows={5}
  size="lg"
  variant="solid"
  className='inputText'
/>
      {/* <textarea className='inputText' >
        
      </textarea> */}
      <div className='send'>send</div>

     </div>
     </div>
     
    </div>


    
  );
}

export default HomePage;
