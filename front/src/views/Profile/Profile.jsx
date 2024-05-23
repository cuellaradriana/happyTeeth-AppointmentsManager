import { useSelector } from 'react-redux';
import ProfileUser from '../../components/ProfileComponents/ProfileUser';

const Profile = () => {
    const user = useSelector((state) => state.user);

    return (
        <main>
            <ProfileUser user={user} />
        </main>
    );
};

export default Profile;
