// const styles = {
//   container: {
//     minHeight: 'calc(100vh - 50px)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontWeight: 500,
//     fontSize: 48,
//     textAlign: 'center',
//   },
// };
// import { useAuth } from 'hooks/useAuth';
// import { LoginForm } from 'components/LoginForm/LoginForm';
// import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { HomeInfo, Greeting } from 'pages/Home/HomePage.styled';

export default function Home() {
  // const { isLoggedIn } = useAuth();
  return (
    <HomeInfo>
      <Greeting>Your PhoneBook App</Greeting>
    </HomeInfo>
  );
}

// export default function Home() {
//   const { isLoggedIn } = useAuth();
//   return (
//     <HomeInfo>
//       <Greeting>Welcome to Phonebook!</Greeting>
//       {isLoggedIn ? <LoginForm /> : <RegisterForm />}
//     </HomeInfo>
//   );
// }
