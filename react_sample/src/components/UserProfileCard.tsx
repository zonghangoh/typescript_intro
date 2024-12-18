import { User } from "../hooks/useUser";

const UserProfileCard = ({ user }: { user: User }) => {
    return <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
        <img 
            src={user.avatarUrl} 
            alt={user.name} 
            style={{ width: '150px', borderRadius: '50%' }}
        />
        <h1>{user.name}</h1>
        {user.bio && <p>{user.bio}</p>}
        {user.email && <p>Email: {user.email}</p>}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div>
                <p>Public Repos: {user.publicRepos}</p>
                <p>Public Gists: {user.publicGists}</p>
            </div>
            <div>
                <p>Followers: {user.followers}</p>
                <p>Following: {user.following}</p>
            </div>
        </div>
        <div>
            <p>Member since: {user.createdAt.toLocaleDateString()}</p>
            <p>Last updated: {user.updatedAt.toLocaleDateString()}</p>
        </div>
        <a href={user.profileUrl} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
        </a>
    </div>
}

export default UserProfileCard;