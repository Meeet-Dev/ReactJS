import './App.css'
import ProfileCard  from './ProfileCard';
import ProfileCardList from './ProfileCardList';

export default function App() {
  return (
    <main>
      {ProfileCardList.map((profile) => {
        return (
          <ProfileCard
            name={profile.name}
            age={profile.age}
            country={profile.country}
            title={profile.title}
            />
        )
      })}
    </main>
  )
}

