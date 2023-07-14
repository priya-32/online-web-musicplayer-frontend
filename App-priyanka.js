import {Route,Routes,Link} from 'react-router-dom';
import Login from './login';
import RegisterForm from './signup';
import Forgott from './forget';
import ResetPassword from './reset';
import MainPage from './MainPage';
import Appp from './Appp';
import Song from './Songs';
import Profile from './myprofile';
import SearchBar from './Search';
import SongAni from './SongAni';
import Songspb from './Songspb';
import Songaadhi from './Songaadhi';
import Songtaylor from './Songtaylor';
import Songjustin from './Songjustin';
import Songzayn from './Songzayn';
import Songsid from './Songsid';
import Songar from './Songar';
import Songu1 from './Songu1';
import Songilai from './Songilai';
import Songbts from './Songbts';
import Songselena from './Songselena';
import Songva from './Songva';
import Songmukala from './Songmukala';
import Songbutter from './Songbutter';
import Songlove from './Songlove';
import Song19 from './Song19';
import Song20 from './Song20';
import Song21 from './Song21';
import Song22 from './Song22';
import Song23 from './Song23';
import Song24 from './Song24';
import Song25 from './Song25';
import Song26 from './Song26';
import Song27 from './Song27';
import Song28 from './song28';

function App() {
  return (
    <div className='App'>  
     <Routes>
<Route path='/' element={<Login/>}/>
<Route path='/signup' element={<RegisterForm/>}/>
<Route path='/forget' element={<Forgott/>}/>
<Route path='/reset' element={<ResetPassword/>}/>
<Route path='/MainPage' element={<MainPage/>}/>
<Route path='/Appp' element={<Appp/>}/>
<Route path='/Songs' element={<Song/>}/>
<Route path='/myprofile' element={<Profile/>}/>
<Route path='/Search' element={<SearchBar/>}/>
<Route path='/SongAni' element={<SongAni/>}/>
<Route path='/Songspb' element={<Songspb/>}/>
<Route path='/Songaadhi' element={<Songaadhi/>}/>
<Route path='/Songtaylor' element={<Songtaylor/>}/>
<Route path='/Songjustin' element={<Songjustin/>}/>
<Route path='/Songzayn' element={<Songzayn/>}/>
<Route path='/Songsid' element={<Songsid/>}/>
<Route path='/Songar' element={<Songar/>}/>
<Route path='/Songu1' element={<Songu1/>}/>
<Route path='/myprofile' element={<Profile/>}/>
<Route path='/Songilai' element={<Songilai/>}/>
<Route path='/Songbts' element={<Songbts/>}/>
<Route path='/Songselena' element={<Songselena/>}/>
<Route path='/Songva' element={<Songva/>}/>
<Route path='/Songmukala' element={<Songmukala/>}/>
<Route path='/Songbutter' element={<Songbutter/>}/>
<Route path='/Songlove' element={<Songlove/>}/>

<Route path='/Song19' element={<Song19/>}/>
<Route path='/Song20' element={<Song20/>}/>
<Route path='/Song21' element={<Song21/>}/>
<Route path='/Song22' element={<Song22/>}/>
<Route path='/Song23' element={<Song23/>}/>
<Route path='/Song24' element={<Song24/>}/>
<Route path='/Somg25' element={<Song25/>}/>
<Route path='/Song26' element={<Song26/>}/>
<Route path='/Song27' element={<Song27/>}/>
<Route path='/Song28' element={<Song28/>}/>
    </Routes>
      </div>
  );
}
export default App;
