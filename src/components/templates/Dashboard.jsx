import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getComments } from '../../features/dashboard/commentService';
import DashboardItem from '../organisms/DashboardItem';
import Modal from '../molecules/Modal';
import ModalHeader from '../molecules/ModalHeader';
import { useAuth } from '../../hooks/useAuth';

const Dashboard = () => {
    const [comments, setComments] = useState([]);
    const [selectedComment, setSelectedComment] = useState(null);
    const { logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const data = await getComments();
            setComments(data);
        };
        fetchData();
    }, []);

    const openModal = (comment) => setSelectedComment(comment);
    const closeModal = () => setSelectedComment(null);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className='p-6'>
            <div className='flex justify-between items-center mb-4'>
                <h1 className='text-2xl font-bold'>Dashboard</h1>
                <button onClick={handleLogout} className='bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700'>
                    Close Session
                </button>
            </div>
            <div className='overflow-y-scroll h-[800px]'>
                {comments.map((comment) => (
                    <DashboardItem key={comment.id} comment={comment} openModal={openModal} />
                ))}
            </div>
            {selectedComment && (
                <Modal closeModal={closeModal}>
                    <ModalHeader title='Comment Details' onClose={closeModal} />
                    <p>{selectedComment.id}</p>
                    <p>{selectedComment.name}</p>
                    <p>{selectedComment.email}</p>
                    <p>{selectedComment.body}</p>
                </Modal>
            )}
        </div>
    );
};

export default Dashboard;
