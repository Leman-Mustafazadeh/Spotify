import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const AddSongs = () => {
  const { allDAta } = useSelector(state => state.player);
  const initialFormData = {
    artist: '',
    name: '',
    genre: '',
    musicSrc: '',
    imgSrc: '',
    photo: ''
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = 'http://localhost:6060/songs';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Song added successfully!');
        setFormData(initialFormData); // Formu sıfırla
      } else {
        console.error('Failed to add song');
      }
    } catch (error) {
      console.error('Error adding song:', error);
    }
  };

  return (
    <div className="add-song-container">
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
            type="text"
            id="musicSrc"
            name="musicSrc"
            value={formData.musicSrc}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="imgSrc">Image Source:</label>
          <input
            type="text"
            id="imgSrc"
            name="imgSrc"
            value={formData.imgSrc}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="photo">Photo:</label>
          <input
            type="text"
            id="photo"
            name="photo"
            value={formData.photo}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" style={{backgroundColor:'black',color:'white',fontSize:'20px',fontWeight:'500px',marginTop:'20px',padding:'5px',borderRadius:'5px'}}>Add Song</button>
      </form>
    </div>
  );
};

export default AddSongs;
