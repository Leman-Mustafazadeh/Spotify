import React, { useState, useEffect } from 'react';
import { Space, Table, Button, Modal, Input } from 'antd';
import './dashboard.css';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import { deleteOne, patch } from '../../../API';
import { endpoints } from '../../../API/constants';

const AdminDashboard = () => {
  const [data, setData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);
  const [editFormData, setEditFormData] = useState(null);

  const {allDAta} = useSelector(state => state.player);

  useEffect(() => {
    setData(allDAta);
  }, [allDAta]);

  const handleDelete = id => {
    deleteOne(endpoints.songs,id)
    setSelectedSong(id);
    setModalOpen(true);
  };

  const handleConfirmDelete = () => {
    const updatedSongs = data.filter(song => song._id !== selectedSong);
    setData(updatedSongs);
    setModalOpen(false);
    patch(endpoints.songs,)
    Swal.fire({
      title: 'Deleted!',
      text: 'Your song has been deleted.',
      icon: 'success'
    });
  };

  const handleCancelDelete = () => {
    setModalOpen(false);
    Swal.fire({
      title: 'Cancelled',
      text: 'Deletion cancelled.',
      icon: 'info'
    });
  };

  const handleEdit = record => {
    setEditFormData(record);
    setModalOpen(true);
    patch(endpoints.songs,record)
  };

  const handleSaveEdit = () => {
    const updatedSongs = data.map(song =>
      song._id === editFormData._id ? { ...song, ...editFormData } : song
    );
    setData(updatedSongs);
    setEditFormData(null);
    setModalOpen(false);
    Swal.fire({
      title: 'Saved!',
      text: 'Changes have been saved.',
      icon: 'success'
    });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Artist',
      dataIndex: 'artist',
      key: 'artist'
    },
    {
      title: 'Image',
      key: 'imgSrc',
      dataIndex: 'imgSrc',
      render: imgSrc =>
        imgSrc ? (
          <img
            src={imgSrc}
            alt="album cover"
            style={{ width: 50, height: 50 }}
          />
        ) : null
    },
    {
      title: 'Delete',
      key: 'delete',
      render: (_, record) => (
        <Button type="link" danger onClick={() => handleDelete(record._id)}>
          Delete
        </Button>
      )
    },
    {
      title: 'Edit',
      key: 'edit',
      render: (_, record) => (
        <Button type="link" onClick={() => handleEdit(record)}>
          Edit
        </Button>
      )
    }
  ];

  return (
    <div className="admindash">
      <Table columns={columns} dataSource={data} />

      <Modal
        title="Edit Song"
        open={modalOpen && !!editFormData}
        onOk={handleSaveEdit}
        onCancel={() => setModalOpen(false)}
      >
        <p>This action cannot be undone.</p>
        <Input
          name="name"
          value={editFormData?.name}
          onChange={handleChange}
          placeholder="Name"
          style={{ marginBottom: 10 }}
        />
        <Input
          name="artist"
          value={editFormData?.artist}
          onChange={handleChange}
          placeholder="Artist"
          style={{ marginBottom: 10 }}
        />
        <Input
          name="imgSrc"
          value={editFormData?.imgSrc}
          onChange={handleChange}
          placeholder="Image URL"
          style={{ marginBottom: 10 }}
        />
      </Modal>

      <Modal
        title={`Are you sure you want to delete ${selectedSong}?`}
        open={modalOpen && !editFormData}
        onOk={handleConfirmDelete}
        onCancel={handleCancelDelete}
        okText="Yes"
        cancelText="No"
      >
        <p>This action cannot be undone.</p>
      </Modal>
    </div>
  );
};

export default AdminDashboard;
