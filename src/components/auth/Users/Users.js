import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';

const Users = () => {
    const [users, setUsers] = useState();
    const axiosPrivate = useAxiosPrivate();
    // console.log(users)
    const navigate = useNavigate();
    const location = useLocation
    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getUsers = async () => {
            try {
                const response = await axiosPrivate.get('/api/packages', {
                    signal: controller.signal
                });
                console.log(response.data);
                isMounted && setUsers(response.data);
            } catch (err) {
                console.error(err);
                navigate('/login', { state: { from: location }, replace: true });
            }
        }
        getUsers();

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [axiosPrivate])
    return (
        <article>
            <h2>Users List</h2>
            { users?.length
                ? (
                    <ul>
                        { users.map((user, i) => <li key={ i }>{ user?.name }

                        </li>
                        ) }
                    </ul>
                ) : <p>No user to display</p>
            }
        </article>
    );
};

export default Users;