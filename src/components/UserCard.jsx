export default function UserCard({ user }) {
  return (
    <div className="p-4 border rounded-lg bg-white shadow-sm flex gap-4 items-center">
      <img
        src={user.image}
        alt={user.firstName}
        className="w-16 h-16 rounded-full"
      />
      <div>
        <h2 className="text-lg font-bold">
          {user.firstName} {user.lastName}
        </h2>
        <p className="text-sm text-gray-600">{user.email}</p>
        <p className="text-sm">{user.company?.title}</p>
        <p className="text-xs italic text-gray-500">{user.university}</p>
      </div>
    </div>
  );
}
