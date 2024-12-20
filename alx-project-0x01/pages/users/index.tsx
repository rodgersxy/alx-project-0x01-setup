// pages/users/index.tsx
import { useState } from 'react';
import { UserProps, UserData } from "@/interfaces";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";

const Users: React.FC<{ posts: UserProps[] }> = ({ posts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState<UserProps[]>(posts);

  const handleAddUser = (userData: UserData) => {
    const newUser = {
      ...userData,
      id: users.length + 1, // Simple ID generation
    };
    setUsers([...users, newUser]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-8">
        <div className="flex justify-between mb-8">
          <h1 className="text-2xl font-semibold">User Directory</h1>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
          >
            Add User
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user: UserProps) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </main>

      <UserModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddUser}
      />
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;