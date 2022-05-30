
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { UserCard } from '../../components/userCard/UserCard';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import './Main.scss';

export function Main() {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let [user, setUser] = useLocalStorage('user', null)
 
  return (
    <>
      <Header
        user={ user }
      />

      <UserCard
        user={user}
      />  

      <Footer/>
    </>
  );
}