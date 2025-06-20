import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Spinner from "./Spinner";
import UserCard from "./UserCard";

export default function UserFeed() {
  const [users, setUsers] = useState([]);
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const observerRef = useRef();

  const fetchUsers = async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    try {
      const res = await axios.get(
        `https://tech-test.raintor.com/api/users/GetUsersList?take=10&skip=${skip}`
      );
      const newUsers = res.data.users;
      setUsers((prev) => [...prev, ...newUsers]);
      setSkip((prev) => prev + 10);
      if (skip + 10 >= res.data.total) {
        setHasMore(false);
      }
    } catch (err) {
      setError("Failed to load users.");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && hasMore) {
          fetchUsers();
        }
      },
      { threshold: 1.0 }
    );

    const el = observerRef.current;
    if (el) observer.observe(el);

    return () => el && observer.unobserve(el);
  }, [hasMore, loading]);

  return (
    <div className="max-w-xl mx-auto p-4 space-y-4">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}

      {loading && <Spinner />}
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div ref={observerRef} className="h-10" />
    </div>
  );
}
