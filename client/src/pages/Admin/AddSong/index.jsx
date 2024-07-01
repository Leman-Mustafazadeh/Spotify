import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const AddSongs = () => {
  const initialFormData = {
    artist: '',
    name: '',
    genre: '',
    musicSrc: null,
    imgSrc: null,
    photo: null
  };

  const [formData, setFormData] = useState(initialFormData);
  const [fileInputs, setFileInputs] = useState({
    musicFile: null,
    imgFile: null,
    photoFile: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFileInputs({ ...fileInputs, [name]: files[0] });
    setFormData({ ...formData, [name]: files[0] }); // FormData'ya dosya eklemek için
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('artist', formData.artist);
    formDataToSend.append('name', formData.name);
    formDataToSend.append('genre', formData.genre);
    formDataToSend.append('musicSrc', formData.musicSrc);
    formDataToSend.append('imgSrc', formData.imgSrc);
    formDataToSend.append('photo', formData.photo);
    formDataToSend.append('musicFile', fileInputs.musicFile);
    formDataToSend.append('imgFile', fileInputs.imgFile);
    formDataToSend.append('photoFile', fileInputs.photoFile);

    const url = 'http://localhost:6060/songs'; // Sunucu URL'si doğrulanmalı

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        console.log('Song added successfully!');
        setFormData(initialFormData); // Formu başlangıç verilerine sıfırla
        setFileInputs({
          musicFile: null,
          imgFile: null,
          photoFile: null
        });
      } else {
        console.error('Failed to add song');
      }
    } catch (error) {
      console.error('Error adding song:', error);
    }
  };

  return (
    <div  className="add-song-container">
      <h2>Add Song</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="artist">Artist:</label>
          <input
            type="text"
            id="artist"
            name="artist"
            value={formData.artist}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="genre">Genre:</label>
          <input
            type="text"
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="musicSrc">Music Source:</label>
          <input
            type="file"
            id="musicSrc"
            name="musicSrc"
            onChange={handleFileChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="imgSrc">Image Source:</label>
          <input
            type="file"
            id="imgSrc"
            name="imgSrc"
            onChange={handleFileChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="photo">Photo:</label>
          <input
            type="file"
            id="photo"
            name="photo"
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit">Add Song</button>
      </form>
    </div>
  );
};

export default AddSongs;
