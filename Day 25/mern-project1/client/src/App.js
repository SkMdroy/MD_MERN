import React, { useState, useEffect } from 'react';
import { getItems, addItem, updateItem, deleteItem } from './services/itemServices';

const App = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ empid: '', username: '', age: '', email: '', address: '', salary: '' });
  const [editingItem, setEditingItem] = useState(null);
  const [currentItem, setCurrentItem] = useState({ empid: '', username: '', age: '', email: '', address: '', salary: '' });

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await getItems();
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const handleAddItem = async () => {
    try {
      const response = await addItem(newItem);
      setItems([...items, response.data]);
      setNewItem({ empid: '', username: '', age: '', email: '', address: '', salary: '' });
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const handleUpdateItem = async (id) => {
    try {
      const response = await updateItem(id, currentItem);
      setItems(items.map(item => (item._id === id ? response.data : item)));
      setEditingItem(null);
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      await deleteItem(id);
      setItems(items.filter(item => item._id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem(prevState => ({
      ...prevState,
      [name]: value
    }));
    setCurrentItem(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setCurrentItem(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>CRUD Operations</h1>
      <div style={styles.formContainer}>
        <h2 style={styles.subHeading}>Add New Item</h2>
        <div style={styles.inputGroup}>
          <input type="number" name="empid" value={newItem.empid} onChange={handleChange} placeholder="Enter empid" style={styles.input} />
          <input type="text" name="username" value={newItem.username} onChange={handleChange} placeholder="Enter username" style={styles.input} />
          <input type="number" name="age" value={newItem.age} onChange={handleChange} placeholder="Enter age" style={styles.input} />
          <input type="email" name="email" value={newItem.email} onChange={handleChange} placeholder="Enter email" style={styles.input} />
          <input type="text" name="address" value={newItem.address} onChange={handleChange} placeholder="Enter address" style={styles.input} />
          <input type="number" name="salary" value={newItem.salary} onChange={handleChange} placeholder="Enter salary" style={styles.input} />
        </div>
        <button onClick={handleAddItem} style={styles.addButton}>
          Add
        </button>
      </div>

      <h2 style={styles.subHeading}>Items List</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Empid</th>
            <th style={styles.th}>Username</th>
            <th style={styles.th}>Age</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Address</th>
            <th style={styles.th}>Salary</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item._id} style={styles.tr}>
              {editingItem === item._id ? (
                <>
                  <td style={styles.td}>
                    <input type="number" name="empid" value={currentItem.empid} onChange={handleEditChange} style={styles.input} />
                  </td>
                  <td style={styles.td}>
                    <input type="text" name="username" value={currentItem.username} onChange={handleEditChange} style={styles.input} />
                  </td>
                  <td style={styles.td}>
                    <input type="number" name="age" value={currentItem.age} onChange={handleEditChange} style={styles.input} />
                  </td>
                  <td style={styles.td}>
                    <input type="email" name="email" value={currentItem.email} onChange={handleEditChange} style={styles.input} />
                  </td>
                  <td style={styles.td}>
                    <input type="text" name="address" value={currentItem.address} onChange={handleEditChange} style={styles.input} />
                  </td>
                  <td style={styles.td}>
                    <input type="number" name="salary" value={currentItem.salary} onChange={handleEditChange} style={styles.input} />
                  </td>
                  <td style={styles.td}>
                    <button onClick={() => handleUpdateItem(item._id)} style={styles.saveButton}>
                      Save
                    </button>
                    <button onClick={() => setEditingItem(null)} style={styles.cancelButton}>
                      Cancel
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td style={styles.td}>{item.empid}</td>
                  <td style={styles.td}>{item.username}</td>
                  <td style={styles.td}>{item.age}</td>
                  <td style={styles.td}>{item.email}</td>
                  <td style={styles.td}>{item.address}</td>
                  <td style={styles.td}>{item.salary}</td>
                  <td style={styles.td}>
                    <button onClick={() => { setEditingItem(item._id); setCurrentItem(item); }} style={styles.editButton}>
                      Edit
                    </button>
                    <button onClick={() => handleDeleteItem(item._id)} style={styles.deleteButton}>
                      Delete
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f5f5',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  },
  subHeading: {
    color: '#333',
    marginBottom: '10px',
  },
  formContainer: {
    marginBottom: '30px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  inputGroup: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gridGap: '10px',
  },
  input: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '3px',
    fontSize: '14px',
    transition: 'border-color 0.3s',
  },
  inputFocus: {
    borderColor: '#007bff',
  },
  addButton: {
    padding: '10px 20px',
    backgroundColor: '#FF9933', // Saffron color
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'background-color 0.3s, transform 0.2s',
    marginTop: '10px',
  },
  addButtonHover: {
    backgroundColor: '#e68a00', // Darker saffron color
    transform: 'scale(1.05)',
  },
  saveButton: {
    padding: '10px 20px',
    backgroundColor: '#138808', // Green color
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'background-color 0.3s, transform 0.2s',
    marginRight: '5px',
  },
  saveButtonHover: {
    backgroundColor: '#0c6b04', // Darker green color
    transform: 'scale(1.05)',
  },
  cancelButton: {
    padding: '10px 20px',
    backgroundColor: '#000080', // Navy blue color
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'background-color 0.3s, transform 0.2s',
  },
  cancelButtonHover: {
    backgroundColor: '#00004d', // Darker navy blue color
    transform: 'scale(1.05)',
  },
  editButton: {
    padding: '10px 20px',
    backgroundColor: '#FF9933', // Saffron color
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'background-color 0.3s, transform 0.2s',
    marginRight: '5px',
  },
  editButtonHover: {
    backgroundColor: '#e68a00', // Darker saffron color
    transform: 'scale(1.05)',
  },
  deleteButton: {
    padding: '10px 20px',
    backgroundColor: '#000080', // Navy blue color
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'background-color 0.3s, transform 0.2s',
  },
  deleteButtonHover: {
    backgroundColor: '#00004d', // Darker navy blue color
    transform: 'scale(1.05)',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  th: {
    padding: '10px',
    textAlign: 'left',
    backgroundColor: '#f2f2f2',
    borderBottom: '1px solid #ddd',
  },
  tr: {
    transition: 'background-color 0.3s',
  },
  td: {
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
};

export default App;