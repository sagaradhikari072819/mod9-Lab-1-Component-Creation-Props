// types/index.ts
export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatarUrl?: string;
}
 
export interface UserProfileCardProps {
  user: User;
  showEmail?: boolean;
  showRole?: boolean;
  onEdit?: (userId: string) => void;
  children?: React.ReactNode;
}

function UserProfileCard({ user, showEmail, showRole, onEdit, Children}: UserProfileCardProps){
  return(
    <div className="bg-white shawod-md rounded-lg p-6 max-w-full flex-col items-center space-y-6">
      {/* Avatar + Info Row */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-6 text-center sm:text-left">
        <div className="w-24 h-24 overflow-hidden border-2 border-gray-200">
          <img src={"./TigerImage.jpg"} alt={user.name}
          className="w-fill h-full object-cover" />
          </div>
          <div className="mt-4 sm:mt-0"> 
            <p className="text-lg font-semibold text-gray-900">{user.name}</p>
           {showEmail && (<p className="text-gray-600 text-sm">{user.email}</p>)}
           {showRole && (<p className="text-indigo-600 text-sm font-medium">{user.role}</p>)}
          </div>
      </div>
      {/* extra content and edit button */}
      <div className="w-full flex flrs-col gap-y-3">
        {Children}
        {onEdit && (
          <button onClick={() => onEdit(user.id)} className="px-4 py-2 bg-indigo-600 text-sm rounded-md hover:bg-indigo-700 transition-colors duration-200">Edit Profile</button>
        )}
        
      </div>
    </div>
  );
}
export default UserProfileCard;